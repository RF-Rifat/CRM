import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateTaskDto } from '../../shared/dto/task.dto';

@ApiTags('tasks')
@ApiBearerAuth()
@Controller('tasks')
export class TasksController {
  @Post()
  create(@Body() dto: CreateTaskDto) {
    return {
      id: 'task-001',
      title: dto.title,
      priority: dto.priority ?? 'medium',
      assigned_to: dto.assigned_to,
      client_id: dto.client_id,
      user_id: dto.user_id,
    };
  }
}
