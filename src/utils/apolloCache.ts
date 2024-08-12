import { InMemoryCache } from '@apollo/client'
import { uniqBy } from './formatters'

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        games: {
          keyArgs: false,
          merge: (existing = { __typename: 'TopicsList', data: [] }, incoming) => {
            const result = {
              ...incoming,
              data: uniqBy([...existing.data, ...incoming.data], '__ref')
            }
            return result
          }
        }
      }
    }
  }
})
