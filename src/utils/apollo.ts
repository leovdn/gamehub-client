import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { useMemo } from 'react'
import { uniqBy } from './formatters'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_API
    }),
    cache: new InMemoryCache({
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
  })
}

export function initializeApollo(initialState = {}) {
  // verify if apolloClient is already initialized
  const apolloClientGlobal = apolloClient ?? createApolloClient()

  // retrieving cached data
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  // always initializing SSR with cleaned cache
  if (typeof window === 'undefined') return apolloClientGlobal
  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
