import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setStatus('sending');
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/alcocerstudios@yahoo.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: `New Lead: ${data.businessName} - ${data.businessType}`,
        })
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="bg-accent text-[#F5F3EE] py-32 px-6">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-5xl md:text-7xl tracking-tighter mb-6">Ready to Get Started?</h2>
          <p className="font-body text-[#F5F3EE]/80 text-xl max-w-xl mx-auto">Drop your details below. We'll outline your complete built-for-conversion blueprint.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-dark/20 p-8 md:p-12 rounded-[3xl] shadow-inner backdrop-blur-sm border border-white/10 flex flex-col gap-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="font-mono text-xs uppercase tracking-widest mb-2 opacity-80">Full Name *</label>
              <input required name="name" type="text" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder-white/30 text-[#F5F3EE] focus:outline-none focus:border-white focus:bg-white/20 transition-all font-body" placeholder="John Doe" />
            </div>
            
            <div className="flex flex-col">
              <label className="font-mono text-xs uppercase tracking-widest mb-2 opacity-80">Business Name *</label>
              <input required name="businessName" type="text" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder-white/30 text-[#F5F3EE] focus:outline-none focus:border-white focus:bg-white/20 transition-all font-body" placeholder="Acme Services" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="font-mono text-xs uppercase tracking-widest mb-2 opacity-80">Phone Number *</label>
              <input required name="phone" type="tel" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder-white/30 text-[#F5F3EE] focus:outline-none focus:border-white focus:bg-white/20 transition-all font-body" placeholder="(555) 123-4567" />
            </div>
            
            <div className="flex flex-col">
              <label className="font-mono text-xs uppercase tracking-widest mb-2 opacity-80">Email Address *</label>
              <input required name="email" type="email" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder-white/30 text-[#F5F3EE] focus:outline-none focus:border-white focus:bg-white/20 transition-all font-body" placeholder="john@example.com" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-mono text-xs uppercase tracking-widest mb-2 opacity-80">Business Type *</label>
            <select required name="businessType" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-[#F5F3EE] focus:outline-none focus:border-white focus:bg-white/20 transition-all font-body appearance-none">
              <option value="" disabled selected className="text-dark">Select an industry...</option>
              <option value="Barbershop" className="text-dark">Barbershop</option>
              <option value="Dental Clinic" className="text-dark">Dental Clinic</option>
              <option value="Salon" className="text-dark">Salon</option>
              <option value="Gym" className="text-dark">Gym</option>
              <option value="Medical Office" className="text-dark">Medical Office</option>
              <option value="Plumber" className="text-dark">Plumber</option>
              <option value="Real Estate" className="text-dark">Real Estate</option>
              <option value="Other" className="text-dark">Other</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-mono text-xs uppercase tracking-widest mb-2 opacity-80">Message (Optional)</label>
            <textarea name="message" rows="4" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder-white/30 text-[#F5F3EE] focus:outline-none focus:border-white focus:bg-white/20 transition-all font-body resize-y" placeholder="Tell me about your business..."></textarea>
          </div>

          <button 
            type="submit"
            disabled={status === 'sending'}
            className="mt-4 bg-primary text-[#F5F3EE] py-5 rounded-full font-heading font-bold text-xl tracking-wide hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 w-full disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
          >
            {status === 'sending' ? 'Sending...' : 'Start Your Website'}
          </button>

          {status === 'success' && (
            <div className="mt-4 text-center font-body text-white bg-green-500/20 py-3 rounded-lg border border-green-500/30">
              Thanks! I'll reach out within 24 hours.
            </div>
          )}
          {status === 'error' && (
            <div className="mt-4 text-center font-body text-white bg-red-500/20 py-3 rounded-lg border border-red-500/30">
              Oops! Something went wrong. Please try again.
            </div>
          )}

        </form>
      </div>
    </section>
  );
}
