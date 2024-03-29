import type { DocumentProps } from 'next/document'
import { Html, Head, Main, NextScript } from 'next/document'
import { supportLocale } from '@/lib/i18n'

/**
 * @desc custom document
 */
export default (props: DocumentProps) => {
  const lang = supportLocale(String(props?.__NEXT_DATA__?.query?.locale))

  return (
    <Html lang={lang}>
      <Head>
        <link rel="icon" type="image/svg" href={`${process.env.MIX_ASSETS_URL}/icon/react.svg`} />
        <link rel="shortcut icon" type="image/x-icon" href={`${process.env.MIX_ASSETS_URL}/icon/next.ico`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/*@ts-ignore*/}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
