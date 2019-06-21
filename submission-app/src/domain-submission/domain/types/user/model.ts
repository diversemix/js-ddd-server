import { UserId, UserEvent } from '../index'

export type RankEvent = {
  category: 'UserEvents'
  eventType: UserEvent['type']
//  newsletterId?: JournalId
//  articleId?: ArticleId
  voterId?: UserId
}

export type User = {
  userId: UserId
  mergedUserIds: UserId[]
  rankEvents: RankEvent[]
}

