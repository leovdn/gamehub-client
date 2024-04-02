import type { Preview } from '@storybook/react'
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import GlobalStyles from '../src/styles/global'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },

  decorators: [withThemeFromJSXProvider({
    GlobalStyles,
  })]
}

export default preview
