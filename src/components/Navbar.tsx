import React, { useState } from 'react';
import { Globe, Search, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollToContact } from '../hooks/useScrollToContact';

interface NavLink {
  title: string;
  path: string;
}

type NavItem = NavLink[] | string[];

const navItems: Record<string, NavItem> = {
  'About Us': [
    { title: 'About Company', path: '/about-company' },
    { title: 'Career', path: '/career' },
    { title: 'Job Opening', path: '/job-opening' }
  ],
  'Enterprise': [
    { title: 'Software Development', path: '/enterprise/software-development' },
    { title: 'Web Development', path: '/enterprise/web-development' },
    { title: 'Mobile Development', path: '/enterprise/mobile-development' },
    { title: 'Artificial Intelligence', path: '/enterprise/artificial-intelligence' },
    { title: 'Backend Development', path: '/enterprise/backend-development' },
    { title: 'Frontend Development', path: '/enterprise/frontend-development' },
    { title: 'AR/VR Development', path: '/enterprise/ar-vr-development' },
    { title: 'Blockchain Development', path: '/enterprise/blockchain-development' },
    { title: 'AWS Cloud Consulting', path: '/enterprise/aws-consulting' },
    { title: 'Azure Cloud Consulting', path: '/enterprise/azure-consulting' },
    { title: 'Google Cloud Consulting', path: '/enterprise/google-cloud-consulting' },
    { title: 'Devops', path: '/enterprise/devops' },
    { title: 'Cloud Consulting', path: '/enterprise/cloud-consulting' }
  ],
  'Industries': [
    { title: 'Healthcare', path: '/industry/healthcare' },
    { title: 'Finance', path: '/industry/finance' },
    { title: 'E-commerce', path: '/industry/e-commerce' },
    { title: 'Education', path: '/industry/education' },
    { title: 'Food & Beverage', path: '/industry/food-beverage' },
    { title: 'Automotive', path: '/industry/automotive' }
  ],
};

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToContact = useScrollToContact();

  const handleMouseEnter = (title: string) => {
    if (window.innerWidth >= 768) {
      setActiveDropdown(title);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (window.innerWidth >= 768) {
      const relatedTarget = e.relatedTarget as HTMLElement;
      const isLeavingToDropdown = relatedTarget?.closest('.dropdown-content');
      const isLeavingFromDropdown = e.currentTarget.contains(relatedTarget);
      
      if (!isLeavingToDropdown && !isLeavingFromDropdown) {
        setActiveDropdown(null);
      }
    }
  };

  const toggleMobileDropdown = (title: string) => {
    if (window.innerWidth < 768) {
      setActiveDropdown(activeDropdown === title ? null : title);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-white dark:bg-gray-900 h-16 px-4 md:px-8 flex items-center justify-between shadow-lg relative">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src="/icons/logo.png" alt="Qourin Logo" className="h-8 w-auto" />
            <span className="text-xl font-normal tracking-tight text-gray-900 dark:text-white">Qourin</span>
          </Link>
          <div className="ml-4 md:ml-[200px] flex items-center h-full">
            <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </div>
          <div className="hidden md:block h-16 w-[1px] bg-gray-200 dark:bg-gray-700 mx-8" />
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          ) : (
            <Menu className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8">
            {/* Dropdown Menu Items */}
            {Object.entries(navItems).map(([title, items]) => (
              <div 
                key={title}
                className="relative h-16 flex items-center"
                onMouseEnter={() => handleMouseEnter(title)}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className={`flex items-center space-x-1 h-full px-1 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500 transition-colors ${
                    activeDropdown === title ? 'text-teal-600 dark:text-teal-500' : ''
                  }`}
                >
                  <span className="font-normal">{title}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === title ? 'rotate-180 text-teal-600 dark:text-teal-500' : ''
                  }`} />
                </button>

                {/* Active Indicator */}
                <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 transition-transform duration-300 ${
                  activeDropdown === title ? 'scale-x-100' : 'scale-x-0'
                }`} />
                
                {/* Dropdown Content */}
                <div 
                  className={`dropdown-content absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white dark:bg-gray-900 shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 ${
                    activeDropdown === title 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="py-2 px-3 bg-gradient-to-br from-teal-50 dark:from-teal-900/20 to-white dark:to-gray-900 border-b border-gray-100 dark:border-gray-700">
                    <h3 className="text-sm font-normal text-teal-900 dark:text-teal-100">{title}</h3>
                  </div>
                  <div className="py-1">
                    {items.every(item => typeof item === 'string') ? (
                      // Regular items array
                      items.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-teal-50/50 dark:hover:from-teal-900/20 hover:to-white dark:hover:to-gray-900 hover:text-teal-700 dark:hover:text-teal-400 transition-all duration-150 group"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className="relative pl-2 font-normal">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 bg-teal-500 transition-all duration-200 group-hover:h-full" />
                            {item}
                          </span>
                        </a>
                      ))
                    ) : (
                      // Object with title and path
                      (items as NavLink[]).map((item) => (
                        <Link
                          key={item.title}
                          to={item.path}
                          className="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-teal-50/50 dark:hover:from-teal-900/20 hover:to-white dark:hover:to-gray-900 hover:text-teal-700 dark:hover:text-teal-400 transition-all duration-150 group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="relative pl-2 font-normal">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 bg-teal-500 transition-all duration-200 group-hover:h-full" />
                            {item.title}
                          </span>
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Regular Menu Items */}
            {['Portfolio'].map((item) => (
              <div key={item} className="relative h-16 flex items-center">
                <button className="flex items-center space-x-1 h-full px-1 text-gray-700 dark:text-white hover:text-teal-600 dark:hover:text-teal-500 transition-colors">
                  <Link to="/portfolio" className="font-normal">
                    {item}
                  </Link>
                </button>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            ))}
            <div className="relative h-16 flex items-center">
              <button className="flex items-center space-x-1 h-full px-1 text-gray-700 dark:text-white hover:text-teal-600 dark:hover:text-teal-500 transition-colors">
                <Link to="/career" className="font-normal">
                  Career
                </Link>
              </button>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center h-16">
            <button 
              onClick={scrollToContact}
              className="bg-teal-600 text-white px-6 h-full hover:bg-teal-700 transition-colors font-normal"
            >
              Contact us
            </button>
            <button className="h-16 w-16 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center">
              <Search className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed inset-0 top-16 bg-white dark:bg-gray-900 transition-transform duration-300 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}>
          <div className="h-full pb-20">
            {/* Mobile Menu Items */}
            <div className="px-4 py-2 space-y-2">
              {Object.entries(navItems).map(([title, items]) => (
                <div key={title} className="border-b border-gray-100 dark:border-gray-800">
                  <button
                    className="w-full py-4 flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500"
                    onClick={() => toggleMobileDropdown(title)}
                  >
                    <span className="font-normal text-lg">{title}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                      activeDropdown === title ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    activeDropdown === title ? 'max-h-[500px]' : 'max-h-0'
                  }`}>
                    <div className="pb-4 space-y-1">
                      {Array.isArray(items) && items.map((item) => (
                        typeof item === 'string' ? (
                          <a
                            key={item}
                            href="#"
                            className="block py-3 px-6 text-base text-gray-600 dark:text-gray-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:text-teal-600 dark:hover:text-teal-400 rounded-lg transition-colors"
                            onClick={(e) => {
                              e.preventDefault();
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {item}
                          </a>
                        ) : (
                          <Link
                            key={item.title}
                            to={item.path}
                            className="block py-3 px-6 text-base text-gray-600 dark:text-gray-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:text-teal-600 dark:hover:text-teal-400 rounded-lg transition-colors"
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {item.title}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Mobile Regular Menu Items */}
              <Link 
                to="/portfolio" 
                className="block py-4 px-4 text-lg text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500 border-b border-gray-100 dark:border-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                to="/career" 
                className="block py-4 px-4 text-lg text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500 border-b border-gray-100 dark:border-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Career
              </Link>

              {/* Mobile Action Buttons */}
              <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-3">
                <button 
                  onClick={scrollToContact}
                  className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-normal text-base"
                >
                  Contact us
                </button>
                <button className="w-full py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
                  <Search className="w-5 h-5" />
                  <span className="font-normal">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;