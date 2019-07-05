import { User, UserId, UserInfo } from '../index'

/*
 * Purpose: To show how a UserRepository interface would be defined.
 * This is designed to be publisher agnostic ... i.e. anyone can use it.
 */

export interface UserRepositoryInterface {
  save: (u: User) => Promise<User>
  getById: (id: UserId) => Promise<User>
  create: (info: UserInfo) => Promise<User>
}

