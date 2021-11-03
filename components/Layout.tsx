import React from 'react';
import Head from 'next/head'
import Header from './header/Header';
import { Container } from '@chakra-ui/react';

const Layout: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <Container maxW="container.xl">
      <Head>
        <title>Bullish</title>
      </Head>
      <Header />
      <main>{children}</main>
      {/* <div>footer</div> */}
    </Container>
  )
}

export default Layout;