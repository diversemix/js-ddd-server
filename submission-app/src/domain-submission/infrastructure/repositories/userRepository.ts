import { UserRepositoryInterface, User, UserInfo, UserId } from '../../domain/types'

/*
 * Purpose: To show how a UserRepository interface would be implemented.
 */

export class UserRepository implements UserRepositoryInterface {
  constructor() {
  }

  save (u: User) {
    console.log(`userRepository::create(${u.userId})::save::user`)
    return Promise.resolve(u)
  }

  async getById (id: UserId) {
    const testUser : User = {
      userId: id,
      userInfo: {
        email: 'mickey@mouse.com',
        twitterHandle: '@mickeymouse',
      }
    };
    return Promise.resolve(testUser);
  }

  create (info: UserInfo) {
    const newUser : User = {
      userId: 42,
      userInfo: info
    };
    return Promise.resolve(newUser);
  }
}

