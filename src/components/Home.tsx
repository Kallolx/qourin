import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1665686310429-ee43624978fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "A Better Revolution\nFor The Future",
    description: "Qourin developers partner with innovative companies, from startups to multinational, lending the software engineering expertise to propel them to new heights and the edge to outpace the competition.",
    buttonText: "Get an estimate",
    bgColor: "bg-teal-600",
    textColor: "text-teal-600"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "AI innovation",
    description: "As pioneers in AI engineering, we view it as more than a shiny tool: it's a pillar of the new business normal. Those companies that embrace and leverage AI will set the standard and lead in their category.",
    buttonText: "Read the report",
    bgColor: "bg-emerald-500",
    textColor: "text-emerald-500"
  },
  {
    image: "https://images.unsplash.com/photo-1552337223-9710a0e01fbc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Expert software development",
    description: "Get it done right — the first time. Our proven software expertise and engagement flexibility mean you don't have to worry about timelines, processes, or outcomes. Proficient in web, mobile, cloud, and advanced tech like AI and VR, we empower you to innovate and grow your business at the scale and speed of future trends",
    buttonText: "Explore services",
    bgColor: "bg-cyan-600",
    textColor: "text-cyan-600"
  },
  {
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Exceptional customer service",
    description: "At Qourin, unparalleled customer care isn't just a promise — it's our mission. We blend personalized experience, unwavering attention to detail, and a genuine passion for your business, ensuring that every aspect of our collaboration is tailored to your success.",
    buttonText: "Schedule a call",
    bgColor: "bg-cyan-600",
    textColor: "text-cyan-600"
  }
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
          return 0;
        }
        return prev + 1;
      });
    }, 50); // 5 seconds total for each slide

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex-1 bg-gray-100">
      <div className="h-[calc(100vh-4rem)] md:h-[600px] flex flex-col md:flex-row mt-8 md:mt-12">
        {/* Left Section */}
        <div className={`w-full md:w-1/2 ${slides[activeIndex].bgColor} flex items-center transition-colors duration-500 py-6 md:py-0`}>
          <div className="w-full max-w-[520px] mx-auto px-6 md:px-12">
            <div className="mb-4 hidden md:block">
              <div className="h-0.5 w-12 bg-white/80 mb-1" />
              <div className="h-0.5 w-8 bg-white/60" />
            </div>
            
            <h1 className="text-4xl md:text-[56px] font-light text-white leading-[1.2] mb-4 md:mb-6 mt-8 md:mt-0">
              {slides[activeIndex].title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i === 0 && <br />}
                </React.Fragment>
              ))}
            </h1>
            
            <p className="text-white/90 mb-6 md:mb-8 text-base md:text-lg leading-relaxed max-w-[440px]">
              {slides[activeIndex].description}
            </p>
            
            <button className={`flex items-center space-x-2 bg-white ${slides[activeIndex].textColor} px-6 md:px-8 py-2.5 md:py-3 rounded-sm w-fit hover:bg-gray-100 transition-all group`}>
              <span>{slides[activeIndex].buttonText}</span>
              <ArrowRight className="w-4 md:w-5 h-4 md:h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 relative bg-gray-50 h-[45vh] md:h-full">
          {/* Image Counter */}
          <div className="absolute top-4 md:top-8 right-4 md:right-8 z-20 flex items-center space-x-4 md:space-x-8">
            {slides.map((_, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => {
                    setActiveIndex(index);
                    setProgress(0);
                  }}
                  className={`text-lg md:text-xl font-light pb-2 transition-colors duration-300 ${
                    index === activeIndex ? 'text-white' : 'text-white/50'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </button>
                <div className={`absolute bottom-0 left-0 w-full h-0.5 ${
                  index === activeIndex ? 'bg-white/20' : 'bg-transparent'
                }`}>
                  {index === activeIndex && (
                    <div 
                      className="h-full bg-white transition-all duration-50"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Image with Corner Cut */}
          <div className="h-full w-full relative overflow-hidden">
            <img 
              src={slides[activeIndex].image}
              alt={slides[activeIndex].title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            {/* Bottom Right Corner Cut */}
            <div className="absolute bottom-0 right-0">
              <div className="w-20 md:w-32 h-20 md:h-32 bg-gray-100 transform rotate-45 translate-x-10 md:translate-x-16 translate-y-10 md:translate-y-16" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;