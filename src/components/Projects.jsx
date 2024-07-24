import React from 'react'
import { PROJECTS } from '../constants'

const Projects = () => {
  return (
    <div id="projects" className="border-b bg-neutral-content pb-4 border-base-300">
      <h2 className='my-20 text-center text-4xl'>Projects</h2>
      <div className="container mx-auto ">
        {PROJECTS.map((project, index) => (
          <div key={index} className="card card-side mb-8 bg-base-100 shadow-xl lg:justify-center">
            <figure className="w-full lg:w-1/4">
            <img src={project.image} width={200} height={200} alt={project.title} className="mb-6 mt-6  rounded" />
            </figure>
            <div className="card-body w-full lg:w-3/4">
              <h3 className="card-title mb-2 mt-2 font-semibold">{project.title}</h3>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-slate-900">
                  {tech}
                </span>
              ))}
              <div className="card-actions justify-end">
                <button className="btn btn-secondary">View Site</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
