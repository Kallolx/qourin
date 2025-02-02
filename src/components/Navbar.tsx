import React, { useState } from 'react';
import { Globe, Search, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    { title: 'Quality Assurance', path: '/enterprise/quality-assurance' },
    { title: 'Ecommerce', path: '/enterprise/ecommerce' },
    { title: 'Marketing', path: '/enterprise/marketing' },
    { title: 'Devops', path: '/enterprise/devops' },
    { title: 'Cloud Consulting', path: '/enterprise/cloud-consulting' }
  ],
  'Industries': ['Healthcare', 'Finance', 'E-commerce', 'Education', 'Manufacturing', 'Logistics'],
};

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <nav className="bg-white h-16 px-4 md:px-8 flex items-center justify-between shadow-lg relative">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <img src="/icons/logo.png" alt="Qourin Logo" className="h-8 w-auto" />
          <span className="text-xl font-normal tracking-tight">Qourin</span>
          <Globe className="w-5 h-5 text-gray-600 ml-1" />
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-gray-100 rounded-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-600" />
          ) : (
            <Menu className="w-6 h-6 text-gray-600" />
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
                  className={`flex items-center space-x-1 h-full px-1 text-gray-700 hover:text-teal-600 transition-colors ${
                    activeDropdown === title ? 'text-teal-600' : ''
                  }`}
                >
                  <span className="font-normal">{title}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === title ? 'rotate-180 text-teal-600' : ''
                  }`} />
                </button>

                {/* Active Indicator */}
                <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 transition-transform duration-300 ${
                  activeDropdown === title ? 'scale-x-100' : 'scale-x-0'
                }`} />
                
                {/* Dropdown Content */}
                <div 
                  className={`dropdown-content absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white shadow-xl border border-gray-100 transition-all duration-300 ${
                    activeDropdown === title 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="py-2 px-3 bg-gradient-to-br from-teal-50 to-white border-b">
                    <h3 className="text-sm font-normal text-teal-900">{title}</h3>
                  </div>
                  <div className="py-1">
                    {items.every(item => typeof item === 'string') ? (
                      // Regular items array
                      items.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gradient-to-r hover:from-teal-50/50 hover:to-white hover:text-teal-700 transition-all duration-150 group"
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
                          className="flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gradient-to-r hover:from-teal-50/50 hover:to-white hover:text-teal-700 transition-all duration-150 group"
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
                <button className="flex items-center space-x-1 h-full px-1 text-gray-700 hover:text-teal-600 transition-colors">
                  <Link to="/portfolio" className="font-normal">
                    {item}
                  </Link>
                </button>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            ))}
            <div className="relative h-16 flex items-center">
              <button className="flex items-center space-x-1 h-full px-1 text-gray-700 hover:text-teal-600 transition-colors">
                <Link to="/career" className="font-normal">
                  Career
                </Link>
              </button>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center h-16">
            <button className="bg-teal-600 text-white px-6 h-full hover:bg-teal-700 transition-colors font-normal">
              Contact us
            </button>
            <button className="h-16 w-16 hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed inset-0 top-16 bg-white transition-transform duration-300 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="h-full overflow-y-auto pb-16">
            {/* Mobile Menu Items */}
            <div className="px-4 py-2">
              {Object.entries(navItems).map(([title, items]) => (
                <div key={title} className="border-b border-gray-100">
                  <button
                    className="w-full py-3 flex items-center justify-between text-gray-700"
                    onClick={() => toggleMobileDropdown(title)}
                  >
                    <span className="font-normal">{title}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === title ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    activeDropdown === title ? 'max-h-96' : 'max-h-0'
                  }`}>
                    {Array.isArray(items) && items.map((item) => (
                      typeof item === 'string' ? (
                        <a
                          key={item}
                          href="#"
                          className="block py-2 px-4 text-sm text-gray-600 hover:text-teal-600"
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
                          className="block py-2 px-4 text-sm text-gray-600 hover:text-teal-600"
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
              ))}

              {['Portfolio'].map((item) => (
                <Link
                  key={item}
                  to="/portfolio"
                  className="w-full py-3 text-left text-gray-700 border-b border-gray-100 hover:text-teal-600 transition-colors"
                >
                  {item}
                </Link>
              ))}
              <div className="relative h-16 flex items-center">
                <button className="flex items-center space-x-1 h-full px-1 text-gray-700 hover:text-teal-600 transition-colors">
                  <Link to="/career" className="font-normal">
                    Career
                  </Link>
                </button>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>

              <div className="mt-4 space-y-2">
                <button className="w-full bg-teal-600 text-white py-3 px-4 rounded-sm hover:bg-teal-700 transition-colors font-normal">
                  Contact us
                </button>
                <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-200 rounded-sm hover:bg-gray-500">
                  <Search className="w-5 h-5 text-gray-600" />
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