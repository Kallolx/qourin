import { Clock, Award, DollarSign, Users, Briefcase, Code } from 'lucide-react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import OurWork from '../components/OurWork';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Story content for each year
const storyContent: Record<string, string[]> = {
  2025: [
    "Qourin will evolved from a promising tech startup into a trusted partner for businesses of all scales.",
    "Qourin will remains committed to its roots in Bangladesh, actively supporting initiatives that drive digital literacy and entrepreneurship in underserved communities."
  ],
  2024: [
    "We Expand to LATAM with the opening of our London city office"
  ],
  2023: [
    "Founder Indra Prosad Roy the Qourin model with his own startup"
  ]
};
const AboutCompany = () => {
  const [activeYear, setActiveYear] = useState(2025);
  const years = [2025, 2024, 2023];

  const handleYearChange = (direction: 'next' | 'prev') => {
    const currentIndex = years.indexOf(activeYear);
    if (direction === 'next' && currentIndex < years.length - 1) {
      setActiveYear(years[currentIndex + 1]);
    } else if (direction === 'prev' && currentIndex > 0) {
      setActiveYear(years[currentIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative mt-8 md:mt-12">
        {/* Hero Image */}
        <div className="w-full h-[60vh] md:h-[80vh] relative">
          <img 
            src="/images/about.jpg"
            alt="Team collaboration" 
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Content Container */}
          <div className="absolute inset-0 flex items-end pb-[60px] md:pb-[72px]">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
              <div className="bg-white w-full md:w-[110%] ml-0 p-6 md:p-12 lg:p-16">
                <div className="grid grid-cols-12 gap-6 md:gap-12">
                  {/* Left Side - Title */}
                  <div className="col-span-12 md:col-span-6">
                    <h1 className="text-3xl md:text-4xl lg:text-[50px] font-light text-gray-900 leading-[1.2] md:leading-[1.1]">
                      World-class talent,<br />
                      worldwide
                    </h1>
                  </div>
                  
                  {/* Right Side - Description */}
                  <div className="col-span-12 md:col-span-6 md:pr-12 lg:pr-24">
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      We're Qourin, partner of forward-thinking tech leaders around the globe. For more than 20 years, 
                      we've equipped the world's fastest-growing companies with best-in-class engineering talent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Get in Touch Button */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="bg-teal-600 hover:bg-teal-700 transition-colors">
              <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="w-full md:w-[95%] ml-0">
                  <div className="flex items-center justify-between py-4 md:py-6 px-6 md:px-12 lg:px-16 cursor-pointer">
                    <span className="text-lg md:text-xl font-light text-white">Get in touch</span>
                    <div className="flex justify-end w-16 md:w-24">
                      <svg 
                        className="w-5 h-5 md:w-6 md:h-6 transform -rotate-45 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M14 5l7 7m0 0l-7 7m7-7H3" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="relative bg-gray-50 py-16 md:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-400 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-400 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-[1px] w-8 bg-teal-500" />
                <span className="text-teal-600 uppercase tracking-wider text-sm font-light">Our Impact</span>
                <div className="h-[1px] w-8 bg-teal-500" />
              </div>
              <h2 className="text-3xl md:text-4xl text-gray-900 font-light">Driving Success Through Numbers</h2>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: Clock, number: '20+', label: 'Years of Excellence', suffix: '' },
              { icon: Users, number: '500', label: 'Global Clients', suffix: '+' },
              { icon: Award, number: '95', label: 'Client Retention', suffix: '%' },
              { icon: Briefcase, number: '24', label: 'Support Available', suffix: '/7' },
              { icon: Code, number: '100', label: 'Expert Engineers', suffix: '+' },
              { icon: DollarSign, number: '50', label: 'Million Revenue', suffix: 'M+' }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6 md:p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <stat.icon className="w-5 h-5 text-teal-600" />
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-teal-500/50 to-transparent" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-4xl md:text-6xl text-gray-900 font-light tracking-tight group-hover:text-teal-600 transition-colors">{stat.number}</span>
                      <span className="text-xl md:text-2xl text-teal-600/80">{stat.suffix}</span>
                    </div>
                    <p className="text-sm text-gray-600 font-light">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Title */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-light mb-3 md:mb-4">Trusted by the best</h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg font-light max-w-3xl">
              Companies ranging from early-stage startups to Fortune 500 enterprises partner with us to develop game-changing growth solutions.
            </p>
          </div>

          {/* Company Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-0 border-t border-b border-gray-200">
            {[1, 2, 3, 4, 5].map((num, index) => (
              <div 
                key={num} 
                className={`flex items-center justify-center py-6 sm:py-8 md:py-10 lg:py-12 ${
                  index < 4 ? 'border-r' : ''
                } ${
                  index < 3 && index % 2 === 0 ? 'sm:border-r' : ''
                } ${
                  index < 2 ? 'border-b sm:border-b md:border-b-0' : ''
                } border-gray-200 group hover:bg-gray-50/50 transition-colors duration-300`}
              >
                <div className="px-4 md:px-6 w-full h-full flex items-center justify-center">
                  <img 
                    src={`/icons/${num}.png`} 
                    alt={`Partner company ${num}`} 
                    className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto opacity-70 hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 md:group-hover:scale-125"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet our Founder Section */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-light mb-8 md:mb-12">
            Meet our Founder
          </h2>

          <div className="border border-gray-200 bg-teal-600">
            <div className="p-6 md:p-12">
              {/* Name and Title - Moved to top */}
              <div className="mb-8 md:mb-12">
                <h3 className="text-xl md:text-2xl text-white font-light mb-1">Indra Prosad Roy</h3>
                <p className="text-teal-100 text-sm md:text-base">Founder & CEO</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                {/* Left Side - Image */}
                <div className="col-span-1 md:col-span-4">
                  <img 
                    src="/icons/ceo.png" 
                    alt="Indra Prosad Roy" 
                    className="w-full aspect-[3/4] object-cover rounded-sm"
                  />
                </div>

                {/* Right Side - Content */}
                <div className="col-span-1 md:col-span-8">
                  {/* Description Paragraphs */}
                  <div className="space-y-12">
                    <p className="text-teal-50 text-md md:text-base leading-relaxed max-w-2xl">
                      Based in Bangladesh with a background in software engineering, he focuses on 
                      applying software solutions to help scale disruptive start-ups and fast-growing 
                      companies worldwide. In addition to leading the strategic vision for Qourin service 
                      provision model, he is passionate about investing in and partnering with early-stage 
                      tech companies.
                    </p>
                    <p className="text-teal-50 text-md md:text-base leading-relaxed max-w-xl ml-auto">
                      Indra Prosad Roy is an investor of QMOS Technology — and in 2023 co-founded 
                      Qourin, a company focused on funding and growing mobile app 
                      and AI companies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Our Story Section */}
     <section className="py-16 md:py-24 lg:py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-light mb-16 md:mb-24">
            Our story
          </h2>

          <div className="relative">
            {/* Years Display */}
            <div className="flex items-center mb-24 md:mb-32">
              <div className="w-full border-t border-b border-gray-200 py-8 md:py-12">
                <div className="flex items-center justify-start">
                  {years.map((year, index) => (
                    <div key={year} className="flex items-center">
                      <span 
                        className={`text-6xl md:text-7xl lg:text-8xl font-light transition-colors duration-300 ${
                          year === activeYear ? 'text-teal-600' : 'text-gray-200'
                        }`}
                      >
                        {year}
                      </span>
                      {index < years.length - 1 && (
                        <div className="h-16 w-[1px] bg-gray-200 mx-12 md:mx-16" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation and Content */}
            <div className="grid grid-cols-12 gap-0">
              {/* Navigation Arrows with Right Border */}
              <div className="col-span-3 md:col-span-2 pr-12 md:pr-16 border-r border-gray-200">
                <div className="flex items-center space-x-6">
                  <button 
                    onClick={() => handleYearChange('prev')}
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeYear === years[0] 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-white text-teal-600 hover:bg-teal-50 border-2 border-gray-200 hover:border-teal-200'
                    }`}
                    disabled={activeYear === years[0]}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => handleYearChange('next')}
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeYear === years[years.length - 1] 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-teal-600 text-white hover:bg-teal-700 shadow-sm'
                    }`}
                    disabled={activeYear === years[years.length - 1]}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content with Left Padding */}
              <div className="col-span-9 md:col-span-10 pl-12 md:pl-16">
                <div className="space-y-12 transition-all duration-300">
                  {storyContent[activeYear.toString()].map((text) => (
                    <p key={text} className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who are we Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Top Section - Who are We and Our Culture side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 border-b border-gray-200 pb-16 md:pb-24">
            {/* Who are We */}
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-light">
                Who are we?
              </h2>
              <div className="aspect-[4/3] w-full">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Our Culture */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-light mb-6">
                  Our culture
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                  Qourin is a worldwide team of engineers and innovators, who partner 
                  with clients to transform entire industries. Our dedication and technical 
                  skill sets us apart as a true partner, capable of taking a company's vision 
                  from inception, all the way through to IPO, and even define new industry best practices.
                </p>
              </div>
              <div className="aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop" 
                  alt="Our culture" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pt-16 md:pt-24">
            {/* What drives us */}
            <div className="space-y-8">
              <div className="aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2940&auto=format&fit=crop" 
                  alt="Innovation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl text-gray-900 font-light mb-4">
                  What drives us?
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  We seek to provide technology leaders with the tools they need to 
                  accelerate their roadmap, move faster and more efficiently, and ultimately scale 
                  their operation to new heights.
                </p>
              </div>
            </div>

            {/* What makes us work */}
            <div className="space-y-8">
              <div className="aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop" 
                  alt="Collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl text-gray-900 font-light mb-4">
                  What makes us work?
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Our passion defines how much we believe in the software we deliver. We 
                  are proud to leverage our 15 years of expertise and vision to help innovators make their ideas into 
                  tangible products that improve users' lives and transform industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <OurWork />
      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutCompany; 