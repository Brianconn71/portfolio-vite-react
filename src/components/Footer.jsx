import React from "react";
import logo from "../assets/Brian_Connolly-logo.png";
import {
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaTwitterSquare,
} from "react-icons/fa";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-secondary text-primary-content p-10">
      <aside>
        <a href="https://brianconnolly.dev">
          <img src={logo} className="w-40" rel="noopener noreferrer" alt="Brian connolly.dev logo" />
        </a>
        <p className="font-bold">
          <motion.h2
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: -100}}
          transition={{duration: 1.5}}
          className="text-center font-medium text-4xl">Get in touch</motion.h2>
          <div className="text-center">
            <motion.p
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1}}
            className="my-4">{CONTACT.address}</motion.p>
            <motion.p 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 1}}
            className="my-4">
              <a
                href="	https://wa.me/353863268858"
                target="_blank"
                rel="noopener noreferrer"
              >
                {CONTACT.phoneNo}
              </a>
            </motion.p>
            <motion.p
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1}}
            className="my-4">
              <a href="mailto:brian@brianconnolly.dev" rel="noopener noreferrer" className="border-b">
                {CONTACT.email}
              </a>
            </motion.p>
          </div>
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4 text-3xl">
          <a
            href="https://www.linkedin.com/in/brian-connolly-0b3791b0/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/Brianconn71" rel="noopener noreferrer" target="_blank">
            <FaGithub />
          </a>
          <a href="https://medium.com/@brian.connolly71" rel="noopener noreferrer" target="_blank">
            <FaMedium />
          </a>
          <a href="https://x.com/Brianconnwebdev" rel="noopener noreferrer" target="_blank">
            <FaTwitterSquare />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
