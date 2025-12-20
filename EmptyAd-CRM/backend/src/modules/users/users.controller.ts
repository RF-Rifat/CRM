import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { Role } from '../../shared/enums/role.enum';
import { UserResponseDto } from '../../shared/dto/user.dto';
import { UpdateRoleDto } from '../../shared/dto/update-role.dto';
import {
  UpdateProfileDto,
  ChangePasswordDto,
} from '../../shared/dto/update-profile.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { Request } from 'express';

@ApiTags('users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @Patch(':id/role')
  @ApiOkResponse({ type: UserResponseDto })
  async updateRole(@Param('id') id: string, @Body() dto: UpdateRoleDto) {
    const u = await this.users.updateRole(Number(id), dto.role ?? Role.CGO);
    if (!u) return { error: 'User not found' } as unknown as UserResponseDto;
    return {
      id: u.id,
      email: u.email,
      role: u.role,
      createdAt: u.createdAt,
      updatedAt: u.updatedAt,
    };
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('me/profile')
  @ApiOkResponse({ type: UserResponseDto })
  async updateMyProfile(
    @Req() req: Request & { user?: { sub: number } },
    @Body() dto: UpdateProfileDto,
  ) {
    const u = await this.users.updateProfile(Number(req.user?.sub ?? 0), {
      phone: dto.phone,
      location: dto.location,
      companyBio: dto.companyBio,
    });
    if (!u) return { error: 'User not found' } as unknown as UserResponseDto;
    return {
      id: u.id,
      email: u.email,
      role: u.role,
      createdAt: u.createdAt,
      updatedAt: u.updatedAt,
    };
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('me/password')
  async changeMyPassword(
    @Req() req: Request & { user?: { sub: number } },
    @Body() dto: ChangePasswordDto,
  ) {
    const ok = await this.users.changePassword(
      Number(req.user?.sub ?? 0),
      dto.oldPassword,
      dto.newPassword,
    );
    return { ok };
  }

  @Get('health')
  health() {
    return { ok: true };
  }
}
