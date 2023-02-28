import type { AppProps } from 'next/app'
import { appWithTranslation, useTranslation } from 'next-i18next'
import { LAYOUT } from '@about-me-mix/common/constant'
import LayoutDefault from '@/layouts/default'
import LayoutSingle from '@/layouts/single'
import nextI18NextConfig from '@/../next-i18next.config'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import store, { initialize } from '@/stores/index'

// css
import '@unocss/reset/tailwind.css'
import '@/assets/style/initialize.css'
import { useEffect } from 'react'

export default appWithTranslation(({ Component, pageProps }: AppProps<{ layout: number }>) => {
  const router = useRouter()

  // dynamic layout
  const Layout = pageProps?.layout === LAYOUT.SINGLE ? LayoutSingle : LayoutDefault

  // SEO
  const site = router.asPath.replace(/(\/\w{2}\/)|(^\/)|(\/$)/g, '').toUpperCase()
  const { t } = useTranslation(['common'])
  const seo = {
    title: t('website.title', [site]),
    description: t('website.description', [site]),
  }

  // initialize
  useEffect(() => {
    // set window size
    store.dispatch(initialize())
  }, [])

  return (
    <Provider store={store}>
      <Layout>
        <NextSeo {...seo} />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}, nextI18NextConfig)
