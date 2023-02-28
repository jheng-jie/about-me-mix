import type { DocumentProps } from 'next/document'
import { Html, Head, Main, NextScript } from 'next/document'
import { supportLocale } from '@/core/i18n'

/**
 * @desc custom document
 */
export default (props: DocumentProps) => {
  const lang = supportLocale(String(props?.__NEXT_DATA__?.query?.locale))

  return (
    <Html lang={lang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
