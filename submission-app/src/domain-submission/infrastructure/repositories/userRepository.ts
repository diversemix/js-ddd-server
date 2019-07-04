import { UserRepositoryInterface, User, UserInfo, UserId } from '../../domain/types'
import request from 'request-json';

const client = request.createClient('https://reqres.in/');

export class UserRepository implements UserRepositoryInterface {
  constructor() {

  }

  save (u: User) {
    console.log(`userRepository::create(${u.userId})::save::user`)
    return Promise.resolve(u)
  }

  async getById (id: UserId) {
    // simulate querying the profiles service to get some remote info
    const response = await client.get(`api/users/${id}`);
    const remoteInfo = response.body.data;
    const testUser : User = {
      userId: id,
      userInfo: {
        email: 'mickey@mouse.com',
        twitterHandle: '@mickeymouse',
        ...remoteInfo
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

