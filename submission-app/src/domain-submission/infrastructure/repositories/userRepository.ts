import { UserRepository, User, UserInfo, UserId } from '../../domain/types'

// import request from 'request-json';
// const client = request.createClient('https://reqres.in/');
// console.log('repo::getById')
// return client.get(`api/users/${userId}`);

export const userRepository: UserRepository = {
  save: (u: User) => {
    console.log(`userRepository::create(${u.userId})::save::user`)
    return Promise.resolve(u)
  },

  getById: (id: UserId) => {
    const testUser : User = {
      userId: id,
      userInfo: {
        email: 'mickey@mouse.com',
        twitterHandle: '@mickeymouse'
      }
    }
    return Promise.resolve(testUser)
  },

  create: (info: UserInfo) => {
    const newUser : User = {
      userId: 42,
      userInfo: info
    }
    return Promise.resolve(newUser)
  }
}

