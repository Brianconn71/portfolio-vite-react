import React from 'react'
import logo from '../assets/Brian_Connolly_logo.png'
import { FaLinkedin, FaGithub, FaMedium, FaTwitterSquare } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
        <div className="navbar-start">
            <img src={logo} width={150} className alt="Brian connolly.dev logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
            </ul>
        </div>
        <div className="navbar-end gap-5 text-2xl p-3">
            <FaLinkedin />
            <FaGithub />
            <FaMedium />
            <FaTwitterSquare />
        </div>
    </div>
  )
}

export default Navbar
