import { ArrowUpRight } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import OurWork from '../components/OurWork';
import Contact from '../components/Contact';

const visionBlocks = [
  {
    id: "01",
    title: "Innovation through Collaboration",
    description: "At Qourin, we believe that collaboration is key to innovation. Our team works closely with industry partners, academic institutions, and research organizations to develop groundbreaking solutions that address real-world challenges.",
    bgColor: "bg-emerald-600"
  },
  {
    id: "02",
    title: "Sustainable Solutions",
    description: "We recognize the importance of sustainable technology and are dedicated to developing solutions that not only solve today's problems but also contribute to a more sustainable and efficient future.",
    bgColor: "bg-teal-700"
  },
  {
    id: "03",
    title: "Our Achievements",
    description: "• Successfully developed and launched multiple pioneering projects\n• Established collaborative ventures with key industry partners\n• Multiple patents and publications in leading research journals\n• Achieved industry recognition for innovative solutions",
    bgColor: "bg-teal-800"
  },
  {
    id: "04",
    title: "Looking Ahead",
    description: "Our vision of innovation is just beginning. We're constantly exploring new & innovative technologies and methodologies to develop solutions that will shape the future of technology and drive positive change.",
    bgColor: "bg-teal-900"
  }
];

const ResearchAndDevelopment = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Hero Image and Overlay */}
        <div className="relative h-[82vh] w-full overflow-hidden">
          <img 
            src="/images/research.png"
            alt="Research and Development" 
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
                    Research & Development
                  </h1>
                  <p className="text-lg text-white/90 font-light leading-relaxed">
                    At Qourin, we're at the forefront of technological innovation. Our R&D team 
                    drives breakthrough discoveries, pioneering solutions that shape the future of 
                    technology and set new industry standards.
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

      {/* Vision Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900">Our Vision</h2>
            <p className="mt-4 text-lg text-gray-600 font-light max-w-3xl mx-auto">
              Guided by unique vision to revolutionize by bringing to life all that we dream and 
              imagine with innovation. Our goal is to make a lasting impact by continuously driving 
              technological advancements that will serve customers and individuals alike.
            </p>
          </div>

          {/* Vision Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
            {visionBlocks.map((block) => (
              <div key={block.id} className={`${block.bgColor} p-12 text-white`}>
                <div className="space-y-6">
                  <div className="flex items-start gap-6">
                    <span className="text-2xl font-light opacity-80">{block.id}</span>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-light">{block.title}</h3>
                      <p className="text-white/80 font-light leading-relaxed whitespace-pre-line">
                        {block.description}
                      </p>
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

export default ResearchAndDevelopment; 