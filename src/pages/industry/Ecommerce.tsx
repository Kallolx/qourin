import { useState } from 'react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import Testimonials from '../../components/Testimonials';
import OurWork from '../../components/OurWork';
import Contact from '../../components/Contact';

const faqData = [
  {
    question: "What's different about Qourin e-commerce services?",
    answer: "We specialize in building scalable, high-performance e-commerce solutions that drive growth. Our expertise spans from custom marketplace development to headless commerce implementations, ensuring your platform can handle high traffic and complex transactions while delivering exceptional user experiences."
  },
  {
    question: "How do you handle e-commerce security and payments?",
    answer: "We implement industry-leading security measures and support multiple payment gateways. Our solutions comply with PCI DSS standards and include fraud prevention systems, secure checkout processes, and encrypted data transmission to protect both merchants and customers."
  },
  {
    question: "Can you integrate with existing e-commerce platforms?",
    answer: "Yes, we have extensive experience integrating with major e-commerce platforms like Shopify, WooCommerce, and Magento. We can also connect your platform with ERP systems, CRMs, and other business tools to create a seamless operational workflow."
  },
  {
    question: "Do you provide ongoing support for e-commerce platforms?",
    answer: "Yes, we offer comprehensive support including platform maintenance, performance optimization, security updates, and technical assistance. We also provide analytics and reporting tools to help you track and improve your e-commerce performance."
  }
];

const Ecommerce = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Hero Image and Overlay */}
        <div className="relative h-[82vh] w-full overflow-hidden">
          <img 
            src="/images/ecom.jpg"
            alt="E-commerce Technology" 
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
                    E-commerce Solutions
                  </h1>
                  <p className="text-lg text-white/90 font-light leading-relaxed">
                    At Qourin, innovation is in our DNA. We bring a wealth of expertise to help 
                    businesses build powerful e-commerce platforms, deliver exceptional shopping 
                    experiences, and drive digital growth.
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
                Our team operates at the intersection of commerce and technology to deliver 
                innovative solutions that help businesses thrive in the digital marketplace.
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                That's where we come in. Our e-commerce experts meet you wherever you are in your 
                journey, whether that means building a new online store, scaling your existing platform, 
                or optimizing your digital commerce operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* E-commerce Solutions Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Title */}
          <div className="ml-auto w-[80%] mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900">
              Your e-commerce partner at every stage
            </h2>
          </div>

          {/* Solutions Grid */}
          <div className="ml-auto w-[80%]">
            {/* Solution 1 */}
            <div className="bg-emerald-600 p-12 text-white border-b border-white/10">
              <div className="flex items-start gap-8">
                <span className="text-2xl font-light opacity-80">01</span>
                <div className="space-y-6">
                  <h3 className="text-2xl font-light">B2B & B2C marketplaces</h3>
                  <p className="text-white/80 font-light leading-relaxed">
                  Our specialists build digital storefronts tailored to the needs of you and your customers. We ensure a seamless shopping experience by leveraging UI testing and analytics-backed strategies so you attract and retain customers
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="bg-teal-700 p-12 text-white border-b border-white/10">
              <div className="flex items-start gap-8">
                <span className="text-2xl font-light opacity-80">02</span>
                <div className="space-y-6">
                  <h3 className="text-2xl font-light">Marketplace Development</h3>
                  <p className="text-white/80 font-light leading-relaxed">
                    Create powerful multi-vendor marketplaces with advanced features for 
                    sellers, buyers, and administrators, complete with secure payment processing.
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="bg-blue-700 p-12 text-white">
              <div className="flex items-start gap-8">
                <span className="text-2xl font-light opacity-80">03</span>
                <div className="space-y-6">
                  <h3 className="text-2xl font-light">E-commerce Analytics</h3>
                  <p className="text-white/80 font-light leading-relaxed">
                    Implement advanced analytics and reporting systems to track performance, 
                    understand customer behavior, and make data-driven business decisions.
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

export default Ecommerce; 