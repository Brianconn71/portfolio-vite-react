import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Footer from './components/Footer'

function App() {
  return (
    <div className="overflow-x-hidden container mx-auto px-8">
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Education />
    <Footer />
    </div>
  )
}

export default App
