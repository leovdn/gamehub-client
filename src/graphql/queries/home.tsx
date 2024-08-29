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
    newGames: games(
      filters: { release_date: { gt: "2024-08-01" } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      data {
        id
        attributes {
          ...GameFragment
        }
      }
    }
    upcommingGames: games(
      filters: { release_date: { gt: "2024-08-26" } }
      sort: "release_date:asc"
      pagination: { limit: 8 }
    ) {
      data {
        id
        attributes {
          ...GameFragment
        }
      }
    }
    freeGames: games(
      filters: { price: { eq: 0 } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      data {
        id
        attributes {
          ...GameFragment
        }
      }
    }
    sections: home {
      data {
        attributes {
          newGames {
            id
            title
            highlight {
              ...HighlightFragment
            }
          }

          upcommingGames {
            id
            title
            highlight {
              ...HighlightFragment
            }
          }

          freeGames {
            id
            title
            highlight {
              ...HighlightFragment
            }
          }

          popularGames {
            id
            title
            highlight {
              ...HighlightFragment
            }
            games {
              data {
                attributes {
                  ...GameFragment
                }
              }
            }
          }
        }
      }
    }

  }
`)
