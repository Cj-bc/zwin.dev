import { Head, Html, Main, NextScript } from "next/document"

const Document = () => {
  return (
      <Html>
        <Head>
          <meta name="twitter:card" content="summary"/>
          <meta property="og:title" content="Zwin"/>
          <meta property="og:type" content="website"/>
          <meta property="og:image" content="https://zwin.dev/images/OGP.png"/>
        </Head>
        <body id="body">
          <Main />
          <NextScript />
        </body>
      </Html>
  )
}

export default Document