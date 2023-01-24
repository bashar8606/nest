import { Html, Head, Main, NextScript } from "next/document";
// import Head from 'next/head'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        
        <meta name="description" content="Mexecution is a Swiss founded company based in Mexico, help you to diversify your portfolio" />
        <meta name="theme-color" content="#fff"/>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
