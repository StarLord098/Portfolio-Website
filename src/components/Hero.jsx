import React from 'react'
import { HERO_CONTENT } from '../constants'
import Profilepic from '../assets/Profilepic.jpg'
import { motion } from 'framer-motion'

export const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-36">
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: .7 }}
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Keshav Sharma</motion.h1>
                        <motion.span
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: .8 }}
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                    bg-clip-text text-3xl tracking-tight text-transparent">Web Developer</motion.span>
                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: .9 }}
                        >{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: .7 }}
                            className='rounded-2xl' src={Profilepic} alt="Profilepic" />
                    </div>
                </div>
            </div>
        </div>
    )
}
