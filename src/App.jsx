import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Archive from './components/Archive'
import Philosophy from './components/Philosophy'
import Protocol from './components/Protocol'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Archive />
      <Philosophy />
      <Protocol />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
