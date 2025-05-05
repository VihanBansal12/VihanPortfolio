
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#hero" className="text-xl md:text-2xl font-bold tracking-wider neon-text text-white">
            Dev<span className="text-purple-500">Portfolio</span>
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white hover:neon-text transition-all duration-300">About</a>
            <a href="#skills" className="text-gray-300 hover:text-white hover:neon-text transition-all duration-300">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-white hover:neon-text transition-all duration-300">Projects</a>
            <a href="#contact" className="glow-button px-5 py-2 bg-purple-700 text-white rounded-md">Contact</a>
          </div>
        </div>
        
        {/* Mobile navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-60 opacity-100 pt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-4 pb-4">
            <a href="#about" className="text-gray-300 hover:text-white hover:neon-text transition-all duration-300">About</a>
            <a href="#skills" className="text-gray-300 hover:text-white hover:neon-text transition-all duration-300">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-white hover:neon-text transition-all duration-300">Projects</a>
            <a href="#contact" className="glow-button px-5 py-2 bg-purple-700 text-white rounded-md inline-block w-fit">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
