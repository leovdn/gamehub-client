import { CodegenConfig } from '@graphql-codegen/cli'
import { loadEnvConfig } from '@next/env'

loadEnvConfig(process.cwd())

const { NEXT_PUBLIC_STRAPI_GRAPHQL_API } = process.env

const config: CodegenConfig = {
  schema: NEXT_PUBLIC_STRAPI_GRAPHQL_API,
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
