import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { useMemo } from 'react'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'http://localhost:1337/graphql',
      credentials: 'same-origin'
    }),
    cache: new InMemoryCache()
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
