import { gql } from '@apollo/client'

export const QUERY_GAMES = gql`
  query QueryGames {
    games {
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
`
