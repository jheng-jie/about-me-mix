'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageVariants } from '@/components/transition/constant'

/**
 * @desc Layout 過場動畫
 */
export default function ({ children, layout }: { children: React.ReactNode; layout: number }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={String(layout)} initial={'initial'} animate={'animate'} exit={'exit'} variants={PageVariants}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
