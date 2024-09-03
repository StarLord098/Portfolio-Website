import { FaLinkedin } from 'react-icons/fa'
import { BsThreads } from 'react-icons/bs' 
import { FaInstagram } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
import React from 'react'
import logo from "../assets/logo.png"

export const Navbar = () => {
  return(
    <nav className="mb-16 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-14" src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center jstifycenter gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/keshav-sharma-bb708a29a/" target='blank'><FaLinkedin /></a>
        <a href="https://www.threads.net/@s.__.keshav?xmt=AQGz4i5jsqw9qlSOwX9-wRxI0biUiI6YKMu7b1Vz4F1AY6I" target='blank'><BsThreads /></a>
        <a href="https://www.instagram.com/s.__.keshav?igsh=MTAxc2RrbXVvNXhlaA==" target='blank'><FaInstagram /></a>
        <a href="https://github.com/StarLord098" target='blank'><FaGithub /></a>
      </div>
    </nav>
  )
}
