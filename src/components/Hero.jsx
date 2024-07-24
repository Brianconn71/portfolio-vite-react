import React from 'react'
import heroImage from '../assets/images/Brian Connolly Software Developer & Engineer.png'
import { HERO_CONTENT } from '../constants'

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
            <div className="mx-2 w-full lg:w-1/2 lg:p-8">
              <img
              src={heroImage}
              className="rounded-lg shadow-2xl"
              alt="Brian Connolly Software Engineer & Developer" />
            </div>
            <div>
            <h1 className="pb-16 text-6xl font-medium lg:mt-16 lg:text-8xl">Brian Connolly</h1>
            <span className="bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500 bg-clip-text text-4xl text-transparent">Full-Stack Developer & Engineer</span>
            <p className="my-2 max-w-xl py-6 font-light">
                {HERO_CONTENT}
            </p>
            <button className="btn btn-secondary">Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Hero
