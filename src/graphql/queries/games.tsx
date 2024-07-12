import { gql } from 'graphql/generated'

export const QUERY_GAMES = gql(`
  query QueryGames($pagination: PaginationArg) {
    games(pagination: $pagination) {
      data {
        id
        attributes {
          name
          slug
          price
          release_date
          rating
          gallery {
            data {
              attributes {
                url
              }
            }
          }
          cover {
            data {
              attributes {
                url
              }
            }
          }
          developers {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`)
