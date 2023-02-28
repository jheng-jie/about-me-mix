import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import React, { useEffect } from 'react'

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
      const redirect = { httpEquiv: 'refresh', content: '' }

      // check route
      const router = useRouter()
      const to = redirectMap[String(router.query?.locale) as keyof typeof redirectMap] || `/zh/home/`
      redirect.content = `0;url=/react${to}`

      // 避免 meta 無法跳轉
      useEffect(() => {
        router.replace(to).catch(console.warn)
      })

      return (
        <>
          {/*meta refresh*/}
          <NextSeo additionalMetaTags={[redirect as any]} />

          <main className="fixed w-full h-full left-0 top-0 flex items-center justify-center text-24px font-bold gray-100 text-gray-500">
            redirect...
          </main>
        </>
      )
    }),
  }
}
