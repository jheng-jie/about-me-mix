/**
 * @desc Record Page 測試環境
 */
export default () => {
  return (
    <>
      <h2 className="mb-2 font-bold underline underline-offset-4">
        <span className="bg-zinc-700 dark:bg-#fefddd dark:color-black color-#fff inline-block px-2 py-1 rounded-1.5">
          測試環境
        </span>
      </h2>
      <ul className="pl-6 md:pl-10 list-decimal">
        <li>
          <h3>Yarn Workspace</h3>
        </li>
        <li>
          <h3>React</h3>
          Next13 + React 18 + Webpack 5
        </li>
        <li>
          <h3>Vue</h3>
          Nuxt3 + Vue 3 + Vite 4
        </li>
        <li>
          <h3>Svelte</h3>
          SvelteKit + Svelte 3 + Vite 4
        </li>
      </ul>
    </>
  )
}
