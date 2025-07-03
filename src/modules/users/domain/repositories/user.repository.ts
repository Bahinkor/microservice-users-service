import type { User } from '../entities/user.entity';

export abstract class UserRepository {
  abstract create(user: Omit<User, 'createdAt' | 'id' | 'updatedAt'>): Promise<User>;
  // abstract findAll(): Promise<User[]>;
  // abstract findOneById(id: number): Promise<User | null>;
  // abstract findOneByUid(uid: string): Promise<User | null>;
  // abstract findOneByEmail(email: string): Promise<User | null>;
}
