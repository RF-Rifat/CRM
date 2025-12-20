import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../shared/entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const secret: string = config.get<string>('JWT_SECRET') ?? 'secret';
        const raw = config.get<string>('JWT_EXPIRES_IN') ?? '3600s';
        const match = raw.match(/^(\d+)/);
        const expiresIn: number = Number(match ? match[1] : '3600');
        return { secret, signOptions: { expiresIn } };
      },
    }),
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
