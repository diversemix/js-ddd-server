import { UserRepository } from './userRepository'
import { UserRepositoryInterface, User, UserInfo, UserId } from '../../domain/types'
import request from 'request-json';

/*
 * Purpose: To demonstrate how we extend a repository
 */

export class UserRepositoryExtended implements UserRepositoryInterface {
  repo: UserRepositoryInterface;
  otherClient: any;

  constructor() {
    this.repo = new UserRepository()
    this.otherClient = request.createClient('https://reqres.in/');
  }

  save(u: User) {
    return this.repo.save(u)
  }

  async getById(id: UserId) {
    // simulate querying the profiles service to get some remote info
    const response = await this.otherClient.get(`api/users/${id}`);
    const remoteUser = response.body.data;
    const userFromDatabase = await this.repo.getById(id)
    const combinedUser = {
      ...userFromDatabase,
      ...remoteUser
    }
    return Promise.resolve(combinedUser)
  }

  create(info: UserInfo) {
    return this.repo.create(info)
  }

}
