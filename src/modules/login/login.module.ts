import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { SignInUseCase } from './useCases/sign-in.usecase';
import { PrismaService } from 'src/infra/database/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'o',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [LoginController],
  providers: [SignInUseCase, PrismaService],
})
export class LoginModule {}
