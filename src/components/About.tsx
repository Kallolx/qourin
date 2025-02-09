const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-8 md:py-20">
      <div className="max-w-7xl mx-auto relative">
        {/* Vertical Lines */}
        <div className="absolute inset-y-0 left-0 w-[1px] bg-gray-200 dark:bg-gray-700" />
        <div className="absolute inset-y-0 right-0 w-[1px] bg-gray-200 dark:bg-gray-700" />

        <div className="px-4 md:px-16">
          <div className="max-w-5xl ml-0 md:ml-auto">
            {/* Main Paragraph */}
            <div className="mb-8 md:mb-12">
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-900 dark:text-gray-100 leading-relaxed font-light text-left">
                With <span className="text-teal-600">2+ years</span> of providing software development services 
                for technological enterprises, successful startups, and AI-empowered companies worldwide, 
                our developers demonstrate exceptional efficiency and expertise.
              </p>
            </div>
            
            {/* Sub Paragraph */}
            <div className="max-w-2xl ml-0 md:ml-auto">
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                On average, Qourin clients benefit <span className="text-teal-600 font-normal">$20,000+</span> from annual savings 
                as a result of our collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 