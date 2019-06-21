import { TypeOf } from 'io-ts'
import * as input from './input'
import * as userCommands from './user/commands'
import { UserEvent as UserEventIo } from './user/events'

// basic input types
export type UserId = TypeOf<typeof input.UserId>
export type UserInfo = TypeOf<typeof input.UserInfo>

// command types
export type PublicUserCommands = TypeOf<typeof userCommands.publicCommands>
export type UserCommands = PublicUserCommands

// event types
export type UserEvent = TypeOf<typeof UserEventIo>

// model types
export * from './user/model'

// repository types
export * from './user/repository'
