
import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A fully responsive e-commerce platform with product filtering, cart functionality, and checkout process.",
    technologies: ["React", "CSS", "JavaScript", "Stripe"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    link: "#"
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "Real-time weather application with forecast data, location search, and interactive UI elements.",
    technologies: ["JavaScript", "API", "CSS", "HTML"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    link: "#"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A task management application with drag-and-drop functionality, task categories, and productivity analytics.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    link: "#"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website with smooth animations, dark mode, and custom illustrations.",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    link: "#"
  }
];

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-700/20 blur-[100px]"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative neon-text">
            My Projects
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is unique and showcases different skills and technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card glass-card rounded-lg overflow-hidden relative group"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-xs bg-purple-900/40 text-purple-200 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="glow-button inline-block px-5 py-2 bg-purple-700 text-white rounded-md"
                >
                  View Project
                </a>
              </div>
              
              {hoveredId === project.id && (
                <div className="absolute inset-0 border-2 border-purple-500 rounded-lg pointer-events-none neon-border"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="glow-button inline-block px-8 py-3 bg-purple-700 text-white rounded-md"
          >
            See More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
