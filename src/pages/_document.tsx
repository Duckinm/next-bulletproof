import { Head, Html, Main, NextScript } from 'next/document'

const isDev = process.env.NODE_ENV !== 'production'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className={isDev ? 'debug-screens' : ''}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
