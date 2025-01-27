import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start with your vision: What do you want to build? How can we accelerate your company's growth to outpace the competition?",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "Staffing",
    description: "Next, we work with you to strategically assemble a team with the precise skills needed to deliver on that vision — and we do it fast. You’ll have resumes in hand for review within 48 hours",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "Kickoff",
    description: "Next, we work with you to strategically assemble a team with the precise skills needed to deliver on that vision — and we do it fast. You’ll have resumes in hand for review within 48 hours",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: "04",
    title: "Ramp up",
    description: "We quickly scale development while maintaining quality, using proven methodologies to accelerate your project timeline.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  }
];

const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block">
            <div className="flex items-center space-x-3 mb-3">
              <div className="h-[1px] w-8 bg-teal-600" />
              <span className="text-teal-600 uppercase tracking-wider text-sm font-light">Process</span>
              <div className="h-[1px] w-8 bg-teal-600" />
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 font-light">How we work</h2>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              className="group relative bg-white cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setActiveStep(index)}
              layout
            >
              {/* Card Image Container */}
              <motion.div 
                className="relative overflow-hidden"
                animate={{
                  height: activeStep === index ? '240px' : '200px'
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.img 
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: activeStep === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.5 }}
                />
                <div className={`absolute inset-0 transition-opacity duration-300 ${
                  activeStep === index 
                    ? 'bg-gradient-to-b from-transparent via-black/40 to-black/80' 
                    : 'bg-gradient-to-b from-transparent to-black/70'
                }`} />

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  {/* Number and Title Container */}
                  <motion.div 
                    className="flex items-baseline gap-3"
                    animate={{
                      y: activeStep === index ? -20 : 0,
                      opacity: activeStep === index ? 0 : 1
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-2xl text-white/90 font-light">{step.number}</span>
                    <h3 className="text-xl text-white font-light">{step.title}</h3>
                  </motion.div>
                </div>
              </motion.div>

              {/* Expanded Content */}
              <AnimatePresence>
                {activeStep === index && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-b from-black/80 to-black flex items-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className="flex items-baseline gap-3 mb-3">
                          <span className="text-2xl text-teal-400 font-light">{step.number}</span>
                          <h3 className="text-xl text-white font-light">{step.title}</h3>
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hover Indicator */}
              <motion.div 
                className="absolute inset-x-0 bottom-0 h-1 bg-teal-500"
                initial={{ scaleX: 0 }}
                animate={{ 
                  scaleX: activeStep === index ? 1 : 0,
                  opacity: activeStep === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork; 