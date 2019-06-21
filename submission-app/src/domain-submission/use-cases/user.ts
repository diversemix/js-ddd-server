import * as t from '../domain/types'
import { createUser } from '../domain/entities/user/create'

type CommandHandlers = {
  [C in keyof t.UserCommands]: (
    command: t.UserCommands[C]
  ) => Promise<any>
}

export const userCommandHandlers = (
  userRepository: t.UserRepository,
): CommandHandlers => ({

  CreateUser: async ({ userId, payload }) => {
    console.log(`>>> userCommandHandlers::CreateUser`)

    const { save } = userRepository.create(userId)
    const event = createUser(
      userId,
      payload.timestamp
    )
    return await save(event)
  },
})
