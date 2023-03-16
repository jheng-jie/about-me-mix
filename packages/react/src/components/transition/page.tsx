'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { PageVariants } from '@/components/transition/constant'

/**
 * @desc Page 過場動畫
 */
export default function ({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const toTop = () => window.scrollTo(0, 0)

  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={toTop}>
      <motion.div key={router.pathname} initial={'initial'} animate={'animate'} exit={'exit'} variants={PageVariants}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
