import { UserEvent, UserId, Timestamp } from '../../types'

export function createUser (
  userId: UserId,
  timestamp: Timestamp
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

