import React, { useEffect } from 'react'
import './App.css'
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
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="w-full bg-background min-h-screen">
      <div className="custom-cursor"></div>
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
