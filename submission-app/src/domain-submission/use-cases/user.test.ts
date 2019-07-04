import * as t from '../domain/types'
import { userRepository } from '../infrastructure/repositories/userRepository';

describe('user tests', () => {
  it('can create a user', async () => {
    const userToCreate : t.UserInfo = {
      email: 'me@here.com',
      twitterHandle: '@me'
    }
    const payload = {
      timestamp: Date.now()
    }

    const user = await userRepository.create(userToCreate)
    expect(user).toHaveProperty('userId')
    expect(user.userId).toBe(42)
  })

  it('can get a user', async () => {
    const userId : t.UserId = 1
    const user = await userRepository.getById(userId)
    expect(user).toHaveProperty('userId')
    expect(user.userId).toBe(userId)
    expect(user.userInfo.twitterHandle).toBe('@mickeymouse')
  })
})

