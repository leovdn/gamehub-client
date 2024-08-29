import { gql } from 'graphql/generated'

export const HIGHLIGHT_FRAGMENT = gql(`
  fragment HighlightFragment on ComponentPageHighlight {
    title
    subtitle
    background {
      data {
        attributes {
          url
        }
      }
    }
    floatImage {
      data {
        attributes {
          url
        }
      }
    }
    buttonLabel
    buttonLink
    align
  }
`)
