import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../shared/entities/user.entity';
import { compare as bcryptCompare, hash as bcryptHash } from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}

  async create(
    email: string,
    name: string | undefined,
    password: string,
    role: User['role'],
  ): Promise<User> {
    const hash = await (
      bcryptHash as (a: string, b: number) => Promise<string>
    )(password, 10);
    const user = this.repo.create({
      email,
      name: name ?? null,
      password: hash,
      role,
    });
    return this.repo.save(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.repo.findOne({ where: { email } });
  }

  async updateRole(id: number, role: User['role']): Promise<User | null> {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) return null;
    user.role = role;
    return this.repo.save(user);
  }

  async updateProfile(
    id: number,
    data: { phone?: string; location?: string; companyBio?: string },
  ): Promise<User | null> {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) return null;
    user.phone = data.phone ?? user.phone ?? null;
    user.location = data.location ?? user.location ?? null;
    user.companyBio = data.companyBio ?? user.companyBio ?? null;
    return this.repo.save(user);
  }

  async changePassword(
    id: number,
    oldPassword: string,
    newPassword: string,
  ): Promise<boolean> {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) return false;
    const ok = await (
      bcryptCompare as (a: string, b: string) => Promise<boolean>
    )(oldPassword, user.password);
    if (!ok) return false;
    user.password = await (
      bcryptHash as (a: string, b: number) => Promise<string>
    )(newPassword, 10);
    await this.repo.save(user);
    return true;
  }
}
