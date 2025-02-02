import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FilterSection {
  title: string;
  options: string[];
  isOpen: boolean;
}

interface FilterOption {
  country?: string;
  city?: string;
  category?: string;
  technology?: string;
  level?: string;
}

const JobOpenings = () => {
  const [filters, setFilters] = useState<FilterSection[]>([
    {
      title: 'Country',
      options: ['United Kingdom', 'Bangladesh'],
      isOpen: false
    },
    {
      title: 'City',
      options: ['London', 'Dhaka'],
      isOpen: false
    },
    {
      title: 'Category',
      options: ['Software Development', 'Design', 'Marketing', 'Sales'],
      isOpen: false
    },
    {
      title: 'Technology',
      options: ['React', 'Node.js', 'Python', 'Java', 'PHP'],
      isOpen: false
    },
    {
      title: 'Level',
      options: ['Entry Level', 'Mid Level', 'Senior Level', 'Lead'],
      isOpen: false
    }
  ]);

  const [selectedFilters, setSelectedFilters] = useState<FilterOption>({});
  const [filteredResults] = useState([
    {
      title: 'Senior Frontend Developer',
      location: 'Dhaka, Bangladesh',
      type: 'Full Time',
      category: 'Software Development'
    },
    {
      title: 'UI/UX Designer',
      location: 'London, UK',
      type: 'Full Time',
      category: 'Design'
    }
  ]);

  const toggleFilter = (index: number) => {
    setFilters(prev => prev.map((filter, i) => 
      i === index ? { ...filter, isOpen: !filter.isOpen } : filter
    ));
  };

  const handleFilterSelect = (filterType: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType.toLowerCase()]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-center h-[240px]">
            <div className="max-w-5xl w-full flex items-center justify-between">
              <h1 className="text-3xl md:text-4xl font-medium text-gray-900 whitespace-nowrap">
                Job openings
              </h1>
              <div className="hidden md:block w-[2px] h-24 bg-gray-200 mx-16"></div>
              <p className="text-gray-600 text-lg font-light leading-relaxed max-w-2xl">
                We're actively seeking talented, dedicated professionals across a 
                range of specializations and locations. See which opportunity from 
                the list below fits you best!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-[#00A45A]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <h2 className="text-white font-medium">Filter</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-12 gap-8 mt-8">
          {/* Left Column - Filters */}
          <div className="col-span-12 md:col-span-4">
            {/* Filter Options */}
            <div className="border-r border-gray-200 relative">
              {/* Continuous left border */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200"></div>
              
              {filters.map((filter, index) => (
                <div key={filter.title} className="border-t border-gray-200 first:border-t-0">
                  <button
                    onClick={() => toggleFilter(index)}
                    className="w-full pl-8 pr-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-600">{filter.title}</span>
                    {filter.isOpen ? (
                      <Minus className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {filter.isOpen && (
                    <div className="px-8 py-4 space-y-3 border-t border-gray-200">
                      {filter.options.map((option) => (
                        <label key={option} className="flex items-center space-x-3 group cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-[#00A45A] border-gray-300 rounded focus:ring-[#00A45A]"
                            onChange={() => handleFilterSelect(filter.title, option)}
                            checked={selectedFilters[filter.title.toLowerCase() as keyof FilterOption] === option}
                          />
                          <span className="text-gray-600 group-hover:text-[#00A45A] transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Results Count */}
              <div className="border-t border-gray-200">
                <div className="px-8 py-4">
                  <div className="text-sm text-gray-500">
                    Total: <span className="text-[#00A45A]">{filteredResults.length}</span>
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div className="border-t border-gray-200">
                <div className="px-8 py-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#00A45A] text-white">
                      1
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 cursor-pointer">
                      2
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 cursor-pointer">
                      3
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center text-gray-600">
                      ...
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 cursor-pointer">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="col-span-12 md:col-span-8">
            <div>
              {filteredResults.map((job, index) => (
                <div key={index} className="border-t border-gray-200 first:border-t-0">
                  <div className="px-8 py-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-4">{job.title}</h3>
                    <div className="space-y-2">
                      <p className="text-gray-600">{job.location}</p>
                      <p className="text-gray-600">{job.type}</p>
                      <p className="text-gray-600">{job.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOpenings; 