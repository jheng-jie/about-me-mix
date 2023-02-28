import type { AppProps } from 'next/app'
import { appWithTranslation, useTranslation } from 'next-i18next'
import { LAYOUT } from '@about-me-mix/common/constant'
import LayoutDefault from '@/layouts/default'
import LayoutSingle from '@/layouts/single'
import nextI18NextConfig from '@/../next-i18next.config'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

// css
import '@unocss/reset/tailwind.css'
import '@/assets/style/initialize.css'

export default appWithTranslation(({ Component, pageProps }: AppProps<{ layout: number }>) => {
  const router = useRouter()
  const site = router.asPath.replace(/(\/\w{2}\/)|(^\/)|(\/$)/g, '').toUpperCase()
  // dynamic layout
  const Layout = pageProps?.layout === LAYOUT.SINGLE ? LayoutSingle : LayoutDefault
  // SEO
  const { t } = useTranslation(['common'])
  const seo = {
    title: t('website.title', [site]),
    description: t('website.description', [site]),
  }

  return (
    <Layout>
      <NextSeo {...seo} />
      <Component {...pageProps} />
    </Layout>
  )
}, nextI18NextConfig)
