import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDTO } from '../dto/user.dto';

export class CreateUserValidationPipe implements PipeTransform {
  transform(
    { name, email, password, username }: CreateUserDTO,
    metadata: ArgumentMetadata,
  ) {
    metadata;
    if (!name || !email || !password || !username) {
      throw new HttpException(
        '[name, password, email, username] is field required',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return {
      name,
      email,
      password,
      username,
    };
  }
}
