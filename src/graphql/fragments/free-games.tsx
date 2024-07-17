import { gql } from 'graphql/generated'

export const FREE_GAMES_FRAGMENT = gql(`
  fragment FreeGamesFragment on FreeGame {
    slug
    title {
      data {
        attributes {
          name
        }
      }
    }
    developer {
      data {
        id
        attributes {
          name
        }
      }
    }
    img {
      data {
        id
        attributes {
          url
        }
      }
    }
    price
    promotionalPrice
  }
`)
