import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Advanced ReactJS - Boilerplate</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Boilerplate for React, Next and TS" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
