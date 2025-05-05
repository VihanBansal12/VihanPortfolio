
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-purple-700/30 blur-[100px]"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative neon-text">
            About Me
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here you'll find more information about me, what I do, and my current skills in terms of programming and technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="glass-card p-6 rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">Get to know me!</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a <strong className="text-purple-400">Frontend Web Developer</strong> building the Frontend of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
              </p>
              <p>
                I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people in the Dev Community.
              </p>
              <p>
                I'm open to <strong className="text-purple-400">Job opportunities</strong> where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
              </p>
            </div>
            <a 
              href="#contact" 
              className="glow-button inline-block mt-6 px-6 py-2 rounded-md bg-purple-700 text-white font-medium"
            >
              Contact
            </a>
          </div>
          
          <div className="glass-card p-6 rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">My Approach</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-purple-400 mb-2">User-Centered Design</h4>
                <p className="text-gray-300">
                  I prioritize creating intuitive and user-friendly interfaces that provide exceptional user experiences.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-purple-400 mb-2">Responsive Development</h4>
                <p className="text-gray-300">
                  Every project I work on is fully responsive, ensuring a seamless experience across all devices and screen sizes.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-purple-400 mb-2">Attention to Detail</h4>
                <p className="text-gray-300">
                  I believe that the smallest details make the biggest difference in how users perceive and interact with a product.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-purple-400 mb-2">Continuous Learning</h4>
                <p className="text-gray-300">
                  The tech industry changes rapidly, and I'm committed to continuously learning new technologies and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
