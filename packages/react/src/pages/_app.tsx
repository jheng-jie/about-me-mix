import type { AppProps } from 'next/app'

import '@unocss/reset/tailwind.css'
import './style.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
