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

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={router.pathname} initial={'initial'} animate={'animate'} exit={'exit'} variants={PageVariants}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
