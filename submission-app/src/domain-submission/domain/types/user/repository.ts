import { User, UserId, UserInfo, UserStorage } from '../index'

// This is designed to be publisher agnostic ... i.e. anyone can use it
export interface UserRepositoryInterface {
  save: (u: User) => Promise<User>
  getById: (id: UserId) => Promise<User>
  create: (info: UserInfo) => Promise<User>
}

