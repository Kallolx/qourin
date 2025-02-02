import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import Testimonials from '../../components/Testimonials';
import OurWork from '../../components/OurWork';
import Contact from '../../components/Contact';

const workSteps = [
  {
    number: "01",
    title: "Discovery and analysis",
    description: "Working closely with you, our team engages in a collaborative process to articulate the desired outcome of your software. This results in a comprehensive and well-defined project scope with prioritized requirements."
  },
  {
    number: "02",
    title: "UX/UI Design",
    description: "Our design team creates intuitive and engaging user interfaces that perfectly balance aesthetics and functionality, ensuring an optimal user experience."
  },
  {
    number: "03",
    title: "Development",
    description: "Using agile methodologies, our developers write clean, efficient code while maintaining constant communication to ensure alignment with your vision."
  },
  {
    number: "04",
    title: "Feedback and testing",
    description: "Rigorous testing and your feedback help us refine the solution, ensuring it meets all requirements and quality standards."
  },
  {
    number: "05",
    title: "Release",
    description: "We carefully manage the deployment process to ensure a smooth transition to production, with minimal disruption to your operations."
  },
  {
    number: "06",
    title: "Refinement",
    description: "Post-launch, we continue to monitor, maintain, and enhance the solution based on real-world usage and your evolving needs."
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

const WebDevelopment = () => {
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 max-w-4xl pl-8 pb-12">
              Web app{" "}
              <br className="hidden md:block" />
              development services
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
                We specialize in creating modern, responsive web applications that deliver exceptional user experiences. 
                Our web development services combine cutting-edge technologies with best practices to build scalable, 
                secure, and high-performance solutions that drive your business forward.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
              alt="Web Development" 
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
            {/* UI/UX Design */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    UI/UX design
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  Our dedicated UI/UX professionals create visually compelling web app experiences 
                  that are streamlined and engaging so they attract and retain users.
                </p>
              </div>
            </div>

            {/* Frontend Development */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Frontend development
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  Working in tandem with UI/UX teams, our devs rely on both mainstream and 
                  specialized technologies to ensure that your app's frontend is intuitive and 
                  expressive — and that it reflects your brand.
                </p>
              </div>
            </div>

            {/* Backend Development */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Backend development
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  Whether the web app is on-premise, cloud-based, or serverless, our server-level 
                  developers build secure and scalable backend solutions that deliver powerful data 
                  processing.
                </p>
              </div>
            </div>

            {/* Integration Services */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Integration services
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  We build and implement a range of customized business-critical integrations that 
                  simultaneously enhance your web app's functionality and respond to evolving 
                  customer demands.
                </p>
              </div>
            </div>

            {/* QA and Testing */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    QA and testing
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  Robust testing isn't a standalone activity, but rather one that applies across every 
                  stage of the development cycle and ensures that your app performs optimally at any 
                  given moment.
                </p>
              </div>
            </div>

            {/* Modernization and Refinement */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Modernization and refinement
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  Our team can upgrade your legacy application to make it more efficient and rewrite 
                  legacy on scalable resources that can be maintained between other service-
                  providing modules.
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
              From day one, we work to become your most valuable web development partner. Our rigorous approach makes it possible for us to deliver just what you need, at the pace that you need it.
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

export default WebDevelopment;
