import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRole } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { randomUUID } from 'node:crypto';

import { UserRepository } from '../../application/ports/repositories/user.repository';
import { User } from '../../domain/entities/user.entity';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(
    firstName: string,
    lastName: string,
    email: string,
    role: UserRole,
    password: string,
  ): Promise<User> {
    const isExistingUser = await this.userRepository.findOneByEmail(email);

    if (isExistingUser) {
      throw new BadRequestException('User already exists');
    }

    const now = new Date();
    const id = randomUUID();
    const hashedPassword = await bcrypt.hash(password, 10);
    const normalizedEmail = email.trim().toLocaleLowerCase();

    const user = new User(id, firstName, lastName, normalizedEmail, role, hashedPassword, now);

    return this.userRepository.create(user);
  }
}
