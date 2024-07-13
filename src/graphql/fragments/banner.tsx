import { gql } from 'graphql/generated'

export const BANNER_FRAGMENT = gql(`
  fragment BannerFragment on Banner {
    image {
      data {
        id
        attributes {
          url
        }
      }
    }
    title
    subtitle
    button {
      id
      label
      link
    }
    ribbon {
      id
      text
      color
      size
    }
  }
`)
