import type { User } from '../../../domain/entities/user.entity';

export abstract class UserRepository {
  abstract create(user: Omit<User, 'updatedAt'>): Promise<User>;
  // abstract findAll(): Promise<User[]>;
  // abstract findOneById(id: number): Promise<User | null>;
  abstract findOneByEmail(email: string): Promise<User | null>;
}
