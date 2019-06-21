import { UserEvent, UserId } from '../../types'
import * as input from '../../types/input'

export function createUser (
  userId: UserId,
  timestamp: input.Timestamp
): UserEvent[] {

  console.log(`>>> createUser`)
  return [
    {
      type: 'UserCreated',
      payload: {
        userId,
        timestamp
      }
    }
  ]
}

