import React, { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center mt-6 px-4">
      <nav 
        ref={navRef}
        className={`relative flex items-center justify-between px-8 py-4 rounded-3xl transition-all duration-500 w-full max-w-5xl 
        ${isScrolled 
          ? 'bg-background/80 backdrop-blur-xl shadow-lg border border-borderlight text-dark' 
          : 'bg-transparent text-[#F5F3EE]'}`}
      >
        <div className="font-heading font-bold text-xl tracking-wider uppercase">
          ALCOCER STUDIOS
        </div>
        
        <div className="hidden md:flex items-center space-x-8 font-mono text-xs uppercase tracking-widest text-[#F5F3EE]/80">
          <a href="#features" className="hover:text-accent hover:-translate-y-[1px] transition-all">SERVICES</a>
          <a href="#protocol" className="hover:text-accent hover:-translate-y-[1px] transition-all">PROCESS</a>
          <a href="#pricing" className="hover:text-accent hover:-translate-y-[1px] transition-all">PRICING</a>
        </div>

        <a 
          href="#contact"
          className="relative overflow-hidden group px-6 py-2.5 rounded-full bg-accent text-[#F5F3EE] font-heading font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
          style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
        >
          <span className="relative z-10">Start Your Website</span>
          <div className="absolute inset-0 bg-dark transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
        </a>
      </nav>
    </div>
  );
}
