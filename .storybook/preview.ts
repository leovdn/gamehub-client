import type { Preview } from '@storybook/react'
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

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
    themes: { theme },
    Provider: ThemeProvider
  })]
}

export default preview
