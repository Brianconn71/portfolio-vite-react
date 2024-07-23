import React from 'react'
import heroImage from '../assets/images/Brian Connolly Software Developer & Engineer.png'
import { HERO_CONTENT } from '../constants'

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
            <img
            src={heroImage}
            className="mx-2 w-2/3 rounded-lg shadow-2xl" />
            <div>
            <h1 className="pb-16 text-6xl font-bold lg:mt-16 lg:text-8xl">Brian Connolly</h1>
            <span className="bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500 bg-clip-text text-4xl text-transparent">Developer & Engineer</span>
            <p className="py-6">
                {HERO_CONTENT}
            </p>
            <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Hero
