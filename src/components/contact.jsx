import React from 'react'
import { motion } from 'framer-motion'
import { CONTACT } from '../constants'
export const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h2 
      whileInView={{opacity:1 , y:0}}
      initial={{opacity:0 , y:-100}}
      transition={{duration:0.5}}
      className='my-10 text-center text-4xl'>Get In Touch</motion.h2>
      <div 
      whileInView={{opacity:1 , x:0}}
      initial={{opacity:0 , x:-100}}
      transition={{duration:1}}
      className="text-center tracking-tighter">
        <motion.p 
        whileInView={{opacity:1 , x:0}}
        initial={{opacity:0 , x:-100}}
        transition={{duration:1}}
        className='my-4'>{CONTACT.address}
        </motion.p>

        <motion.p 
        whileInView={{opacity:1 , x:0}}
        initial={{opacity:0 , x:-100}}
        transition={{duration:1}}
        className='my-4'>{CONTACT.phoneNo}
        </motion.p>

        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=keshavs4273@gmail.com" target='blank'><motion.p 
        whileInView={{opacity:1 , x:0}}
        initial={{opacity:0 , x:-100}}
        transition={{duration:1}}
        className='my-4'> {CONTACT.email}</motion.p></a>
      </div>
    </div>
  )
}