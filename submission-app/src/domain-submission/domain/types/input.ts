// import * as isUrl from 'is-url'
import { string, partial, refinement, Type } from 'io-ts'

export const Email = refinement(string, () => /* todo: validation! */ true)
export const Timestamp = brand(string, 'Timestamp')

export const UserId = brand(string, 'UserId')

export const UserInfo = partial({
  email: Email,
  twitterHandle: string
})

// helper function for creating nominal type in TS
// by using intersection with { __brand: Type }
// https://github.com/Microsoft/TypeScript/issues/202
function brand<T, B extends string> (
  type: Type<any, T>,
  _brand: B
): Type<any, T & { __brand: B }> {
  return type as any
}
