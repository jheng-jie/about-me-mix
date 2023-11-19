import type { AppProps } from 'next/app'
import { appWithTranslation, useTranslation } from 'next-i18next'
import nextI18NextConfig from '@/../next-i18next.config'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { initialize } from '@/stores/initialize'
import Layout from '@/layouts/index'
import { useEffect } from 'react'

// css
import '@unocss/reset/tailwind.css'
import '@about-me-mix/communal/unocss/entry.scss'

export default appWithTranslation(({ Component, pageProps }: AppProps<{ layout: string }>) => {
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
  useEffect(initialize, [])

  // html lang
  useEffect(() => {
    document.documentElement.lang = String(locale || nextI18NextConfig.i18n.defaultLocale)
  }, [locale])

  return (
    <Layout {...pageProps}>
      <NextSeo {...seo} />
      <Component {...pageProps} />
    </Layout>
  )
}, nextI18NextConfig)
