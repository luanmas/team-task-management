import { PrismaClient } from '@prisma/client';
import { ITaskUserRepository } from '../repositories/task-user.repository';
import { TaskUserRequestDTO, TaskUserResponseDTO } from '../dto/task-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskUserPrismaRepository implements ITaskUserRepository {
  constructor(private prisma: PrismaClient) {}

  async save(data: TaskUserRequestDTO): Promise<TaskUserResponseDTO> {
    return this.prisma.taskUser.create({
      data: {
        task: {
          create: {
            description: data.description,
            endAt: data.endAt,
            startAt: data.startAt,
            status: data.status,
            title: data.title,
            priority: data.priority,
          },
        },
        user: {
          connect: {
            id: data.userId,
          },
        },
      },
    });
  }
}
