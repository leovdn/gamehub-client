import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/components/**/stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  staticDirs: ['../public']
}
export default config
