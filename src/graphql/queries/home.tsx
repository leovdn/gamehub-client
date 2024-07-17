import { gql } from 'graphql/generated'

export const QUERY_HOME = gql(`
  query QueryHome {
    banners {
      data {
        id
        attributes {
          ...BannerFragment
        }
      }
    }
    freeGames  {
      data {
        id
        attributes {
          ...FreeGamesFragment
        }
      }
    }
  }
`)
