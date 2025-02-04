import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import Testimonials from '../../components/Testimonials';
import OurWork from '../../components/OurWork';
import Contact from '../../components/Contact';

const workSteps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description: "We begin by understanding your vision and objectives, analyzing technical requirements, and planning the optimal AR/VR solution for your needs."
  },
  {
    number: "02",
    title: "UX Design",
    description: "Our team creates intuitive and immersive user experiences specifically designed for AR/VR environments, ensuring natural interactions and engagement."
  },
  {
    number: "03",
    title: "3D Modeling & Design",
    description: "We develop high-quality 3D models, environments, and assets optimized for AR/VR performance while maintaining visual fidelity."
  },
  {
    number: "04",
    title: "Development",
    description: "Our experts build your AR/VR application using cutting-edge technologies and frameworks, implementing interactive features and functionality."
  },
  {
    number: "05",
    title: "Testing & Optimization",
    description: "We conduct thorough testing across different devices and platforms, optimizing performance, comfort, and user experience."
  },
  {
    number: "06",
    title: "Deployment & Support",
    description: "We handle deployment across various platforms and provide ongoing support and updates to ensure your AR/VR solution remains cutting-edge."
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

const ARVRDevelopment = () => {
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
              AR/VR development services:{" "}
              <br className="hidden md:block" />
              Creating immersive digital realities
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
                We develop cutting-edge augmented and virtual reality solutions that transform how 
                users interact with digital content. Our AR/VR services combine technical expertise 
                with creative innovation to deliver immersive experiences that drive engagement and results.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2070&auto=format&fit=crop"
              alt="AR/VR Development" 
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
            {/* AR Applications */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    AR applications
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  We develop augmented reality applications that enhance real-world environments 
                  with digital content, creating interactive experiences for mobile devices, 
                  smart glasses, and enterprise AR solutions.
                </p>
              </div>
            </div>

            {/* VR Experiences */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    VR experiences
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  We create immersive virtual reality experiences that transport users to new 
                  environments, whether for training, entertainment, education, or virtual 
                  showrooms.
                </p>
              </div>
            </div>

            {/* Mixed Reality Solutions */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Mixed reality solutions
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  We develop mixed reality applications that blend virtual and physical worlds, 
                  creating interactive environments where digital and real objects coexist and 
                  interact in real time.
                </p>
              </div>
            </div>

            {/* 3D Modeling & Animation */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    3D modeling & animation
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  We create high-quality 3D models and animations optimized for AR/VR 
                  environments, ensuring realistic visuals while maintaining performance.
                </p>
              </div>
            </div>

            {/* Interactive Design */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Interactive design
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  We design intuitive interactions and user interfaces specifically for AR/VR 
                  environments, ensuring natural and engaging user experiences.
                </p>
              </div>
            </div>

            {/* Enterprise Integration */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Enterprise integration
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  We integrate AR/VR solutions with existing enterprise systems and workflows, 
                  ensuring seamless data flow and compatibility with your business processes.
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
              From concept to deployment, we follow a structured approach to deliver immersive 
              AR/VR solutions that push the boundaries of digital interaction.
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

export default ARVRDevelopment; 