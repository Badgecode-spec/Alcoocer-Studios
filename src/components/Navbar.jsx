import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Transition earlier for better visibility on white backgrounds
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#features' },
    { name: 'El Protocolo', href: '#protocol' },
    { name: 'Cotizador', href: '#pricing' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center mt-6 px-4">
      <nav 
        ref={navRef}
        className={`relative flex items-center justify-between px-6 md:px-8 py-4 rounded-[2rem] md:rounded-3xl transition-all duration-500 w-full max-w-5xl 
        ${isScrolled 
          ? 'bg-background/80 backdrop-blur-xl shadow-lg border border-borderlight text-dark' 
          : 'bg-transparent text-[#F5F3EE]'}`}
      >
        <div className="font-heading font-bold text-lg md:text-xl tracking-wider uppercase">
          ALCOCER STUDIOS
        </div>
        
        {/* Desktop Links */}
        <div className={`hidden md:flex items-center space-x-8 font-mono text-xs uppercase tracking-widest ${isScrolled ? 'text-dark/80' : 'text-[#F5F3EE]/80'}`}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-accent hover:-translate-y-[1px] transition-all">{link.name}</a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <a 
            href="#contact"
            className="hidden sm:inline-block relative overflow-hidden group px-6 py-2.5 rounded-full bg-accent text-[#F5F3EE] font-heading font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
          >
            <span className="relative z-10">Iniciar Proyecto</span>
            <div className="absolute inset-0 bg-dark transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
          </a>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:text-accent transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`absolute top-full left-0 w-full mt-4 bg-background border border-borderlight rounded-[2rem] p-6 shadow-2xl transition-all duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading font-bold text-2xl text-dark border-b border-borderlight pb-4 transition-colors hover:text-accent"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-accent text-[#F5F3EE] py-4 rounded-full text-center font-heading font-bold text-xl active:scale-[0.98] transition-all shadow-lg"
            >
              Iniciar Proyecto
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
