import { Injectable } from '@nestjs/common';
import { UserRole } from '@prisma/client';

import type { UserRepository } from '../../application/ports/repositories/user.repository';

import { PrismaService } from '../../../../common/database/prisma/prisma.service';
import { User } from '../../domain/entities/user.entity';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: UserRole;
    password: string;
  }): Promise<User> {
    const [user] = await this.prisma.$transaction([this.prisma.user.create({ data })]);

    return new User(
      user.id,
      user.firstName,
      user.lastName,
      user.email,
      user.role,
      user.password,
      user.createdAt,
      user.updatedAt,
    );
  }
}
