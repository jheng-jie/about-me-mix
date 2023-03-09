import { switchDarkMode, useAppDispatch, useAppSelector } from '@/stores'

/**
 * @desc 日夜切換
 */
export default () => {
  const dispatch = useAppDispatch()
  const toggle = useAppSelector(state => state.website.dark)

  return (
    <div
      onClick={() => dispatch(switchDarkMode())}
      className="group w-12 rounded-full bg-gray-200 dark:bg-zinc-600 h-7.5 border-1 border-gray-100 dark:border-gray-700 p-0.5 cursor-pointer overflow-hidden select-none"
    >
      <div className="w-full h-6 rounded-full relative">
        <div
          className={`${
            toggle ? 'ml-4.5' : ''
          } transition-all group-hover:scale-110 dark:bg-#1d1c19 w-6 h-6 bg-gray-50 overflow-hidden rounded-full shadow-md inline-block`}
        >
          <div className="w-6 h-6">
            <img
              src={`${process.env.MIX_ASSETS_URL}/icon/sun.svg`}
              alt=""
              className={`${toggle ? '-mt-4' : ''} w-4 h-4 m-1 transition-margin`}
            />
            <img src={`${process.env.MIX_ASSETS_URL}/icon/moon.svg`} alt="" className="w-4 h-4 m-1" />
          </div>
        </div>
      </div>
    </div>
  )
}
