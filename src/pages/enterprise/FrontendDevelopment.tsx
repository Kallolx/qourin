import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import Testimonials from '../../components/Testimonials';
import OurWork from '../../components/OurWork';
import Contact from '../../components/Contact';

const workSteps = [
  {
    number: "01",
    title: "Requirements Gathering",
    description: "We start by understanding your vision, user needs, and business goals to create a comprehensive plan for your frontend development project."
  },
  {
    number: "02",
    title: "UI/UX Design",
    description: "Our designers create intuitive and engaging user interfaces that balance aesthetics with functionality while ensuring an optimal user experience."
  },
  {
    number: "03",
    title: "Architecture Planning",
    description: "We design a scalable frontend architecture using modern frameworks and best practices to ensure maintainability and performance."
  },
  {
    number: "04",
    title: "Development",
    description: "Our frontend experts build responsive, interactive interfaces using cutting-edge technologies while following clean code practices."
  },
  {
    number: "05",
    title: "Testing & QA",
    description: "We conduct thorough testing across devices and browsers to ensure consistent performance and bug-free user experiences."
  },
  {
    number: "06",
    title: "Optimization & Launch",
    description: "Final optimizations for performance, accessibility, and SEO before launch, followed by continuous monitoring and support."
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

const FrontendDevelopment = () => {
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
              Frontend development services:{" "}
              <br className="hidden md:block" />
              Crafting exceptional user experiences
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
                We create engaging, responsive, and high-performance user interfaces that captivate 
                your audience. Our frontend development services combine modern technologies with 
                user-centric design to deliver exceptional digital experiences.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
              alt="Frontend Development" 
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
            {/* Modern Web Applications */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Modern web applications
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  We build modern, responsive web applications using React, Vue, and other cutting-edge 
                  frameworks, ensuring optimal performance and exceptional user experiences across all devices.
                </p>
              </div>
            </div>

            {/* Responsive Design */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Responsive design
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  Our responsive design approach ensures your applications look and function perfectly 
                  across all screen sizes and devices, providing a consistent user experience.
                </p>
              </div>
            </div>

            {/* UI/UX Implementation */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    UI/UX implementation
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  We transform design concepts into pixel-perfect, interactive interfaces while 
                  maintaining focus on usability, accessibility, and user experience best practices.
                </p>
              </div>
            </div>

            {/* Performance Optimization */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Performance optimization
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  We optimize frontend performance through efficient code, asset optimization, 
                  caching strategies, and modern build tools to ensure fast loading times and 
                  smooth interactions.
                </p>
              </div>
            </div>

            {/* Progressive Web Apps */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Progressive web apps
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  We develop Progressive Web Apps (PWAs) that combine the best of web and mobile 
                  applications, offering offline functionality, push notifications, and app-like 
                  experiences.
                </p>
              </div>
            </div>

            {/* Frontend Testing */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Frontend testing
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  We implement comprehensive testing strategies including unit tests, integration 
                  tests, and end-to-end testing to ensure reliable and bug-free frontend applications.
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
              From concept to deployment, we follow a structured approach to deliver frontend 
              solutions that exceed expectations and create lasting user experiences.
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

export default FrontendDevelopment; 