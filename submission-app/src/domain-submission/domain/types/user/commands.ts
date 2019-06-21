import { type } from 'io-ts'
import * as input from '../input'

export const publicCommands = type({
  CreateUser: type({
    userId: input.UserId,
    payload: type({
      timestamp: input.Timestamp
    })
  }),
})

