import type { AppProps } from 'next/app'
import { appWithTranslation, useTranslation } from 'next-i18next'
import nextI18NextConfig from '@/../next-i18next.config'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import store, { initialize } from '@/stores/index'
import Layout from '@/components/layout/index'
import { useEffect } from 'react'

// css
import '@unocss/reset/tailwind.css'
import '@/assets/style/core.css'

export default appWithTranslation(({ Component, pageProps }: AppProps<{ layout: number }>) => {
  const router = useRouter()
  const locale = router?.query?.locale

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

  // html lang
  useEffect(() => {
    document.documentElement.lang = String(locale || nextI18NextConfig.i18n.defaultLocale)
  }, [locale])

  return (
    <Provider store={store}>
      <Layout {...pageProps}>
        <NextSeo {...seo} />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}, nextI18NextConfig)
