import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: "/hero/1.png",
    alt: "Team collaboration",
    title: "A Better Revolution\nFor The Future",
    description:
      "Qourin developers partner with innovative companies, from startups to multinational, lending the software engineering expertise to propel them to new heights and the edge to outpace the competition.",
    buttonText: "Get an estimate",
    bgColor: "bg-[#008080]", // Teal color from image
    route: "/contact",
  },
  {
    id: 2,
    image: "/hero/2.png",
    alt: "Modern architecture",
    title: "AI Innovation",
    description:
      "As pioneers in AI engineering, we view it as more than a shiny tool: it's a pillar of the new business normal. Those companies that embrace and leverage AI will set the standard and lead in their category.",
    buttonText: "Read the report",
    bgColor: "bg-emerald-600",
    route: "/expertise",
  },
  {
    id: 3,
    image: "/hero/3.png",
    alt: "Team meeting",
    title: "Expert Software\nDevelopment",
    description:
      "Get it done right — the first time. Our proven software expertise and engagement flexibility mean you don't have to worry about timelines, processes, or outcomes.",
    buttonText: "Explore services",
    bgColor: "bg-cyan-600",
    route: "/services",
  },
  {
    id: 4,
    image: "/hero/4.png",
    alt: "Team meeting",
    title: "Exceptional customer service",
    description:
      "At Qourin, unparalleled customer care isn't just a promise — it's our mission. We blend personalized experience, unwavering attention to detail, and a genuine passion for your business, ensuring that every aspect of our collaboration is tailored to your success",
    buttonText: "Schedule a call",
    bgColor: "bg-teal-600",
    route: "/contact",
  },
];

const Home = () => {
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Section */}
          <div className="flex flex-col h-full">
            {/* Title Card */}
            <div className={`${slides[activeIndex].bgColor} min-h-[200px] md:h-[300px] transition-colors duration-500 flex items-center justify-center p-6 md:p-0`}>
              <div className="w-full md:max-w-[620px] px-4 md:px-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight text-left">
                  {slides[activeIndex].title.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i === 0 && <br />}
                    </React.Fragment>
                  ))}
                </h1>
              </div>
            </div>

            {/* Description Card */}
            <div className="flex-1 flex items-end py-8 md:py-0">
              <div className="w-full md:w-[440px] space-y-6 md:space-y-8 px-6 md:ml-auto md:pr-16">
                <p className="text-sm md:text-base text-gray-800 dark:text-gray-200 font-light leading-relaxed">
                  {slides[activeIndex].description}
                </p>
                <button
                  onClick={() => navigate(slides[activeIndex].route)}
                  className={`flex items-center justify-between w-full ${slides[activeIndex].bgColor} text-white py-3 group hover:opacity-90 transition-opacity`}
                >
                  <span className="pl-6 font-light">
                    {slides[activeIndex].buttonText}
                  </span>
                  <ArrowUpRight className="w-5 h-5 mr-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="border-l border-gray-100 dark:border-gray-800 hidden md:block">
            {/* Counter Section */}
            <div className="relative h-[300px]">
              {/* Image Counter */}
              <div className="absolute bottom-8 right-8 flex items-center space-x-12">
                {slides.map((_, index) => (
                  <div key={index} className="relative flex flex-col items-center">
                    {/* Progress Bar */}
                    <div
                      className="absolute -top-3 left-1/2 transition-all duration-500 bg-[#008080] dark:bg-[#00A45A] font-light"
                      style={{
                        width: index === activeIndex ? "60px" : "30px",
                        height: "2px",
                        transform: `translateX(-50%) scaleX(${
                          index === activeIndex ? progress / 100 : 0.3
                        })`,
                      }}
                    />

                    {/* Number Button */}
                    <button
                      onClick={() => {
                        setActiveIndex(index);
                        setProgress(0);
                      }}
                      className={`text-base font-light tracking-wide transition-all ${
                        index === activeIndex
                          ? "text-[#008080] dark:text-white"
                          : "text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-white"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section with Diagonal Cut */}
            <div className="relative h-[400px] overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={slides[activeIndex].image}
                  alt={slides[activeIndex].alt}
                  className="w-full h-full object-fit transition-all duration-500"
                />
                {/* Diagonal Cut Overlay */}
                <div
                  className="absolute bottom-0 right-0 w-[200px] h-[200px]"
                  style={{
                    background: "var(--bg-color, white)",
                    clipPath: "polygon(100% 0, 20% 100%, 100% 120%)"
                  }}
                />
              </div>
            </div>
          </div>

          {/* Mobile Image Section */}
          <div className="md:hidden w-full mt-8">
            <div className="relative h-[300px] overflow-hidden">
              <img
                src={slides[activeIndex].image}
                alt={slides[activeIndex].alt}
                className="w-full h-full object-cover transition-all duration-500"
              />
              {/* Mobile Image Counter */}
              <div className="absolute bottom-4 right-4 flex items-center space-x-6 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveIndex(index);
                      setProgress(0);
                    }}
                    className={`text-sm font-light transition-all ${
                      index === activeIndex
                        ? "text-white"
                        : "text-white/60 hover:text-white/80"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>
              
            </div>
          </div>
        </div>

        {/* Separation Line */}
        <div className="w-full h-px bg-gray-200 dark:bg-gray-800 mt-12 md:mt-24" />
      </div>
    </div>
  );
};

export default Home;
