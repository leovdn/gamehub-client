import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:1337/graphql',
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
