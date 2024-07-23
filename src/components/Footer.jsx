import React from 'react'
import logo from '../assets/Brian_Connolly_logo.png'
import { FaLinkedin, FaGithub, FaMedium, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer footer-center bg-primary text-primary-content p-10">
  <aside>
    <img src={logo} className="w-40" alt="Brian connolly.dev logo" />
    <p className="font-bold">
      Brian Connolly
      <br />
      Full-Stack Developer & Engineer
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4 text-3xl">
      <a>
        <FaLinkedin />
      </a>
      <a>
        <FaGithub />
      </a>
      <a>
        <FaMedium />
      </a>
      <a>
        <FaTwitterSquare />
      </a>
    </div>
  </nav>
</footer>
  )
}

export default Footer
