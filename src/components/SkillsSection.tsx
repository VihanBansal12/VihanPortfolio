
import React from 'react';

const skills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React.js', level: 75 },
  { name: 'Bootstrap', level: 85 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'Git', level: 70 },
  { name: 'Responsive Design', level: 90 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-black/30 relative">
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-700/20 blur-[100px]"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative neon-text">
            My Skills
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are my technical skills and competencies in various web technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="glass-card p-5 rounded-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800/10 to-pink-800/10 transform group-hover:translate-y-0 -translate-y-full transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                  <span className="text-sm text-purple-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse-neon"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8 text-white">Other Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Figma', 'TypeScript', 'SASS', 'Redux', 'Webpack', 'GitHub', 'Netlify', 'Vercel'].map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 hover:border-purple-500 hover:text-white transition-colors duration-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
