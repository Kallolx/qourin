import { useState } from 'react';
import { motion } from 'framer-motion';

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
    description: "Next, we work with you to strategically assemble a team with the precise skills needed to deliver on that vision — and we do it fast. You'll have resumes in hand for review within 48 hours",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "Kickoff",
    description: "Next, we work with you to strategically assemble a team with the precise skills needed to deliver on that vision — and we do it fast. You'll have resumes in hand for review within 48 hours",
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
    <section className="relative bg-white dark:bg-gray-900 py-8 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Split - Image Section */}
        <div className="relative h-[300px] md:h-[400px] mb-8 md:mb-12">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={steps[activeStep].image} 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Overlay Grid */}
          <div className="relative h-full grid grid-cols-1 md:grid-cols-2">
            {/* Left Side */}
            <div className="relative hidden md:block">
              {/* This div creates the white overlay effect */}
              <div className="absolute bottom-0 right-0 w-1/3 h-full bg-white dark:bg-gray-900 transform skew-x-12 translate-x-1/2" />
            </div>
            
            {/* Right Side */}
            <div className="relative flex items-center justify-center">
              <div className="bg-white/90 dark:bg-gray-900/90 md:bg-white dark:md:bg-gray-900 py-6 px-8 md:py-8 md:px-12 transform md:-translate-x-1/4 w-full md:w-auto">
                <div className="flex items-center justify-center space-x-3 mb-2 md:mb-3">
                  <div className="h-[1px] w-6 md:w-8 bg-teal-600" />
                  <span className="text-teal-600 uppercase tracking-wider text-xs md:text-sm font-light">Process</span>
                  <div className="h-[1px] w-6 md:w-8 bg-teal-600" />
                </div>
                <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-white font-light text-center">How we work</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Split - Text & Description Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={`cursor-pointer transition-all duration-500 ease-in-out relative group ${
                activeStep === index ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div className="p-4 md:p-6">
                <div className="flex items-baseline gap-2 md:gap-3 mb-3 md:mb-4">
                  <span className={`text-xl md:text-2xl font-light transition-colors duration-500 ease-in-out ${
                    activeStep === index ? 'text-teal-600' : 'text-gray-400 dark:text-gray-600'
                  }`}>
                    {step.number}
                  </span>
                  <h3 className={`text-lg md:text-xl font-light transition-colors duration-500 ease-in-out ${
                    activeStep === index ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {step.title}
                  </h3>
                </div>
                <motion.div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    index <= activeStep ? 'h-auto opacity-100' : 'h-0 group-hover:h-auto opacity-0 group-hover:opacity-100'
                  }`}
                  initial={false}
                >
                  <p className={`text-sm leading-relaxed transition-colors duration-500 ease-in-out ${
                    activeStep === index ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500 dark:text-gray-500'
                  }`}>
                    {step.description}
                  </p>
                </motion.div>
              </div>
              {/* Active Indicator */}
              <motion.div 
                className="h-1 bg-teal-500 absolute bottom-0 left-0 right-0"
                initial={{ scaleX: 0 }}
                animate={{ 
                  scaleX: activeStep === index ? 1 : 0
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork; 