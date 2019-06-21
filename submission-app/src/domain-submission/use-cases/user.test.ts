import { userCommandHandlers } from './user'
import * as t from '../domain/types'
import { userRepository } from '../infra/repositories/user';

const handlers = {
  ...userCommandHandlers(userRepository)
}

describe('user tests', () => {
  it('can create a user', async () => {
    const repo = userRepository

    const userId : t.UserId = 1
    const payload = {
      timestamp: Date.now()
    }

    const cmd = handlers['CreateUser']
    const result = cmd({ userId, payload })
    await expect(result).resolves.toStrictEqual({ userId })
  })
})

