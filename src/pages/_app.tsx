import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Advanced ReactJS - Boilerplate</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Boilerplate for React, Next and TS" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
