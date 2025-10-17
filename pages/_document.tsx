import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Personal academic website showcasing research, publications, and projects" />
        <meta name="keywords" content="research, academic, HCI, human-computer interaction, publications" />
        <meta name="author" content="Howard Han" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


