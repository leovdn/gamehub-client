import { gql } from 'graphql/generated'

export const QUERY_HOME = gql(`
  query QueryHome {
    banners {
      data {
        attributes {
          ...BannerFragment
        }
      }
    }
  }
`)
