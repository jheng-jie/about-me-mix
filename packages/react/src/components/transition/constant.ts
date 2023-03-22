// for motion
export const PageVariants = {
  initial: {
    '--blur': '0.25rem',
    opacity: 0,
    filter: 'none',
    display: 'block',
  },
  animate: {
    '--blur': '0',
    opacity: 1,
    filter: 'blur(var(--blur))',
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      filter: 'none',
      display: 'contents',
    },
  },
  exit: {
    '--blur': '0.25rem',
    filter: 'blur(var(--blur))',
    opacity: 0,
    display: 'block',
    transition: {
      duration: 0.3,
    },
  },
}
