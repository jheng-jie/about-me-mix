import type { MetaTag } from 'next-seo/lib/types'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import React from 'react'

// create redirect paths
export const createRedirectMap = (redirects: Array<{ from: string; to: string }>) => {
  const paths = redirects.map(item => ({ params: { locale: item.from.replace(/^\/|\/$/g, '') } }))
  const redirectMap = redirects.reduce((res, item) => ({ ...res, [item.from.replace(/^\/|\/$/g, '')]: item.to }), {})

  return {
    // ssg path
    getStaticPaths: () => ({ paths, fallback: false }),
    // redirect component
    Redirect: React.memo(() => {
      // default redirect
      const redirect: MetaTag = { httpEquiv: 'refresh', content: '' }

      // check route
      const router = useRouter()
      const to = redirectMap[String(router.query?.locale) as keyof typeof redirectMap] || `/zh/home/`
      redirect.content = `0;url=${process.env.MIX_BASE_URL}/react${to}`

      return (
        <>
          {/*meta refresh*/}
          <NextSeo additionalMetaTags={[redirect]} />

          <main className="fixed w-full h-full left-0 top-0 flex items-center justify-center text-6 font-bold gray-100 text-gray-500">redirect...</main>
        </>
      )
    }),
  }
}
