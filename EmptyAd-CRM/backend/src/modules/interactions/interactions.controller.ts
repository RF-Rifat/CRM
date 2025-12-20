import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LogInteractionDto } from '../../shared/dto/interaction.dto';

@ApiTags('interactions')
@ApiBearerAuth()
@Controller('interactions')
export class InteractionsController {
  @Post()
  log(@Body() dto: LogInteractionDto) {
    return {
      client_id: dto.client_id,
      user_id: dto.user_id,
      type: dto.type,
      content: dto.content,
    };
  }
}
