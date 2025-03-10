import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 1,
    category: "Fitness & Wellness",
    title: "ndeavorhealth",
    description: "A boutique fitness membership app, ndeavorhealth provides access to in-studio workouts, beauty and wellness appointments, and on-demand exercise classes.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    link: "https://ndeavourhealth.com"
  },
  {
    id: 2,
    category: "Food & Beverage",
    title: "wholey",
    description: "An innovative food delivery platform focusing on healthy, sustainable meal options with real-time order tracking and dietary preference matching.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
    link: "https://wholey.com"
  },
  {
    id: 3,
    category: "Fintech",
    title: "Argyle",
    description: "A modern financial platform that streamlines payment processing and provides advanced analytics for business intelligence.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    link: "https://argyle.com"
  },
  {
    id: 4,
    category: "Healthtech",
    title: "healthtechsolutions",
    description: "An integrated healthcare management system that connects patients with providers and streamlines medical record management.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    link: "https://healthtechsolutions.com"
  },
  {
    id: 5,
    category: "E-commerce",
    title: "Allbirds",
    description: "A sustainable fashion e-commerce platform with advanced product customization and eco-friendly shipping options.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    link: "https://allbirds.com"
  }
];

const OurWork = () => {
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const handleInteraction = (id: number) => {
    if (window.innerWidth <= 768) {  // Mobile click behavior
      setExpandedId(expandedId === id ? null : id);
    }
  };

  const handleViewProject = (projectId: number) => {
    navigate(`/portfolio#project-${projectId}`);
  };

  const handleTitleClick = (e: React.MouseEvent, link: string) => {
    e.stopPropagation();
    window.open(link, '_blank');
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16 md:py-24 font-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block">
            <div className="flex items-center space-x-3 mb-2">
              <div className="h-[1px] w-8 bg-teal-600" />
              <span className="text-teal-600 uppercase tracking-wider text-sm font-light">Portfolio</span>
              <div className="h-[1px] w-8 bg-teal-600" />
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-white font-light">Our Work</h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-2">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative bg-white dark:bg-gray-900 overflow-hidden cursor-pointer"
              onClick={() => handleInteraction(project.id)}
              onHoverStart={() => window.innerWidth > 768 && setExpandedId(project.id)}
              onHoverEnd={() => window.innerWidth > 768 && setExpandedId(null)}
              initial={false}
              animate={{
                height: expandedId === project.id ? 'auto' : '72px'
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Category */}
                <div className="w-full md:w-1/4 px-6 py-4 md:py-6 border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-700 flex items-center">
                  <span className="text-gray-600 dark:text-gray-400 text-sm font-light">{project.category}</span>
                </div>

                {/* Content Container */}
                <div className="flex-1">
                  {/* Title and Arrow */}
                  <div className={`px-6 py-4 md:py-6 flex items-center justify-between transition-opacity duration-200 ${
                    expandedId === project.id ? 'hidden' : 'block'
                  }`}>
                    <h3 
                      onClick={(e) => handleTitleClick(e, project.link)}
                      className="text-gray-900 dark:text-white font-medium border-b-2 border-gray-200 pb-1 cursor-pointer hover:text-teal-600"
                    >
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-teal-600 transition-colors" />
                  </div>

                  {/* Expanded Content */}
                  {expandedId === project.id && (
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <h3 
                            onClick={(e) => handleTitleClick(e, project.link)}
                            className="text-gray-900 dark:text-white font-medium text-xl mb-3 border-b-2 border-gray-200 pb-1 cursor-pointer hover:text-teal-600"
                          >
                            {project.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleViewProject(project.id);
                            }}
                            className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors font-bold hover:underline font-light"
                          >
                            View Project
                            <ArrowUpRight className="w-4 h-4 ml-1" />
                          </button>
                        </div>
                        <div className="w-full md:w-80 h-48 md:h-auto">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork; 