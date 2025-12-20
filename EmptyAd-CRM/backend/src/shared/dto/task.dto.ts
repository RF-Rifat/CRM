import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  client_id: string;

  @ApiProperty()
  @IsString()
  assigned_to: string;

  @ApiProperty()
  @IsString()
  user_id: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  priority?: string;
}
