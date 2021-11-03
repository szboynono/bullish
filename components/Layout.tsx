import React from 'react';
import Head from 'next/head'

const Layout: React.FunctionComponent<{}> = ({children}) => {
  return (
    <>
      <Head>
        <title>Example</title>
      </Head>
      <div>nav</div>
      <main>{children}</main>
      <div>footer</div>
    </>
  )
}

export default Layout;