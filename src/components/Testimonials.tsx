import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop",
    name: "Benjamin Maisano",
    title: "CTO at Mount Sinai",
    quote: "Qourin has provided very talented engineers across web UI, mobile, backend APIs, and system designs, to data integrations and beyond.",
    subText: "Their staff integrated quickly and were dedicated to the internal teams throughout the relationship, acting as longterm partners in our strategic digital efforts."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    name: "David Chen",
    title: "CEO at TechFlow",
    quote: "The development team at Qourin consistently delivers high-quality solutions that exceed our expectations.",
    subText: "Their expertise in both frontend and backend development has been instrumental in scaling our platform to meet growing user demands."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2069&auto=format&fit=crop",
    name: "Sarah Williams",
    title: "Product Director at InnovateLabs",
    quote: "Working with Qourin has transformed how we approach software development and digital innovation.",
    subText: "Their team's dedication to quality and attention to detail has helped us launch several successful products ahead of schedule."
  },
  {
    id: 4,
    name: "Emma Thompson",
    title: "Founder at DataFlow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    quote: "The level of professionalism and technical capability at Qourin is outstanding. They delivered complex features ahead of schedule.",
    subText: "Their team's ability to adapt to our changing needs while maintaining high quality was impressive.",
    bgColor: "bg-gradient-to-br from-teal-600 to-teal-700",
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#00A45A] dark:bg-[#005A32] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-8 md:gap-16">
          {/* Left Column - Image and Info */}
          <div className="col-span-12 md:col-span-3">
            <div className="space-y-6">
              {/* Square Image with Animation */}
              <div className="aspect-square w-full overflow-hidden bg-white/10 dark:bg-black/10 relative">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img 
                    key={activeIndex}
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                  />
                </AnimatePresence>
              </div>
              
              {/* Name and Title */}
              <div className="space-y-2">
                <motion.h3 
                  key={`name-${activeIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl font-light"
                >
                  {testimonials[activeIndex].name}
                </motion.h3>
                <motion.p 
                  key={`title-${activeIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="text-white/80 dark:text-white/70 text-sm"
                >
                  {testimonials[activeIndex].title}
                </motion.p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-4 pt-4">
                <button 
                  onClick={handlePrev}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/30 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/30 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Quote */}
          <div className="col-span-12 md:col-span-9">
            <div className="h-full flex flex-col justify-center">
              {/* Main Quote */}
              <div className="space-y-8">
                <motion.p 
                  key={`quote-${activeIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-3xl md:text-4xl font-light leading-relaxed"
                >
                  "{testimonials[activeIndex].quote}"
                </motion.p>
                <motion.p 
                  key={`subtext-${activeIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-white/80 dark:text-white/70 text-lg font-light leading-relaxed"
                >
                  {testimonials[activeIndex].subText}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;