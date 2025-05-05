
import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-500/30 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-purple-500/20 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h3 className="text-gray-300 text-xl mb-2">Hello, I'm</h3>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-violet-500 drop-shadow-none">
                Vihan Bansal
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-300 drop-shadow-sm">
              Frontend Developer
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              I build exceptional and accessible digital experiences for the web. Specializing in creating responsive, user-friendly interfaces with modern web technologies.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href="#projects" 
                className="hover-button px-8 py-3 rounded-md bg-purple-700 text-white font-medium"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-md bg-transparent border border-purple-500 text-white font-medium hover:border-purple-400 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm lg:max-w-md relative">
              <div className="rounded-lg overflow-hidden border border-purple-500/50 neon-border-purple">
                <img 
                  src="/lovable-uploads/d0ec42d9-cc6a-4acb-96bc-e7c22616a483.png" 
                  alt="Profile" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-purple-500/20 to-violet-500/20 blur-xl rounded-lg transform translate-x-2 translate-y-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
