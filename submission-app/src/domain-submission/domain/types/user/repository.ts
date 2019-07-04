import { User, UserId, UserInfo } from '../index'

export type UserRepository = {
  save: (u: User) => Promise<User>
  getById: (id: UserId) => Promise<User>
  create: (info: UserInfo) => Promise<User>
}

