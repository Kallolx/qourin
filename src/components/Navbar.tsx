import { useState } from 'react';
import { Search, ChevronDown, Menu, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollToContact } from '../hooks/useScrollToContact';

interface NavLink {
  title: string;
  path?: string;
  submenu?: {
    [key: string]: NavLink[];
  };
}

type NavItem = NavLink[];

const navItems: Record<string, NavItem> = {
  'About Us': [
    { title: 'Who we are', path: '/about-company' },
    { title: 'How we work', path: '/how-we-work' },
    { title: 'Why Qourin', path: '/why-qourin' },
    { title: 'Team Member', path: '/team-member' },
    { title: 'Publications', path: '/publications' }
  ],
  'Expertise': [
    { title: 'Software Development', path: '/enterprise/software-development' },
    { title: 'Web Development', path: '/enterprise/web-development' },
    { title: 'Mobile Development', path: '/enterprise/mobile-development' },
    { title: 'Devops', path: '/enterprise/devops' },
    { title: 'Cloud Consulting', path: '/enterprise/cloud-consulting' },
    {
      title: 'Other Services',
      submenu: {
        'Services': [
          { title: 'Artificial Intelligence', path: '/enterprise/artificial-intelligence' },
          { title: 'Backend Development', path: '/enterprise/backend-development' },
          { title: 'Frontend Development', path: '/enterprise/frontend-development' },
          { title: 'AR/VR Development', path: '/enterprise/ar-vr-development' },
          { title: 'Blockchain Development', path: '/enterprise/blockchain-development' },
          { title: 'AWS Cloud Consulting', path: '/enterprise/aws-consulting' },
          { title: 'Azure Cloud Consulting', path: '/enterprise/azure-consulting' },
          { title: 'Google Cloud Consulting', path: '/enterprise/google-cloud-consulting' },
          
        ]
      }
    }
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
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToContact = useScrollToContact();

  const handleMouseEnter = (title: string) => {
    if (window.innerWidth >= 768) {
      setActiveDropdown(title);
    }
  };

  const handleSubmenuEnter = (title: string) => {
    if (window.innerWidth >= 768) {
      setActiveSubmenu(activeSubmenu === title ? null : title);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    }
  };

  const handleDropdownLeave = (e: React.MouseEvent) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (!relatedTarget?.closest('.dropdown-menu')) {
      handleMouseLeave();
    }
  };

  const toggleMobileDropdown = (title: string) => {
    if (window.innerWidth < 768) {
      setActiveDropdown(activeDropdown === title ? null : title);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 font-reguler">
      <nav className="bg-[#ffffff] dark:bg-gray-900 h-16 px-4 md:px-8 flex items-center justify-between border-b border-gray-300 dark:border-gray-700 relative">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src="/icons/logo.png" alt="Qourin Logo" className="h-8 w-auto" />
            <span className="text-xl font-normal tracking-tight text-gray-900 dark:text-white">Qourin</span>
          </Link>
          <div className="ml-4 md:ml-[200px] flex items-center h-full">
          </div>
          <div className="hidden md:block h-16 w-[1px] bg-white dark:bg-gray-700 mx-8" />
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
                className="relative h-16 flex items-center dropdown-menu"
                onMouseEnter={() => handleMouseEnter(title)}
                onMouseLeave={handleDropdownLeave}
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
                {activeDropdown === title && (
                  <div className="absolute top-full left-0 w-[300px] bg-[#EBEBED] dark:bg-gray-800 backdrop-blur-lg border border-white/50 dark:border-gray-700 overflow-hidden transform transition-all duration-300 ease-out dropdown-menu animate-in slide-in-from-top-2">
                    <div className="py-3">
                      {items.map((item, index) => (
                        <>
                          {index > 0 && <div className="h-[1px] w-full bg-white/80 dark:bg-gray-700" />}
                          {item.submenu ? (
                            <div key={item.title}>
                              <button 
                                onClick={() => handleSubmenuEnter(item.title)}
                                className="w-full px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500 hover:bg-white/40 dark:hover:bg-gray-700/50 transition-all duration-200 flex items-center justify-between group relative"
                              >
                                <span className="font-medium">{item.title}</span>
                                <ChevronDown className={`w-4 h-4 text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-500 transform transition-all duration-300 ${
                                  activeSubmenu === item.title ? 'rotate-180' : ''
                                }`} />
                              </button>

                              <div className={`overflow-hidden transition-all duration-300 transform ${
                                activeSubmenu === item.title ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
                              }`}>
                                {Object.entries(item.submenu).map(([category, subItems]) => (
                                  <div key={category} className="bg-white/20 dark:bg-gray-700/20">
                                    <div className="px-6 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 bg-white/30 dark:bg-gray-700/30">
                                      {category}
                                    </div>
                                    <div className="pb-2">
                                      {subItems.map((subItem, subIndex) => (
                                        <>
                                          {subIndex > 0 && <div className="h-[1px] w-full bg-white/50 dark:bg-gray-700" />}
                                          <Link
                                            key={subItem.path}
                                            to={subItem.path!}
                                            className="group block px-8 py-2.5 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500 hover:bg-white/40 dark:hover:bg-gray-700/50 transition-all duration-200 relative"
                                          >
                                            <div className="flex items-center justify-between">
                                              <span className="relative">
                                                {subItem.title}
                                              </span>
                                              <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-teal-600 dark:group-hover:text-teal-500 transition-all duration-200" />
                                            </div>
                                          </Link>
                                        </>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link
                              key={item.path}
                              to={item.path!}
                              className="group block px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500 hover:bg-white/40 dark:hover:bg-gray-700/50 transition-all duration-200 relative"
                            >
                              <div className="flex items-center justify-between">
                                <span className="relative">
                                  {item.title}
                                </span>
                                <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-teal-600 dark:group-hover:text-teal-500 transition-all duration-200" />
                              </div>
                            </Link>
                          )}
                        </>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Regular Menu Items */}
            <div className="relative h-16 flex items-center">
              <button className="flex items-center space-x-1 h-full px-1 text-gray-700 dark:text-white hover:text-teal-600 dark:hover:text-teal-500 transition-colors">
                <Link to="https://vlsi.qourin.com" target="_blank" rel="noopener noreferrer" className="font-normal">
                  Qmos
                </Link>
              </button>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
            
            <div className="relative h-16 flex items-center">
              <button className="flex items-center space-x-1 h-full px-1 text-gray-700 dark:text-white hover:text-teal-600 dark:hover:text-teal-500 transition-colors">
                <Link to="/research-and-development" className="font-normal">
                  R&D
                </Link>
              </button>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
            
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
        <div className={`md:hidden fixed inset-0 top-16 bg-[#EBEBED] dark:bg-gray-800 transition-transform duration-300 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}>
          <div className="h-full pb-20">
            {/* Mobile Menu Items */}
            <div className="px-4 py-2">
              {Object.entries(navItems).map(([title, items], mainIndex) => (
                <div key={title}>
                  {mainIndex > 0 && <div className="h-[1px] w-full bg-white/80 dark:bg-gray-700 my-2" />}
                  <button
                    className="w-full py-4 flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500"
                    onClick={() => toggleMobileDropdown(title)}
                  >
                    <span className="font-normal text-lg">{title}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                      activeDropdown === title ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 transform ${
                    activeDropdown === title ? 'max-h-[800px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
                  }`}>
                    <div className="py-2">
                      {items.map((item, index) => (
                        <>
                          {index > 0 && <div className="h-[1px] w-full bg-white/50 dark:bg-gray-700" />}
                          {item.submenu ? (
                            <div key={item.title}>
                              <button
                                onClick={() => {
                                  if (window.innerWidth < 768) {
                                    handleSubmenuEnter(item.title);
                                  }
                                }}
                                className="w-full px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500 hover:bg-white/40 dark:hover:bg-gray-700/50 transition-all duration-200 flex items-center justify-between"
                              >
                                <span className="font-medium">{item.title}</span>
                                <ChevronDown className={`w-4 h-4 text-gray-400 dark:text-gray-500 transform transition-all duration-300 ${
                                  activeSubmenu === item.title ? 'rotate-180' : ''
                                }`} />
                              </button>

                              <div className={`overflow-hidden transition-all duration-300 transform ${
                                activeSubmenu === item.title ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
                              }`}>
                                {Object.entries(item.submenu).map(([category, subItems]) => (
                                  <div key={category} className="bg-white/20 dark:bg-gray-700/20">
                                    <div className="px-6 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 bg-white/30 dark:bg-gray-700/30">
                                      {category}
                                    </div>
                                    <div className="py-2">
                                      {subItems.map((subItem, subIndex) => (
                                        <>
                                          {subIndex > 0 && <div className="h-[1px] w-full bg-white/50 dark:bg-gray-700" />}
                                          <Link
                                            key={subItem.path}
                                            to={subItem.path!}
                                            className="block px-8 py-3 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500 hover:bg-white/40 dark:hover:bg-gray-700/50 transition-all duration-200"
                                            onClick={() => {
                                              if (window.innerWidth < 768) {
                                                setActiveSubmenu(null);
                                                setActiveDropdown(null);
                                                setIsMobileMenuOpen(false);
                                              }
                                            }}
                                          >
                                            {subItem.title}
                                          </Link>
                                        </>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link
                              key={item.path}
                              to={item.path!}
                              className="block px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500 hover:bg-white/40 dark:hover:bg-gray-700/50 transition-all duration-200"
                              onClick={() => {
                                if (window.innerWidth < 768) {
                                  setActiveDropdown(null);
                                  setIsMobileMenuOpen(false);
                                }
                              }}
                            >
                              {item.title}
                            </Link>
                          )}
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Mobile Regular Menu Items */}
              <div className="h-[1px] w-full bg-white/80 dark:bg-gray-700 my-2" />
              <Link 
                to="https://vlsi.qourin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-4 px-6 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500 hover:bg-white/40 dark:hover:bg-gray-700/50 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span>Qmos</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                </div>
              </Link>

              <Link 
                to="/research-and-development" 
                className="block py-4 px-6 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500 hover:bg-white/40 dark:hover:bg-gray-700/50 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span>R&D</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                </div>
              </Link>
              <Link 
                to="/portfolio" 
                className="block py-4 px-6 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500 hover:bg-white/40 dark:hover:bg-gray-700/50 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span>Portfolio</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                </div>
              </Link>
              <div className="h-[1px] w-full bg-white/80 dark:bg-gray-700 my-2" />
              <Link 
                to="/career" 
                className="block py-4 px-6 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500 hover:bg-white/40 dark:hover:bg-gray-700/50 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span>Career</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                </div>
              </Link>

              {/* Mobile Action Buttons */}
              <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#EBEBED] dark:bg-gray-800 border-t border-white/80 dark:border-gray-700 flex flex-col gap-3">
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      setTimeout(() => {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }
                  }}
                  className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-normal text-base"
                >
                  Contact us
                </button>
                <button className="w-full py-3 bg-white/40 dark:bg-gray-700/40 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-white/60 dark:hover:bg-gray-700/60 transition-colors flex items-center justify-center gap-2">
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