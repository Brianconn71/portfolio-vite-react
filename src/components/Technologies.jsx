import React from "react";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiReact,
  SiDjango,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiFastapi,
  SiStreamlit,
  SiDaisyui,
} from "react-icons/si";
import { FaPython, FaAws, FaPhp, FaDocker, FaJenkins } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div
      id="technologies"
      className="border-b bg-base-100 border-base-300 pb-24"
    >
      <motion.h2
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
      className="container mx-auto ">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-base-300 p-4">
            <SiReact className="text-7xl" />
          </motion.div>
          <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-base-300 p-4">
            <RiNextjsFill className="text-7xl" />
          </motion.div>
          <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-base-300 p-4">
            <RiTailwindCssFill className="text-7xl" />
          </motion.div>
          <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-base-300 p-4">
            <SiDaisyui className="text-7xl" />
          </motion.div>
          <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-base-300 p-4">
            <SiDjango className="text-7xl" />
          </motion.div>
          <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-base-300 p-4">
            <SiMongodb className="text-7xl" />
          </motion.div>
          <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-base-300 p-4">
            <BiLogoPostgresql className="text-7xl" />
          </motion.div>
          <motion.div
          variants={iconVariants(8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-base-300 p-4">
            <FaPython className="text-7xl" />
          </motion.div>
          <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-base-300 p-4">
            <FaAws className="text-7xl" />
          </motion.div>
          <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-base-300 p-4">
            <SiJavascript className="text-7xl" />
          </motion.div>
          <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-base-300 p-4">
            <SiTypescript className="text-7xl" />
          </motion.div>
          <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-base-300 p-4">
            <FaPhp className="text-7xl" />
          </motion.div>
          <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-base-300 p-4">
            <FaDocker className="text-7xl" />
          </motion.div>
          <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-base-300 p-4">
            <FaJenkins className="text-7xl" />
          </motion.div>
          <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-base-300 p-4">
            <SiFastapi className="text-7xl" />
          </motion.div>
          <motion.div
          variants={iconVariants(8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-base-300 p-4">
            <SiStreamlit className="text-7xl" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
