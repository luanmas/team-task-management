import { Module } from '@nestjs/common';
import { TaskUserController } from './task-user.controller';
import { PrismaClient } from '@prisma/client';
import { CreateTaskUserUseCase } from './usecases/create-task-user.usecase';
import { ITaskUserRepository } from './repositories/task-user.repository';
import { TaskUserPrismaRepository } from './prisma/task-user.repository.prisma';

@Module({
  imports: [],
  controllers: [TaskUserController],
  providers: [
    CreateTaskUserUseCase,
    PrismaClient,
    {
      provide: ITaskUserRepository,
      useClass: TaskUserPrismaRepository,
    },
  ],
})
export class TaskUserModule {}
