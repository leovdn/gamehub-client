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
            attributes {
              src: url
              label: alternativeText
            }
          }
        }
        cover {
          data {
            attributes {
              src: url
              alternativeText
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
        categories {
          data {
            attributes {
              name
            }
          }
        }
        publisher {
          data {
            attributes {
              name
            }
          }
        }
        platforms {
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
