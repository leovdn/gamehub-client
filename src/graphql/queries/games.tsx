import { gql } from 'graphql/generated'

export const QUERY_GAMES = gql(`
  query GetGames($pagination: PaginationArg) {
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
              id
              attributes {
                url
              }
            }
          }
          cover {
            data {
              id
              attributes {
                url
              }
            }
          }
          developers {
            data {
              id
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

export const QUERY_GAME_BY_SLUG = gql(`
  query QueryGameBySlug($slug: String!) {
    games(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          name
          short_description
          description
          price
          rating
          release_date
          gallery {
            data {
              id
              attributes {
                src: url
                label: alternativeText
              }
            }
          }
          cover {
            data {
              id
              attributes {
                src: url
                alternativeText
              }
            }
          }
          developers {
            data {
              id
              attributes {
                name
              }
            }
          }
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
          publisher {
            data {
              id
              attributes {
                name
              }
            }
          }
          platforms {
            data {
              id
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
