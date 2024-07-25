import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {

  const projects = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 1,
      },
    },
  });

  return (
    <div id="projects" className="border-b bg-base-100 pb-4 border-base-300">
      <motion.h2
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Projects</motion.h2>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {PROJECTS.map((project, index) => (
            <motion.div
            variants={projects(2)}
            initial="hidden"
            animate="visible"
              key={index}
              className="card w-96 mb-8 bg-base-100 shadow-xl lg:justify-center"
            >
              <figure>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-96 h-96"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title mb-2 mt-2 font-semibold">
                  {project.title}
                </h3>
                <p className="mb-1 min-h-24 text-neutral-400">
                  {project.description}
                </p>
                <div className="mt-4 mb-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-2 rounded bg-base-300 px-2 py-1 text-sm font-medium font-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="card-actions justify-center">
                  <button className="btn btn-secondary">View Site</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
