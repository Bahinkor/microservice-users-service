import { Injectable } from '@nestjs/common';
import { UserRole } from '@prisma/client';

import type { UserRepository } from '../../domain/repositories/user.repository';

import { PrismaService } from '../../../../common/database/prisma/prisma.service';
import { User } from '../../domain/entities/user.entity';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: {
    uid: string;
    firstName: string;
    lastName: string;
    email: string;
    role: UserRole;
    password: string;
  }): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        uid: data.uid,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        role: data.role,
        password: data.password,
      },
    });

    return new User({
      uid: user.uid,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      password: user.password,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      id: user.id,
    });
  }
}
