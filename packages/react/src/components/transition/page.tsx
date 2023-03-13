'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

// for motion
const pageVariants = {
  initial: {
    '--blur': '1rem',
    opacity: 0,
    filter: 'blur(var(--blur))',
  },
  animate: {
    '--blur': '0',
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
    transitionEnd: {
      filter: 'none',
    },
  },
  exit: {
    '--blur': '1rem',
    filter: 'blur(var(--blur))',
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

/**
 * @desc Page 過場動畫
 */
export default function ({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={router.pathname} initial={'initial'} animate={'animate'} exit={'exit'} variants={pageVariants}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
