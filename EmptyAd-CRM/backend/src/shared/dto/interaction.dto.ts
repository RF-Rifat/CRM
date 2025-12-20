import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LogInteractionDto {
  @ApiProperty()
  @IsString()
  client_id: string;

  @ApiProperty()
  @IsString()
  user_id: string;

  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsString()
  content: string;
}
