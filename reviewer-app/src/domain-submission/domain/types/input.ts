// import * as isUrl from 'is-url'
import * as t from 'io-ts'

export const Email = t.refinement(t.string, () => /* todo: validation! */ true)
export const Timestamp = brand(t.string, 'Timestamp')

export const UserId = brand(t.string, 'UserId')

export const UserInfo = t.partial({
  profileId: UserId,
  email: Email,
  twitterHandle: t.string
})

// helper function for creating nominal type in TS
// by using intersection with { __brand: Type }
// https://github.com/Microsoft/TypeScript/issues/202
function brand<T, B extends string> (
  type: t.Type<any, T>,
  _brand: B
): t.Type<any, T & { __brand: B }> {
  return type as any
}
