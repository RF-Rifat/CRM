import { Controller, Post, Body, UseGuards, Get, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { LoginDto } from '../../shared/dto/user.dto';
import { AuthTokenDto, ProfileDto } from '../../shared/dto/auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('login')
  @ApiOkResponse({ type: AuthTokenDto })
  login(@Body() dto: LoginDto) {
    return this.auth.validateUser(dto.email, dto.password);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiOkResponse({ type: ProfileDto })
  profile(@Req() req: Request & { user?: unknown }) {
    return req.user as { sub: number; email: string; role: string };
  }
}
