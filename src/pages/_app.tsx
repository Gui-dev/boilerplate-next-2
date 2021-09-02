import { AppProps } from 'next/app'
import Head from 'next/head'

import { GlobalStyle } from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="shotcut icon" href="/images/icon-512.png"/>
        <link rel="apple-touch-icon" href="/images/icon-512.png"/>
        <meta name="description" content="A simple project starter to work with Typescript, React, NextJS and Styled Components"/>
        <title>React(NextJS) Avançado</title>
      </Head>
      <GlobalStyle />
      <Component { ...pageProps }/>
    </>
  )
}

export default App
