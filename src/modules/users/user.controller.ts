import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @MessagePattern('user.created')
  async createUser(@Payload() createUserDto: CreateUserDto, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    console.log('[user.create] Received data:', createUserDto);

    const user = await this.createUserUseCase.execute(
      createUserDto.firstName,
      createUserDto.lastName,
      createUserDto.email,
      createUserDto.role,
      createUserDto.password,
    );

    channel.ack(originalMsg);

    console.log('user =>', user);

    return { ok: true, data: user };
  }
}
