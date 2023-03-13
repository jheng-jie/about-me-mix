'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
 * @desc Layout 過場動畫
 */
export default function ({ children, layout }: { children: React.ReactNode; layout: number }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={String(layout)} initial={'initial'} animate={'animate'} exit={'exit'} variants={pageVariants}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
