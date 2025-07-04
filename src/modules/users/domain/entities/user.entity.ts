import type { UserRole } from '@prisma/client';

interface UserProps {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  password: string;
  createdAt: Date;
  updatedAt?: Date;
  id?: number;
}

export class User {
  constructor(public readonly props: UserProps) {}

  get uid(): string {
    return this.props.uid;
  }

  get firstName(): string {
    return this.props.firstName;
  }

  get lastName(): string {
    return this.props.lastName;
  }

  get email(): string {
    return this.props.email;
  }

  get role(): UserRole {
    return this.props.role;
  }

  get password(): string {
    return this.props.password;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt ?? new Date();
  }

  get id(): number | undefined {
    return this.props.id;
  }
}
