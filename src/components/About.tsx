import React from 'react';

const About = () => {
  return (
    <section className="bg-white py-8 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="h-0.5 w-12 bg-teal-600/30 mb-1" />
            <div className="h-0.5 w-8 bg-teal-600/20" />
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
            With <span className="text-teal-600">2+ years</span> of providing software development services 
            for technological enterprises, successful startups, and AI-empowered companies worldwide, 
            our developers demonstrate exceptional efficiency and expertise.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-auto">
              <div className="h-[1px] w-full md:w-32 bg-gradient-to-r from-transparent via-teal-600/20 to-transparent" />
            </div>
            
            <p className="text-lg text-gray-500 font-light px-4">
              On average, Qourin clients benefit <span className="text-teal-600 font-normal">$20,000+</span> from annual savings 
              as a result of our collaboration.
            </p>
            
            <div className="w-full md:w-auto">
              <div className="h-[1px] w-full md:w-32 bg-gradient-to-r from-transparent via-teal-600/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 