import React from "react";
import heroImage from "../assets/images/Brian Connolly Software Developer & Engineer.png";
import CV from "../assets/cv/Curriculum Vitae of Brian Connolly.pdf";
import { HERO_CONTENT } from "../constants";
import { FaVideo, FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  });

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mx-2 w-full lg:w-1/2 lg:p-8">
          <motion.img
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            src={heroImage}
            className="rounded-lg shadow-2xl"
            alt="Brian Connolly Software Engineer & Developer"
          />
        </div>
        <div>
          <motion.h1
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="pb-16 text-6xl font-medium lg:mt-16 lg:text-8xl"
          >
            Brian Connolly
          </motion.h1>
          <motion.span
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500 bg-clip-text text-3xl text-transparent"
          >
            Full-Stack Developer & Engineer
          </motion.span>
          <motion.p
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light"
          >
            {HERO_CONTENT}
          </motion.p>
          <motion.div
            variants={container(1.3)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <button className="btn btn-primary">
              <span>
                <FaVideo />
              </span>{" "}
              Watch My Introduction
            </button>
            <a
              href={CV}
              download="Brian-Connolly-CV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-secondary">
                <span>
                  <FaFileDownload />
                </span>{" "}
                Download My CV
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
