import React from 'react'
import logo from '../assets/Brian_Connolly_logo.png'
import { FaLinkedin, FaGithub, FaMedium, FaTwitterSquare } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
        <div className="navbar-start">
            <img src={logo} className="mx-2 w-40" alt="Brian connolly.dev logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base">
            <li><a>About Me</a></li>
            <li><a>Experience</a></li>
            <li><a>Education</a></li>
            <li><a>Projects</a></li>
            </ul>
        </div>
        <div className="navbar-end gap-5 text-3xl p-3">
            <FaLinkedin />
            <FaGithub />
            <FaMedium />
            <FaTwitterSquare />
        </div>
    </div>
  )
}

export default Navbar
