import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { DiHtml5 } from 'react-icons/di'
import { DiCss3Full } from 'react-icons/di' 
import { DiWordpress } from 'react-icons/di'
import { motion } from 'framer-motion'

export const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24 '>
      <h2 className='my-10 text-center text-4xl'>Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-7">
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [10, -10] }}
          transition={{
            duration: 2.3,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>

        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [10, -10] }}
          transition={{
            duration: 2.1,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiWordpress className='text-7xl text-white-100' />
        </motion.div>

        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [10, -10] }}
          transition={{
            duration: 2.0,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiCss3Full className='text-7xl text-white-100' />
        </motion.div>

        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [10, -10] }}
          transition={{
            duration: 1.9,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiHtml5 className='text-7xl text-orange-500' />
        </motion.div>
      </div>
    </div>
  )
}
