import Performance from './performance'
import SEO from './seo'
import Route from './route'

/**
 * @desc Record Page SSG
 */
export default () => {
  return (
    <>
      <h2 className="mb-2 font-bold underline underline-offset-4">
        <span className="bg-zinc-700 dark:bg-#fefddd dark:color-black color-#fff inline-block px-2 py-1 rounded-1.5">
          Static Site Generation
        </span>
      </h2>
      <ul className="pl-6 md:pl-10 list-decimal mb-5">
        <li className="mb-5">
          <Performance />
        </li>
        <li className="mb-5">
          <SEO />
        </li>
        <li className="mb-5">
          <Route />
        </li>
      </ul>
    </>
  )
}
