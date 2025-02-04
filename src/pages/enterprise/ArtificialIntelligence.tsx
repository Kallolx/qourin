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
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 md:pt-24">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200" />

          {/* Title Section */}
          <div className="border-b-2 border-gray-200">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 max-w-8xl pl-16 pb-12">
            Artificial intelligence software development:{" "}
              <br className="hidden md:block" />
              Where innovation drives real-world results
            </h1>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-12 gap-8 py-12">
            {/* Left Section - Empty */}
            <div className="col-span-12 md:col-span-5">
            </div>

            {/* Right Section - Description */}
            <div className="col-span-12 md:col-span-7">
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                We help organizations harness the power of artificial intelligence to drive innovation 
                and create competitive advantages. Our AI services combine cutting-edge technology 
                with practical business applications to deliver transformative solutions.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
              alt="Artificial Intelligence" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">
            Services we provide
          </h2>

          {/* Services Grid */}
          <div className="space-y-0 divide-y-2 divide-teal-500">
            {/* Machine Learning Solutions */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Machine learning solutions
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  We develop custom machine learning models that can analyze complex data patterns, 
                  make accurate predictions, and automate decision-making processes to improve 
                  operational efficiency and drive business growth.
                </p>
              </div>
            </div>

            {/* Natural Language Processing */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Natural language processing
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  Our NLP solutions enable computers to understand, interpret, and generate human 
                  language, powering applications like chatbots, sentiment analysis, and automated 
                  content generation.
                </p>
              </div>
            </div>

            {/* Computer Vision */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Computer vision
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  We build advanced computer vision systems that can analyze and understand visual 
                  information from images and videos, enabling applications like object detection, 
                  facial recognition, and quality control automation.
                </p>
              </div>
            </div>

            {/* Predictive Analytics */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Predictive analytics
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  Our predictive analytics solutions use historical data and machine learning to forecast 
                  future trends, identify potential risks, and uncover new opportunities for business 
                  growth.
                </p>
              </div>
            </div>

            {/* AI Consulting */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    AI consulting
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  We provide strategic guidance on AI adoption, helping organizations identify the 
                  right opportunities, choose appropriate technologies, and develop implementation 
                  roadmaps.
                </p>
              </div>
            </div>

            {/* AI Integration */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    AI integration
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  We seamlessly integrate AI solutions into existing systems and workflows, ensuring 
                  smooth adoption and maximum value from your AI investments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          {/* Section Title */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              How we work
            </h2>
            <p className="text-gray-600">
              From initial assessment to deployment and optimization, we follow a structured approach 
              to implement AI solutions that deliver real business value.
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
                <div className="grid grid-cols-12 items-start">
                  {/* Number */}
                  <div className="col-span-4 md:col-span-3 py-12 pl-12">
                    <span className={`text-7xl md:text-8xl font-light transition-colors duration-500 ${
                      activeStep === index ? 'text-white' : 'text-gray-200'
                    }`}>
                      {step.number}
                    </span>
                  </div>

                  {/* Empty Gap Column */}
                  <div className="hidden md:block col-span-2"></div>

                  {/* Title and Description */}
                  <div className="col-span-8 md:col-span-7 py-12 pr-12">
                    <div className="max-w-xl ml-auto">
                      <h3 className={`text-xl font-light mb-6 transition-colors duration-500 ${
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
                          <p className={`text-base leading-relaxed transition-colors duration-500 ${
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