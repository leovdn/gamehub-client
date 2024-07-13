import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_API,
  documents: ['./src/**/*.tsx'],
  generates: {
    './src/graphql/generated/': {
      preset: 'client',
      overwrite: true,
      presetConfig: {
        gqlTagName: 'gql',
        fragmentMasking: false
      }
    }
  }
}

export default config
