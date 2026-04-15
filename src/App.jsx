import React, { useEffect } from 'react'
import gsap from 'gsap'
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
    // Set initial bounds to center the cursor
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    
    // Use GSAP's optimized update functions instead of layout-thrashing style.left
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3.out" });

    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
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
