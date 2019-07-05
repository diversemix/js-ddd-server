import * as t from '../../domain/types'
import { UserRepository } from './userRepository';
import { UserRepositoryExtended } from './userRepositoryExtended';

let repo : UserRepository;
let repoEx : UserRepositoryExtended;

describe('user tests', () => {
  beforeAll( () =>  {
    repo = new UserRepository()
    repoEx = new UserRepositoryExtended()
  })

  it('can create a user', async () => {
    const userToCreate : t.UserInfo = {
      email: 'me@here.com',
      twitterHandle: '@me'
    }
    const payload = {
      timestamp: Date.now()
    }

    const user = await repo.create(userToCreate)
    expect(user).toHaveProperty('userId')
    expect(user.userId).toBe(42)
  })

  it('can get a user', async () => {
    const userId : t.UserId = 1
    const user = await repo.getById(userId)
    expect(user).toHaveProperty('userId')
    expect(user.userId).toBe(userId)
    expect(user.userInfo.twitterHandle).toBe('@mickeymouse')
    expect(user.userInfo).not.toHaveProperty('avatar')
  })

  it('can get an extended user', async () => {
    const userId : t.UserId = 1
    const user = await repoEx.getById(userId)
    expect(user).toHaveProperty('userId')
    expect(user.userId).toBe(userId)
    expect(user.userInfo.twitterHandle).toBe('@mickeymouse')
    expect(user).toHaveProperty('avatar')
  })
})

