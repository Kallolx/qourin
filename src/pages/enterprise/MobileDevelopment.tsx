import { ArrowUpRight } from 'lucide-react';
import Testimonials from '../../components/Testimonials';
import OurWork from '../../components/OurWork';
import Contact from '../../components/Contact';

const MobileDevelopment = () => {
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
              Mobile app{" "}
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
                We specialize in creating innovative mobile applications that transform ideas into 
                powerful digital solutions. Our mobile development services combine cutting-edge 
                technologies with user-centric design to deliver exceptional mobile experiences.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
              alt="Mobile Development" 
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
            {/* Mobile Technology Consulting */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Mobile technology consulting
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  Armed with sophisticated awareness of the established players and rising stars in 
                  your app category, our mobile app development experts help you refine your 
                  concept and nail down a stand-out go-to-market strategy.
                </p>
              </div>
            </div>

            {/* UI and UX Design */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    UI and UX design
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  With mobile apps, nothing spells doom quite like poor UI and UX design. We build 
                  apps that are visually engaging and offer users a friction-free experience.
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
                  Whether the web app is on-premise, cloud-based, or serverless, our senior-level 
                  developers build secure and scalable backend solutions that deliver powerful data 
                  processing.
                </p>
              </div>
            </div>

            {/* Release Support */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Release support
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  With Vention, mobile app development services include monitoring for bugs and 
                  keeping an eye on install rates.
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

            {/* Ongoing Enhancement */}
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 group">
                  <h3 className="text-2xl font-light group-hover:text-teal-200 transition-colors">
                    Ongoing enhancement
                  </h3>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-teal-200" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-teal-50/90 space-y-6">
                <p>
                  As your app gains traction in the app stores, and as you contemplate new 
                  features, your criteria for success will evolve. Our mobile dev engineers are on 
                  standby to scale, iterate, and optimise your mobile app as the reviews pour in 
                  and its user base grows.
                </p>
              </div>
            </div>
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

export default MobileDevelopment;
