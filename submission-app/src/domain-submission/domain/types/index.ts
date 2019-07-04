import { TypeOf } from 'io-ts'
import * as input from './input'
// basic input types
export type UserId = TypeOf<typeof input.UserId>
export type UserInfo = TypeOf<typeof input.UserInfo>
export type Timestamp = TypeOf<typeof input.Timestamp>

// command types
export type PublicUserCommands = TypeOf<typeof userCommands.publicCommands>
export type UserCommands = PublicUserCommands


// model types
export * from './user/model'

// repository types
export * from './user/repository'
