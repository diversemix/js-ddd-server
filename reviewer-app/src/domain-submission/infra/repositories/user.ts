import { UserRepository } from '../../domain/types'
// import reduceToUser from '../../domain/entities/reduceToUser'

export const userRepository: UserRepository = {
  getById: userId => {
    console.log('repo::getById')
    return new Promise( () => {} )
  },
  create: userId => ({
    save: events => {
      // eventuate.create(userId, events)
      console.log(`events: ${JSON.stringify(events)}`)
      console.log(`userRepository::create(${userId})::save::user`)
      return Promise.resolve({userId})
    }
  })
}

