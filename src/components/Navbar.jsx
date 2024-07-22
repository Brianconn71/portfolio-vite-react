import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin, FaGithub, FaMedium, FaTwitterSquare } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="bg-red-900 mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="Brian connolly.dev logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-5 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <FaMedium />
            <FaTwitterSquare />
        </div>
        <div>
        <button class="btn">Hello daisyUI</button>
        </div>
    </nav>
  )
}

export default Navbar
