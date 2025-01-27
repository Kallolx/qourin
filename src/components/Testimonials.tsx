import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Benjamin Maisano",
    role: "CTO at Market Spy",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    quote: "Qourin has provided very talented engineers across web UI, mobile, backend APIs, and system designs, to data integrations and beyond.",
    subQuote: "Their staff integrated quickly and were dedicated to the internal teams throughout the relationship, acting as long-term partners in our strategic digital efforts.",
    bgColor: "bg-gradient-to-br from-emerald-600 to-emerald-700",
    accentColor: "text-emerald-300"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "CEO at TechFlow",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    quote: "The development team's expertise in AI and machine learning helped us create innovative solutions that set us apart in the market.",
    subQuote: "Their commitment to quality and timely delivery exceeded our expectations. A truly reliable technology partner.",
    bgColor: "bg-gradient-to-br from-blue-600 to-blue-700",
    accentColor: "text-blue-300"
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Product Director at InnovateLabs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    quote: "Working with Qourin transformed our development process. Their team brought both technical excellence and strategic insight.",
    subQuote: "They didn't just write code; they contributed valuable ideas that improved our product's overall direction.",
    bgColor: "bg-gradient-to-br from-purple-600 to-purple-700",
    accentColor: "text-purple-300"
  },
  {
    id: 4,
    name: "Emma Thompson",
    role: "Founder at DataFlow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    quote: "The level of professionalism and technical capability at Qourin is outstanding. They delivered complex features ahead of schedule.",
    subQuote: "Their team's ability to adapt to our changing needs while maintaining high quality was impressive.",
    bgColor: "bg-gradient-to-br from-teal-600 to-teal-700",
    accentColor: "text-teal-300"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="relative pt-4 pb-12 md:pt-8 md:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-6 md:mb-10">
          <div className="inline-block">
            <div className="flex items-center space-x-3 mb-2">
              <div className="h-[1px] w-8 bg-teal-600" />
              <span className="text-teal-600 uppercase tracking-wider text-sm font-light">Testimonials</span>
              <div className="h-[1px] w-8 bg-teal-600" />
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 font-light">Client Experience</h2>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="relative h-[450px] md:h-[320px]">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                currentIndex === index && (
                  <motion.div
                    key={testimonial.id}
                    className={`absolute inset-0 ${testimonial.bgColor} rounded-xl overflow-hidden shadow-lg`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div className="relative h-full">
                      {/* Background Pattern */}
                      <div className="absolute inset-0">
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.4),rgba(255,255,255,0))]" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                      </div>

                      <div className="relative h-full flex flex-col md:flex-row items-center p-8 md:p-12">
                        {/* Image and Quote Icon */}
                        <div className="relative mb-6 md:mb-0 md:mr-12">
                          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-white/20 shadow-xl">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className={`absolute -bottom-2 -right-2 p-2 rounded-full ${testimonial.bgColor} shadow-lg`}>
                            <Quote className={`w-4 h-4 ${testimonial.accentColor}`} />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center md:text-left">
                          <blockquote className="text-white text-xl md:text-2xl font-light mb-4 leading-relaxed">
                            "{testimonial.quote}"
                          </blockquote>
                          <p className={`${testimonial.accentColor} mb-6 leading-relaxed text-sm md:text-base`}>
                            {testimonial.subQuote}
                          </p>
                          <div className="text-white">
                            <div className="font-medium">{testimonial.name}</div>
                            <div className="text-white/80 text-sm">{testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
            <button 
              onClick={handlePrevious}
              className="pointer-events-auto p-2.5 rounded-full bg-white/90 text-gray-800 hover:bg-white shadow-lg transition-all hover:scale-105 -translate-x-1/2"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="pointer-events-auto p-2.5 rounded-full bg-white/90 text-gray-800 hover:bg-white shadow-lg transition-all hover:scale-105 translate-x-1/2"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'w-8 bg-teal-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 