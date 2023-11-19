import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticPropsContext } from 'next'
import nextI18NextConfig from '@/../next-i18next.config.js'

// return support locale
export const supportLocale = (locale: string) => (nextI18NextConfig.i18n.locales.includes(locale) ? locale : String(nextI18NextConfig.i18n.defaultLocale))

// locales path
export const paths = nextI18NextConfig.i18n.locales.map((locale: string) => ({ params: { locale } }))

// 註冊所有語系路由
export const getStaticPaths = () => ({ paths, fallback: false })

// 綁定語系
export const getStaticProps = async (ctx: GetStaticPropsContext) => ({
  props: await serverSideTranslations(supportLocale(String(ctx?.params?.locale)), ['common'], nextI18NextConfig),
})

// 合併: 需要額外參數時
export const combineStaticProps = (props: { [key: string]: string | number }) => {
  return async (ctx: GetStaticPropsContext) => ({
    props: {
      ...props,
      ...(await serverSideTranslations(supportLocale(String(ctx?.params?.locale)), ['common'], nextI18NextConfig)),
    },
  })
}
