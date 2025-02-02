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


const SoftwareDevelopment = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 md:pt-24">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200" />

          {/* Title Section */}
          <div className="border-b-2 border-gray-200">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 max-w-4xl pl-8 pb-6">
              Software{" "}
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
                Vention is more than just a provider of software development services: 
                our engineers will become an integral part of your business, for as long 
                as you need them. The software engineering expertise we provide is synonymous 
                with security, exceptional performance, user-centricity, and scalability.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Software Development Team" 
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
            {/* Software Development Consulting */}
            <div className="grid grid-cols-12 gap-8 py-12">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Software development consulting
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  We dive deep into your organization's unique requirements, and every solution is 
                  designed to reflect and incorporate your specific business needs. We explore the 
                  user journey, from concept definition to risk assessment and competitor analysis, 
                  and then build accordingly.
                </p>
                <p>
                  Moreover, our team provides expert insights into the selection of the most suitable 
                  technology stack, offering a <span className="border-b border-teal-200">detailed assessment</span> of technology pros and cons to 
                  kickstart your software development project on the right path.
                </p>
              </div>
            </div>

            {/* Custom Software Development */}
            <div className="grid grid-cols-12 gap-8 py-12">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Custom software development
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  For us, <span className="border-b border-teal-200">custom software development</span> is all about creating perfect, scalable and 
                  one-of-a-kind solutions, including <span className="border-b border-teal-200">web</span> or <span className="border-b border-teal-200">mobile</span> software products that align 
                  perfectly with your unique business vision and company culture, or even cater to 
                  your individual needs.
                </p>
                <p>
                  When off-the-shelf solutions fall short, you can stay connected with your customers 
                  and address any in-house challenges that may arise along your business journey. 
                  Your success is our custom-tailored mission.
                </p>
              </div>
            </div>

            {/* Software Product Development */}
            <div className="grid grid-cols-12 gap-8 py-12">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Software product development
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  Software product development demands commitment and attention to detail, 
                  starting with the initial stages of prototyping and design to product development, 
                  testing, deployment, and support. But it doesn't stop there.
                </p>
                <p>
                  Our dedication extends through the entire lifecycle of software product 
                  development, encompassing rigorous testing, seamless deployment, and post-
                  launch support.
                </p>
                <p>
                  It's all about creating an exceptional product experience by way of a 
                  comprehensive customized approach.
                </p>
              </div>
            </div>

            {/* Software Enhancement */}
            <div className="grid grid-cols-12 gap-8 py-12">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Software enhancement
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  To make your software competitive on the market, our development services 
                  include fine-tuning your solutions and optimizing them with advanced technologies 
                  like <span className="border-b border-teal-200">AI</span>, <span className="border-b border-teal-200">AR/VR</span>, <span className="border-b border-teal-200">blockchain</span>, and <span className="border-b border-teal-200">IoT</span>.
                </p>
                <p>
                  We can also refine UI/UX for greater intuitiveness, strengthen security, and identify 
                  and fix bugs faster, not to mention accelerate speed and responsiveness and 
                  assure compatibility across various operating systems and devices.
                </p>
              </div>
            </div>

            {/* Software Integration Services */}
            <div className="grid grid-cols-12 gap-8 py-12">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Software integration services
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  We're experts in <span className="border-b border-teal-200">API development</span> and integration of third-party services such as 
                  CRM, payment systems, ERP, DMS, and EHR.
                </p>
                <p>
                  But our work goes beyond these: we cater to a wide array of technological needs 
                  aligned with your goals, preferences, business needs, tech stack, or industry.
                </p>
                <p>
                  We employ cutting-edge industry best practices to tackle all your implementation 
                  and software integration hurdles, from the architectural design phase to post-
                  launch.
                </p>
                <p>
                  With us you can expect a smooth transition to updated systems and optimized 
                  performance — a surefire way to maximize ROI.
                </p>
              </div>
            </div>

            {/* Software Modernization */}
            <div className="grid grid-cols-12 gap-8 py-12">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Software modernization
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  We guarantee <span className="border-b border-teal-200">effective updates to existing solutions</span> as well as sound architectural 
                  improvements.
                </p>
                <p>
                  Initially, we conduct an evaluation of your software by analyzing all relevant 
                  documents and reviewing code. Then, our team identifies crucial points for the 
                  modernization process.
                </p>
                <p>
                  From code refactoring to cloud migration, we craft the optimal strategy tailored to 
                  your needs. We guarantee a seamless modernization of your system, all while 
                  preserving the core essence of the original software. And, if you'd prefer to use 
                  tried-and-true Agile and DevOps methodologies, we're right there with you.
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
              From day one, we work to become your most valuable software development partner. Our rigorous approach makes it possible for us to deliver just what you need, at the pace that you need it.
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

export default SoftwareDevelopment; 