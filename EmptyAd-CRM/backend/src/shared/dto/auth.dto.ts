import { ApiProperty } from '@nestjs/swagger';

export class AuthTokenDto {
  @ApiProperty()
  access_token: string;
}

export class ProfileDto {
  @ApiProperty()
  sub: number;

  @ApiProperty()
  email: string;

  @ApiProperty({ enum: ['CEO', 'COO', 'CTO'] })
  role: 'CEO' | 'COO' | 'CTO';
}
