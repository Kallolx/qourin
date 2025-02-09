import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import Testimonials from '../../components/Testimonials';
import OurWork from '../../components/OurWork';
import Contact from '../../components/Contact';

const workSteps = [
  {
    number: "01",
    title: "Discovery and Analysis",
    description: "We begin by understanding your business needs and identifying opportunities where AI can create the most value. This includes data assessment and feasibility studies."
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Our team develops a comprehensive AI implementation strategy, selecting the most suitable technologies and establishing clear objectives and timelines."
  },
  {
    number: "03",
    title: "Data Preparation",
    description: "We prepare and process your data, ensuring it's clean, structured, and ready for AI model training while maintaining strict data security protocols."
  },
  {
    number: "04",
    title: "Model Development",
    description: "Our experts develop and train custom AI models using cutting-edge techniques in machine learning, deep learning, and natural language processing."
  },
  {
    number: "05",
    title: "Integration and Testing",
    description: "We integrate the AI solutions into your existing systems and conduct thorough testing to ensure optimal performance and reliability."
  },
  {
    number: "06",
    title: "Deployment and Optimization",
    description: "Post-deployment, we continuously monitor, maintain, and optimize your AI solutions to ensure they deliver maximum value and adapt to changing needs."
  }
];

const cardColors = [
  'bg-teal-700',
  'bg-blue-700',
  'bg-gray-700',
  'bg-purple-700',
  'bg-teal-900',
  'bg-green-700'
];

const ArtificialIntelligence = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-16">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200" />

          {/* Title Section */}
          <div className="border-b-2 border-gray-200">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-gray-900 max-w-4xl pl-4 md:pl-8 pb-8 md:pb-12">
              Artificial Intelligence{" "}
              <br className="hidden md:block" />
              Development Services
            </h1>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 md:py-12">
            {/* Left Section - Empty */}
            <div className="hidden md:block md:col-span-5"></div>

            {/* Right Section - Description */}
            <div className="col-span-1 md:col-span-7">
              <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
                We specialize in developing cutting-edge AI solutions that transform businesses. 
                Our expertise spans machine learning, deep learning, and natural language processing, 
                helping organizations harness the power of artificial intelligence to drive innovation 
                and growth.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-[16/9] w-full overflow-hidden mt-4 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
              alt="Artificial Intelligence" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-teal-700 text-white mt-8 md:mt-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-12 md:mb-16 text-center">
            Services we provide
          </h2>

          {/* Services Grid */}
          <div className="space-y-0 divide-y-2 divide-teal-500">
            {workSteps.map((step, index) => (
              <div key={step.number} className="py-8 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                  <div className="col-span-1 md:col-span-4">
                    <div className="flex items-center gap-3 group">
                      <h3 className="text-xl md:text-2xl font-light group-hover:text-teal-200 transition-colors">
                        {step.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-8 text-teal-50/90">
                    <p className="text-sm md:text-base font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
          {/* Section Title */}
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6">
              How we work
            </h2>
            <p className="text-base md:text-lg text-gray-600 font-light">
              From initial analysis to deployment and optimization, we follow a structured approach 
              to deliver AI solutions that exceed expectations.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-0 divide-y divide-gray-200">
            {workSteps.map((step, index) => (
              <div 
                key={step.number}
                className={`cursor-pointer group transition-all duration-500 ${
                  activeStep === index ? cardColors[index] : 'hover:bg-gray-50'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 items-start">
                  {/* Number */}
                  <div className="col-span-1 md:col-span-3 py-8 md:py-12 px-4 md:pl-12">
                    <span className={`text-5xl md:text-7xl lg:text-8xl font-light transition-colors duration-500 ${
                      activeStep === index ? 'text-white' : 'text-gray-200'
                    }`}>
                      {step.number}
                    </span>
                  </div>

                  {/* Empty Gap Column */}
                  <div className="hidden md:block md:col-span-2"></div>

                  {/* Title and Description */}
                  <div className="col-span-1 md:col-span-7 py-4 md:py-12 px-4 md:pr-12">
                    <div className="max-w-xl ml-0 md:ml-auto">
                      <h3 className={`text-lg md:text-xl font-light mb-4 md:mb-6 transition-colors duration-500 ${
                        activeStep === index ? 'text-white' : 'text-gray-900'
                      }`}>
                        {step.title}
                      </h3>
                      <div 
                        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                          activeStep === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className={`text-sm md:text-base leading-relaxed transition-colors duration-500 ${
                            activeStep === index ? 'text-white/90' : 'text-gray-600'
                          }`}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Our Work Section */}
      <OurWork />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default ArtificialIntelligence; 