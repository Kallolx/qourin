import { ArrowRight, Moon, Sun, Check } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

const Footer = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [showNotification, setShowNotification] = useState(false);

  const handleSubscribe = (e: React.MouseEvent) => {
    e.preventDefault();
    const emailInput = (
      e.currentTarget.parentElement as HTMLElement
    ).querySelector("input");
    if (emailInput && emailInput.value && emailInput.value.includes("@")) {
      setShowNotification(true);
      emailInput.value = "";
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  };

  return (
    <>
      <footer className="bg-[#151515] dark:bg-gray-900 text-white font-light">
        {/* Top Section */}
        <div className="border-b border-white/10 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10 dark:divide-gray-700">
              {/* Top Left Section */}
              <div className="py-12 md:pr-8 border-l border-white/10 dark:border-gray-700">
                <div className="flex flex-col space-y-8 pl-8 md:pl-12">
                  {/* Email Subscribe */}
                  <div>
                    <h3 className="text-lg mb-4 dark:text-gray-100">
                      Subscribe to our newsletter for industry insights and
                      company news!
                    </h3>
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
                        I agree to the{" "}
                        <a href="#" className="underline">
                          Privacy Policy
                        </a>{" "}
                        and give my permission to process my personal data for the purposes specified in the Privacy Policy.
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
                        <Moon
                          className={`absolute inset-0 w-full h-full transition-opacity ${
                            darkMode ? "opacity-0" : "opacity-100"
                          }`}
                          strokeWidth={1.5}
                        />
                        <Sun
                          className={`absolute inset-0 w-full h-full transition-opacity ${
                            darkMode ? "opacity-100" : "opacity-0"
                          }`}
                          strokeWidth={1.5}
                        />
                      </div>
                      {darkMode ? "Light mode" : "Dark mode"}
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
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          About us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Expertise
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Industries
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Portfolio
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Careers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Social Media Links */}
                  <div>
                    <h4 className="text-sm font-medium mb-4">Social Media</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          LinkedIn
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          X (formerly Twitter)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Facebook
                        </a>
                      </li>
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
            <div className="py-12 md:pl-8 font-light">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-8 divide-x divide-white/10">
                  <div>
                    <p className="text-sm text-gray-400">
                      HQ Office Address: 71-75 <br /> Shelton Street, London,{" "}
                      <br /> England
                    </p>
                  </div>
                  <div className="pl-8">
                    <p className="text-sm text-gray-400">
                      Corporate Office Address: I Block Road #4, House: 418,
                      Bashundhara R/A, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex justify-between gap-4 font-light">
                  <p className="text-sm">
                    <span className="text-gray-400">E-mail:</span>{" "}
                    <a
                      href="mailto:info@qourin.com"
                      className="hover:text-gray-300 transition-colors"
                    >
                      info@qourin.com
                    </a>
                  </p>
                  <p className="text-sm">
                    <span className="text-gray-400">Contact:</span>{" "}
                    <a
                      href="tel:+8801612140042"
                      className="hover:text-gray-300 transition-colors"
                    >
                      +88-01612140042
                    </a>
                  </p>
                </div>

                <div className="flex justify-between text-sm text-gray-400 font-light">
                  <span>© 2025, Qourin All Rights Reserved.</span>
                  <div className="flex items-center gap-4">
                    <a
                      href="#"
                      className="underline hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </a>
                    <span className="text-gray-600">|</span>
                    <a
                      href="https://webbytestudio.unaux.com/?i=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-4 h-4 hidden md:block"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                        <path d="M2 2l7.586 7.586"></path>
                        <circle cx="11" cy="11" r="2"></circle>
                      </svg>
                      Developed by WebByte Studio
                    </a>
                  </div>
                </div>
                <span className="text-sm text-gray-400">
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Notification */}
      <div
        className={`fixed bottom-8 right-8 bg-[#00A45A] text-white px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 flex items-center space-x-3 z-50 ${
          showNotification
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }`}
      >
        <Check className="w-5 h-5" />
        <p className="font-light">Thanks for subscribing to our newsletter!</p>
      </div>
    </>
  );
};

export default Footer;
