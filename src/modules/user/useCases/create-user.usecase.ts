import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { hash } from 'bcrypt';
import { CreateUserDTO } from '../dto/user.dto';
import { IUserRepository } from '../repositories/user.repository';

@Injectable()
export class CreateUserUseCase {
  private readonly logger = new Logger(CreateUserUseCase.name);
  constructor(private userRepository: IUserRepository) {}

  async execute(data: CreateUserDTO) {
    const user = await this.userRepository.findyByUsernameOrEmail(data);

    if (user) {
      this.logger.error(`User ${data.name} already exist`);
      throw new HttpException('User already exist!', HttpStatus.BAD_REQUEST);
    }

    const password = await hash(data.password, 10);

    return await this.userRepository.save({
      ...data,
      password,
    });
  }
}
