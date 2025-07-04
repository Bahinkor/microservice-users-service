import { Injectable } from '@nestjs/common';
import { UserRole } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { randomUUID } from 'node:crypto';

import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';

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
    const now = new Date();
    const uid = randomUUID();
    const hashedPassword = await bcrypt.hash(password, 10);
    const normalizedEmail = email.trim().toLocaleLowerCase();

    const user = new User({
      uid,
      firstName,
      lastName,
      email: normalizedEmail,
      role,
      password: hashedPassword,
      createdAt: now,
    });

    return this.userRepository.create(user);
  }
}
