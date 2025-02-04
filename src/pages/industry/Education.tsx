import { useState } from 'react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import Testimonials from '../../components/Testimonials';
import OurWork from '../../components/OurWork';
import Contact from '../../components/Contact';

const faqData = [
  {
    question: "What's different about Qourin education technology services?",
    answer: "We specialize in creating innovative educational technology solutions that enhance learning experiences. Our expertise spans from learning management systems to interactive educational platforms, ensuring engaging and effective digital learning environments."
  },
  {
    question: "How do you ensure data privacy in educational solutions?",
    answer: "We implement strict data protection measures compliant with FERPA and other educational privacy standards. Our solutions include secure user authentication, encrypted data storage, and controlled access management to protect student and institutional data."
  },
  {
    question: "Can you integrate with existing educational systems?",
    answer: "Yes, we have extensive experience integrating with major LMS platforms, student information systems, and other educational tools. We ensure seamless integration while maintaining data integrity and system performance."
  },
  {
    question: "Do you provide training and support for educational platforms?",
    answer: "Yes, we offer comprehensive training programs and ongoing support. This includes user documentation, admin training, technical support, and regular system updates to ensure optimal platform performance."
  }
];

const Education = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Hero Image and Overlay */}
        <div className="relative h-[82vh] w-full overflow-hidden">
          <img 
            src="/images/education.jpg"
            alt="Education Technology" 

            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/30" />

          {/* Content Card */}
          <div className="absolute top-[250px] inset-0 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
              <div className="ml-auto w-full md:w-1/2 lg:w-[45%] relative">
                {/* Main Card */}
                <div className="backdrop-blur-xl bg-white/30 p-8 md:p-12 rounded-lg border border-white/20 relative z-10">
                  <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
                    Education Technology
                  </h1>
                  <p className="text-lg text-white/90 font-light leading-relaxed">
                    At Qourin, innovation is in our DNA. We bring a wealth of expertise to help 
                    educational institutions embrace digital transformation, deliver engaging learning 
                    experiences, and shape the future of education.
                  </p>
                </div>
                {/* Diagonal Cut Overlay - Top */}
                <div className="absolute -top-6 -left-6 w-[200px] h-[100px] bg-white/20 backdrop-blur-lg 
                  rounded-lg transform -rotate-6 -z-0" />
                {/* Diagonal Cut Overlay - Bottom */}
                <div className="absolute -bottom-6 -right-6 w-[200px] h-[100px] bg-white/20 backdrop-blur-lg 
                  rounded-lg transform rotate-6 -z-0" />
                {/* Additional Design Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/40 rounded-full" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white/40 rounded-full" />
                <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 bg-white/30 rounded-full" />
                <div className="absolute top-1/2 -translate-y-1/2 -right-3 w-6 h-6 bg-white/30 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Get in Touch Button */}
        <div className="w-full bg-teal-700 hover:bg-teal-800 transition-colors">
          <div className="max-w-7xl mx-auto">
            <button className="w-full px-8 py-8 flex items-center justify-between text-white">
              <span className="text-xl font-light">Get in touch</span>
              <ArrowUpRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section - Empty */}
            <div></div>

            {/* Right Section - Content */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
                Our team operates at the intersection of education and technology to deliver 
                innovative solutions that enhance learning experiences and improve educational outcomes.
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                That's where we come in. Our edtech experts meet you wherever you are in your 
                journey, whether that means developing a new learning platform, implementing digital 
                assessment tools, or creating interactive educational content.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Education Solutions Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Title */}
          <div className="ml-auto w-[80%] mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900">
              Your education technology partner at every stage
            </h2>
          </div>

          {/* Solutions Grid */}
          <div className="ml-auto w-[80%]">
            {/* Solution 1 */}
            <div className="bg-emerald-600 p-12 text-white border-b border-white/10">
              <div className="flex items-start gap-8">
                <span className="text-2xl font-light opacity-80">01</span>
                <div className="space-y-6">
                  <h3 className="text-2xl font-light">Learning Management Systems</h3>
                  <p className="text-white/80 font-light leading-relaxed">
                    We develop customized LMS platforms that streamline course delivery, 
                    student engagement, and academic administration with intuitive interfaces.
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="bg-teal-700 p-12 text-white border-b border-white/10">
              <div className="flex items-start gap-8">
                <span className="text-2xl font-light opacity-80">02</span>
                <div className="space-y-6">
                  <h3 className="text-2xl font-light">Interactive Learning Tools</h3>
                  <p className="text-white/80 font-light leading-relaxed">
                    Create engaging digital learning experiences with interactive content, 
                    virtual labs, and collaborative tools that enhance student participation.
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="bg-blue-700 p-12 text-white">
              <div className="flex items-start gap-8">
                <span className="text-2xl font-light opacity-80">03</span>
                <div className="space-y-6">
                  <h3 className="text-2xl font-light">Educational Analytics</h3>
                  <p className="text-white/80 font-light leading-relaxed">
                    Implement comprehensive analytics systems to track student progress, 
                    measure learning outcomes, and provide data-driven insights for educators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Title */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900">
              FAQ
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            <div className="border-t border-gray-200 mb-8"></div>
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className={`bg-white transition-colors ${
                  activeIndex === index ? 'bg-gray-50' : ''
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <span className="text-xl text-gray-900 font-light">{faq.question}</span>
                  {activeIndex === index ? (
                    <Minus className="w-6 h-6 text-gray-400" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                <div 
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-gray-600 font-light">
                      {faq.answer}
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

export default Education; 