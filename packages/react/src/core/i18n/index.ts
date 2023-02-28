import config from '@about-me-mix/common/config.json'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticPropsContext } from 'next'
import nextI18NextConfig from '@/../next-i18next.config.js'

// return support locale
export const supportLocale = (locale: string) =>
  config.SUPPORTS_LOCALES.includes(locale) ? locale : config.DEFAULT_LOCALE

// locales path
export const paths = config.SUPPORTS_LOCALES.map(locale => ({ params: { locale } }))

// 註冊所有語系路由
export const getStaticPaths = () => ({ paths, fallback: false })

// 綁定語系
export const getStaticProps = async (ctx: GetStaticPropsContext) => ({
  props: await serverSideTranslations(supportLocale(String(ctx?.params?.locale)), ['common'], nextI18NextConfig),
})

// 合併: 需要額外參數時
export const combineStaticProps = (props: { [key: string]: any }) => {
  return async (ctx: GetStaticPropsContext) => ({
    props: {
      ...props,
      ...(await serverSideTranslations(supportLocale(String(ctx?.params?.locale)), ['common'], nextI18NextConfig)),
    },
  })
}
