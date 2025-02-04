import { ArrowRight, Moon, Sun, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

const Footer = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [showNotification, setShowNotification] = useState(false);

  const handleSubscribe = (e: React.MouseEvent) => {
    e.preventDefault();
    const emailInput = (e.currentTarget.parentElement as HTMLElement).querySelector('input');
    if (emailInput && emailInput.value && emailInput.value.includes('@')) {
      setShowNotification(true);
      emailInput.value = '';
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  };

  return (
    <>
      <footer className="bg-[#151515] dark:bg-gray-900 text-white">
        {/* Top Section */}
        <div className="border-b border-white/10 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10 dark:divide-gray-700">
              {/* Top Left Section */}
              <div className="py-12 md:pr-8 border-l border-white/10 dark:border-gray-700">
                <div className="flex flex-col space-y-8 pl-8 md:pl-12">
                  {/* Email Subscribe */}
                  <div>
                    <h3 className="text-lg mb-4 dark:text-gray-100">Subscribe to our newsletter for industry insights and company news!</h3>
                    <div className="flex border-b border-gray-700">
                      <input
                        type="email"
                        placeholder="Email address*"
                        className="bg-transparent w-full py-2 focus:outline-none text-sm dark:text-gray-300"
                      />
                      <button className="ml-2" onClick={handleSubscribe}>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                    <label className="flex items-start gap-2 mt-4 text-xs text-gray-400">
                      <input type="checkbox" className="mt-1" />
                      <span>
                        I agree to the <a href="#" className="underline">Privacy Policy</a> and give my permission to process my personal data.
                      </span>
                    </label>
                  </div>

                  {/* Dark Mode Toggle */}
                  <div>
                    <button
                      onClick={toggleDarkMode}
                      className="flex items-center gap-3 text-[15px] border border-white/20 dark:border-gray-600 rounded-full px-4 py-1.5 hover:bg-white/5 transition-colors"
                    >
                      <div className="relative w-[18px] h-[18px]">
                        <Moon className={`absolute inset-0 w-full h-full transition-opacity ${darkMode ? 'opacity-0' : 'opacity-100'}`} strokeWidth={1.5} />
                        <Sun className={`absolute inset-0 w-full h-full transition-opacity ${darkMode ? 'opacity-100' : 'opacity-0'}`} strokeWidth={1.5} />
                      </div>
                      {darkMode ? 'Light mode' : 'Dark mode'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Top Right Section */}
              <div className="py-12 md:pl-8">
                <div className="grid grid-cols-2 gap-8">
                  {/* About Links */}
                  <div>
                    <h4 className="text-sm font-medium mb-4">About</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Expertise</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Industries</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
                    </ul>
                  </div>

                  {/* Social Media Links */}
                  <div>
                    <h4 className="text-sm font-medium mb-4">Social Media</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">X (formerly Twitter)</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Bottom Left - Logo Section */}
            <div className="py-12 md:pr-8 border-l border-white/10">
              <div className="h-full flex items-end pl-8 md:pl-12">
                <div className="text-5xl md:text-6xl font-light">
                  Qourin<sup className="text-sm align-super">TM</sup>
                </div>
              </div>
            </div>

            {/* Bottom Right - Contact Info */}
            <div className="py-12 md:pl-8">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-8 divide-x divide-white/10">
                  <div>
                    <h4 className="text-sm font-medium mb-2">HQ Office Address:</h4>
                    <p className="text-sm text-gray-400">71-75 Shelton Street, London, England</p>
                  </div>
                  <div className="pl-8">
                    <h4 className="text-sm font-medium mb-2">Corporate Office Address:</h4>
                    <p className="text-sm text-gray-400">1 Block Road #4, House: 418, Bashundhara R/A, Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-sm">
                    <span className="text-gray-400">E-mail:</span>{" "}
                    <a href="mailto:info@qourin.com" className="hover:text-gray-300 transition-colors">info@qourin.com</a>
                  </p>
                  <p className="text-sm">
                    <span className="text-gray-400">Contact:</span>{" "}
                    <a href="tel:+8801612140042" className="hover:text-gray-300 transition-colors">+88-01612140042</a>
                  </p>
                </div>

                <div className="text-sm text-gray-400">
                  © 2023 - 2025, Qourin All Rights Reserved.{" "}
                  <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Notification */}
      <div
        className={`fixed bottom-8 right-8 bg-[#00A45A] text-white px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 flex items-center space-x-3 z-50 ${
          showNotification ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <Check className="w-5 h-5" />
        <p className="font-light">Thanks for subscribing to our newsletter!</p>
      </div>
    </>
  );
};

export default Footer; 