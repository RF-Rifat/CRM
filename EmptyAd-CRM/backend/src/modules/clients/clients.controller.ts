import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateClientDto } from '../../shared/dto/client.dto';

@ApiTags('clients')
@ApiBearerAuth()
@Controller('clients')
export class ClientsController {
  @Post()
  create(@Body() dto: CreateClientDto) {
    return {
      id: 'client-001',
      company_name: dto.company_name,
      assigned_to: dto.assigned_to,
      user_id: dto.user_id,
    };
  }
}
