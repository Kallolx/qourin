import React, { useState, useEffect, useRef, TouchEvent } from "react";
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
    route: "/enterprise/software-development",
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
    route: "/enterprise/artificial-intelligence",
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
    route: "/enterprise/web-development",
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
    route: "tel:+8801612140042",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Add handleCall function
  const handleCall = () => {
    const phoneNumber = '+8801612140042';
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      // Mobile devices - use tel: protocol
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Desktop - show the number or copy to clipboard
      navigator.clipboard.writeText(phoneNumber);
      alert('Phone number copied to clipboard: ' + phoneNumber);
    }
  };

  // Handle touch events for swipe
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50; // minimum distance for swipe
    const swipeDistance = touchEndX.current - touchStartX.current;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0 && activeIndex > 0) {
        // Swipe right - previous slide
        setActiveIndex((prev) => prev - 1);
        setProgress(0);
      } else if (swipeDistance < 0 && activeIndex < slides.length - 1) {
        // Swipe left - next slide
        setActiveIndex((prev) => prev + 1);
        setProgress(0);
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
          return 0;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Section */}
          <div className="flex flex-col h-full relative">
            {/* Mobile Vertical Shape */}
            <div className="md:hidden px-4">
              <div
                className={`absolute left-4 top-0 w-[60px] h-full ${slides[activeIndex].bgColor}`}
              />
            </div>

            {/* Title Card */}
            <div
              className={`${slides[activeIndex].bgColor} min-h-[200px] md:h-[300px] transition-colors duration-500 flex items-center justify-center p-6 md:p-0 md:bg-opacity-100 bg-opacity-0`}
            >
              <div className="w-full md:max-w-[620px] px-4 md:px-12 pl-24 md:pl-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 md:text-white font-light leading-tight text-left">
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
            <div className="flex-1 flex flex-col justify-start md:justify-end py-8 md:py-0">
              <div className="w-full md:w-[500px] space-y-8 md:space-y-10 px-4 pl-24 md:pl-6 md:ml-auto md:pr-16">
                <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 font-light leading-relaxed">
                  {slides[activeIndex].description}
                </p>
                {/* Mobile Swipe Instruction */}
                <p className="text-sm text-gray-500 md:hidden">
                  Swipe to next »
                </p>
              </div>
              {/* Desktop Button - Hidden on Mobile */}
              <div className="hidden md:block w-full md:w-[500px] mt-8 px-6 md:ml-auto md:pr-16">
                <button
                  onClick={() => activeIndex === 3 ? handleCall() : navigate(slides[activeIndex].route)}
                  className={`flex items-center justify-between w-full ${slides[activeIndex].bgColor} text-white py-4 md:py-5 group hover:opacity-90 transition-opacity`}
                >
                  <span className="pl-8 text-base md:text-lg font-light">
                    {slides[activeIndex].buttonText}
                  </span>
                  <ArrowUpRight className="w-6 h-6 mr-8 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Desktop Only */}
          <div className="border-l border-gray-100 dark:border-gray-800 hidden md:block">
            {/* Counter Section */}
            <div className="relative h-[300px]">
              {/* Image Counter */}
              <div className="absolute bottom-8 right-8 flex items-center space-x-12">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center"
                  >
                    {/* Progress Bar */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-[60px] h-[2px] bg-gray-200 dark:bg-gray-700">
                      <div
                        className={`absolute top-0 left-0 h-full transition-all duration-500 ${
                          index === activeIndex
                            ? "bg-teal-600 dark:bg-teal-500"
                            : "bg-transparent"
                        }`}
                        style={{
                          width: index === activeIndex ? `${progress}%` : "0%",
                        }}
                      />
                    </div>

                    {/* Number Button */}
                    <button
                      onClick={() => {
                        setActiveIndex(index);
                        setProgress(0);
                      }}
                      className={`text-base font-light tracking-wide transition-colors ${
                        index === activeIndex
                          ? "text-teal-600 dark:text-teal-500"
                          : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
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
              {/* Image Container */}
              <div className="absolute inset-0">
                <img
                  src={slides[activeIndex].image}
                  alt={slides[activeIndex].alt}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>

              {/* Diagonal Cut Overlay */}
              <div className="absolute bottom-0 right-0 w-[200px]">
                <img
                  src="/hero/cut.png"
                  alt="diagonal cut"
                  className="w-full object-contain transform translate-y-[1px]" // Added small translate to prevent any gap
                />
              </div>
            </div>
          </div>

          {/* Mobile Image Section */}
          <div className="md:hidden w-full">
            <div className="px-4">
              {/* Image Counter - Above Image */}
              <div className="flex items-center justify-end space-x-3 mb-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveIndex(index);
                      setProgress(0);
                    }}
                    className="relative"
                  >
                    <span
                      className={`text-sm font-light ${
                        index === activeIndex ? "text-gray-900" : "text-gray-400"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {index === activeIndex && (
                      <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gray-900" />
                    )}
                  </button>
                ))}
              </div>

              <div
                className="relative h-[400px] overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={slides[activeIndex].image}
                  alt={slides[activeIndex].alt}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                {/* Mobile Diagonal Cut Overlay */}
                <div className="absolute bottom-0 right-0 w-[200px]">
                  <img
                    src="/hero/cut.png"
                    alt="diagonal cut"
                    className="w-full object-contain transform translate-y-[1px]"
                  />
                </div>
              </div>

              {/* Mobile Button */}
              <button
                onClick={() => activeIndex === 3 ? handleCall() : navigate(slides[activeIndex].route)}
                className={`w-full ${slides[activeIndex].bgColor} text-white h-16 mt-4 flex items-center justify-between px-8 group hover:opacity-90 transition-opacity`}
              >
                <span className="text-base font-light">
                  {slides[activeIndex].buttonText}
                </span>
                <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
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
