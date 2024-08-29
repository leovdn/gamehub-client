import { gql } from 'graphql/generated'

export const GAME_FRAGMENT = gql(`
  fragment GameFragment on Game {
    name
    slug
    price
    cover {
      data {
        attributes {
          url
        }
      }
    }
    gallery(pagination: { limit: 1 }) {
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
`)
