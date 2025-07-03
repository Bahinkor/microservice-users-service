import { Module } from '@nestjs/common';

import { PrismaModule } from '../../common/database/prisma/prisma.module';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { UserRepository } from './domain/repositories/user.repository';
import { PrismaUserRepository } from './infrastructure/prisma/user.repository.prisma';
import { UserController } from './user.controller';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [UserRepository],
})
export class UserModule {}
