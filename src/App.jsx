import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Technologies from './components/Technologies'

function App() {
  return (
    <div className="overflow-x-hidden">
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Education />
    <Technologies />
    <Projects />
    <Footer />
    </div>
  )
}

export default App
