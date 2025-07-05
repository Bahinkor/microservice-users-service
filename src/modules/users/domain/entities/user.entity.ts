import type { UserRole } from '@prisma/client';

export class User {
  constructor(
    public readonly id: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly email: string,
    public readonly role: UserRole,
    public readonly password: string,
    public readonly createdAt: Date,
    public readonly updatedAt?: Date,
  ) {}
}
