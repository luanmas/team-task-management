import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDTO } from '../dto/sign-in.dto';
import { PrismaService } from 'src/infra/database/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class SignInUseCase {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async execute(data: SignInDTO) {
    const user = await this.prisma.user.findFirst({
      where: {
        username: data.username,
      },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    const isEqualPassword = await compare(
      String(data.password),
      String(user.password),
    );

    if (!isEqualPassword) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.id,
      username: user.username,
    };

    const token = await this.jwtService.signAsync(payload);

    return {
      acess_token: token,
    };
  }
}
