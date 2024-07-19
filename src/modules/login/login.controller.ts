import { Body, Controller, Post } from '@nestjs/common';
import { SignInDTO } from './dto/sign-in.dto';
import { SignInUseCase } from './useCases/sign-in.usecase';

@Controller('signIn')
export class LoginController {
  constructor(private signInUseCase: SignInUseCase) {}

  @Post()
  async SignIn(@Body() signInDTO: SignInDTO) {
    const token = await this.signInUseCase.execute(signInDTO);
    return token;
  }
}
