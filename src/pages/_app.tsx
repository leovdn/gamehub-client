import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'

import theme from '../styles/theme'
import GlobalStyles from 'styles/global'
import { useApollo } from 'utils/apollo'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>GameHub</title>
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" href="favicon.ico" type="image/x-icon" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="A game store with React, NextJS and Styled Components"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
