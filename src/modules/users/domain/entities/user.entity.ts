import type { UserRole } from '@prisma/client';

interface UserInterface {
  id?: number;
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  password: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class User {
  constructor(private readonly user: UserInterface) {}
}
