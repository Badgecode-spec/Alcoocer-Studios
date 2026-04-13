import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white rounded-t-[4rem] px-8 py-20 md:py-32 flex flex-col mt-[-4rem] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Brand */}
        <div className="md:col-span-2 flex flex-col justify-between h-full space-y-8">
          <div>
            <h3 className="font-heading font-bold text-4xl tracking-tighter mb-2">Alcocer Studios</h3>
            <p className="font-drama italic text-secondary text-2xl">High-end Web Design.</p>
          </div>
          
          <div className="flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-mono text-xs uppercase tracking-widest text-secondary">Sistema Operativo</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-mono text-xs uppercase tracking-widest text-[#F5F3EE]/50 mb-2">Navegación</h4>
          <a href="#features" className="hover:text-accent font-body transition-colors">Servicios</a>
          <a href="#protocol" className="hover:text-accent font-body transition-colors">Protocolo</a>
          <a href="#pricing" className="hover:text-accent font-body transition-colors">Cotizador</a>
          <a href="#contact" className="hover:text-accent font-body transition-colors">Contacto</a>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="font-mono text-xs uppercase tracking-widest text-[#F5F3EE]/50 mb-2">Legal</h4>
          <a href="#" className="hover:text-accent font-body transition-colors">Aviso de Privacidad</a>
          <a href="#" className="hover:text-accent font-body transition-colors">Términos de Servicio</a>
        </div>

      </div>

      <div className="mt-24 pt-8 border-t border-white/10 max-w-7xl mx-auto w-full text-center md:text-left flex flex-col md:flex-row justify-between items-center text-secondary font-body text-sm gap-4">
        <p>&copy; {new Date().getFullYear()} Alcocer Studios. Todos los derechos reservados.</p>
        <p className="text-xs tracking-widest uppercase font-mono opacity-50">Precios expresados en MXN.</p>
      </div>

    </footer>
  );
}
