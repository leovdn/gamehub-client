import { gql } from 'graphql/generated'

export const BANNER_FRAGMENT = gql(`
  fragment BannerFragment on Banner {
    image {
      data {
        attributes {
          url
        }
      }
    }
    title
    subtitle
    button {
      label
      link
    }
    ribbon {
      text
      color
      size
    }
  }
`)
