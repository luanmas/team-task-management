import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CreateTaskUserUseCase } from './usecases/create-task-user.usecase';
import { AuthGuard } from 'src/infra/providers/auth-guards.provider';
import { CreateTaskUserSchemaDTO } from './schemas/task-user.schema';

@Controller()
export class TaskUserController {
  constructor(private readonly createTaskUserUseCase: CreateTaskUserUseCase) {}

  @UseGuards(AuthGuard)
  @Post('/tasks')
  async create(@Body() data: CreateTaskUserSchemaDTO, @Request() req) {
    return this.createTaskUserUseCase.execute({
      ...data,
      userId: req.user.sub,
    });
  }
}
