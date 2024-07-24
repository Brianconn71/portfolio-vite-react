import React from 'react'
import logo from '../assets/Brian_Connolly-logo.png'
import { FaLinkedin, FaGithub, FaMedium, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer footer-center bg-primary text-primary-content p-10">
  <aside>
  <a href="https://brianconnolly.dev"><img src={logo} className="w-40" alt="Brian connolly.dev logo" /></a>
    <p className="font-bold">
      Brian Connolly
      <br />
      Full-Stack Developer & Engineer
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4 text-3xl">
      <a href="https://www.linkedin.com/in/brian-connolly-0b3791b0/" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Brianconn71" target="_blank">
        <FaGithub />
      </a>
      <a href="https://medium.com/@brian.connolly71" target="_blank">
        <FaMedium />
      </a>
      <a href="https://x.com/Brianconnwebdev" target="_blank">
        <FaTwitterSquare />
      </a>
    </div>
  </nav>
</footer>
  )
}

export default Footer
