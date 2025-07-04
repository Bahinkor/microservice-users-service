import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @MessagePattern('user.created')
  async createUser(@Payload() createUserDto: CreateUserDto) {
    console.log('[user.create] Received data:', createUserDto);

    const user = await this.createUserUseCase.execute(
      createUserDto.firstName,
      createUserDto.lastName,
      createUserDto.email,
      createUserDto.role,
      createUserDto.password,
    );

    console.log('user =>', user);

    return { ok: true, data: user };
  }
}
