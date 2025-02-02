import { ChevronDown, LayoutGrid, List } from 'lucide-react';
import { useState } from 'react';


const projects = [
  {
    id: 1,
    name: 'ndeavourhealth',
    category: 'Fitness & wellness',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'wholey',
    category: 'Food & beverage',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'healthtech',
    category: 'Healthcare',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'finwise',
    category: 'Finance',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'edulearn',
    category: 'Education',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'shopify',
    category: 'E-commerce',
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 7,
    name: 'logistic',
    category: 'Logistics',
    imageUrl: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 8,
    name: 'techpro',
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop'
  }
];

const Portfolio = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        {/* Vertical Middle Line */}
        <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-gray-200 transform -translate-x-1/2 hidden md:block" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
          {/* Left Section */}
          <div className="min-h-[200px] md:min-h-[400px] relative">
            {/* Title Section */}
            <div className="pt-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-regular text-gray-900">
                Our Portfolio
              </h1>
            </div>
          </div>

          {/* Right Section */}
          <div className="min-h-[150px] md:min-h-[400px] relative">
            {/* Description Section */}
            <div className="md:pl-8 md:absolute md:bottom-12">
              <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
                We collaborate with innovative companies at every stage, acting as a partner as 
                they accelerate and meet their goals. Take a look at some of our favorite projects 
                to date.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="w-full bg-gray-100 border-y border-gray-200 mt-8 md:mt-0">
        <div className="max-w-7xl mx-auto relative">
          {/* Vertical Middle Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 transform -translate-x-1/2 hidden md:block" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            {/* Left Side - Filters */}
            <div className="flex items-center h-12 md:h-16 divide-x divide-gray-200">
              {/* Technologies Filter */}
              <div className="h-full">
                <button className="h-full px-4 md:px-8 flex items-center space-x-2 text-gray-600 hover:bg-gray-200 transition-colors">
                  <span className="font-light">Technologies</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Industries Filter */}
              <div className="h-full">
                <button className="h-full px-4 md:px-8 flex items-center space-x-2 text-gray-600 hover:bg-gray-200 transition-colors">
                  <span className="font-light">Industries</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Side - View Options */}
            <div className="flex items-center h-12 md:h-16 divide-x divide-gray-200 border-t md:border-t-0 mt-2 md:mt-0">
              <div className="flex items-center h-full">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`h-full px-4 transition-colors ${
                    viewMode === 'grid' 
                      ? 'text-teal-600 bg-gray-200' 
                      : 'text-gray-400 hover:bg-gray-200'
                  }`}
                >
                  <LayoutGrid className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`h-full px-4 transition-colors ${
                    viewMode === 'list' 
                      ? 'text-teal-600 bg-gray-200' 
                      : 'text-gray-400 hover:bg-gray-200'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Grid/List */}
      <div className="w-full">
        {/* Container with Dividers */}
        <div className="relative pt-8 md:pt-16">
          {/* Vertical Middle Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 transform -translate-x-1/2 hidden md:block" />
          
          {viewMode === 'grid' ? (
            /* Grid View */
            <div className="flex flex-col">
              {Array.from({ length: Math.ceil(projects.length / 2) }, (_, rowIndex) => (
                <div key={rowIndex} className="relative mb-8 md:mb-16">
                  <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16">
                      {projects.slice(rowIndex * 2, rowIndex * 2 + 2).map((project, index) => (
                        <div key={project.id} className={`group ${index === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                          {/* Project Content Container */}
                          <div className="mb-8 md:mb-12">
                            {/* Project Header */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-8">
                              <h3 className="text-xl md:text-2xl lg:text-3xl font-normal text-gray-900 border-b-2 border-gray-200 pb-1">
                                {project.name}
                              </h3>
                              <p className="text-sm text-gray-500 mt-2 md:mt-0">{project.category}</p>
                            </div>
                            
                            {/* Project Image */}
                            <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                              <img 
                                src={project.imageUrl} 
                                alt={project.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Shared Bottom Line for Row */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200 w-full" />
                </div>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="max-w-7xl mx-auto">
              <div className="relative">
                {/* Floating Image Container - Fixed Position */}
                <div className="fixed md:top-32 md:right-32 top-1/4 right-4 w-[280px] md:w-[400px] h-[210px] md:h-[300px] pointer-events-none opacity-0 transition-opacity duration-300 z-50 shadow-xl" id="floating-image">
                  <div className="w-full h-full bg-white overflow-hidden">
                    <img 
                      id="floating-image-content"
                      src=""
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* List Items */}
                <div className="flex flex-col">
                  {projects.map((project) => (
                    <div 
                      key={project.id} 
                      className="group relative py-4 md:py-8 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                      onMouseEnter={() => {
                        const floatingImage = document.getElementById('floating-image');
                        const imageContent = document.getElementById('floating-image-content') as HTMLImageElement;
                        if (floatingImage && imageContent) {
                          floatingImage.style.opacity = '1';
                          imageContent.src = project.imageUrl;
                          imageContent.alt = project.name;
                        }
                      }}
                      onMouseLeave={() => {
                        const floatingImage = document.getElementById('floating-image');
                        if (floatingImage) {
                          floatingImage.style.opacity = '0';
                        }
                      }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between px-4 md:px-8 space-y-2 md:space-y-0">
                        <h3 className="text-xl md:text-2xl font-normal text-gray-900">
                          {project.name}
                        </h3>
                        <p className="text-sm text-gray-500">{project.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 