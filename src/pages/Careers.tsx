import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Careers = () => {
  const [formType, setFormType] = useState<'job' | 'internship'>('job');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    officeCountry: '',
    officeCity: '',
    linkedin: '',
    message: '',
    resume: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="w-full h-[60vh] relative">
          <img 
            src="/images/contact.jpg" 
            alt="Team collaboration" 
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative grid grid-cols-1 md:grid-cols-2">
          {/* Middle Border */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 -translate-x-1/2" />
          
          {/* Left Column - Contact Info */}
          <div className="border-l border-gray-200">
            {/* Contact Us Section */}
            <div className="h-[180px] flex items-end">
              <div className="pb-6 pl-8">
                <h1 className="text-2xl font-normal text-gray-900 mb-3">
                  Contact us
                </h1>
                <p className="text-gray-600 font-light">
                  We'll be in touch to kick things off in no time.
                </p>
              </div>
            </div>

            {/* I want to... section */}
            <div className="mt-16">
              <div>
                <div className="border-t border-gray-200">
                  <div className="px-8 py-12 text-gray-900 font-medium text-2xl">
                    I want to...
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <div className="px-8 py-5 space-y-4">
                    <label className="flex items-center space-x-3 group cursor-pointer">
                      <input
                        type="radio"
                        name="formType"
                        checked={formType === 'job'}
                        onChange={() => setFormType('job')}
                        className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                      />
                      <span className="text-gray-700 font-light group-hover:text-teal-600 transition-colors">Apply for a job</span>
                    </label>
                    <label className="flex items-center space-x-3 group cursor-pointer">
                      <input
                        type="radio"
                        name="formType"
                        checked={formType === 'internship'}
                        onChange={() => setFormType('internship')}
                        className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                      />
                      <span className="text-gray-700 font-light group-hover:text-teal-600 transition-colors">Apply for an internship</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Application Form */}
          <div className="border-r border-gray-200">
            <div className="h-20 flex items-end">
              <h2 className="text-2xl font-medium text-gray-900 pb-4 pl-8 w-full">
                Apply for a {formType}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="mt-8">
              <div>
                <div className="border-t border-gray-200">
                  <input
                    type="text"
                    required
                    placeholder="First name *"
                    className="w-full bg-transparent placeholder-gray-500 placeholder:font-light focus:outline-none px-8 py-5"
                  />
                </div>
                <div className="border-t border-gray-200">
                  <input
                    type="text"
                    required
                    placeholder="Last name *"
                    className="w-full bg-transparent placeholder-gray-500 placeholder:font-light focus:outline-none px-8 py-5"
                  />
                </div>
                <div className="border-t border-gray-200">
                  <input
                    type="email"
                    required
                    placeholder="Email *"
                    className="w-full bg-transparent placeholder-gray-500 placeholder:font-light focus:outline-none px-8 py-5"
                  />
                </div>
                <div className="border-t border-gray-200">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full bg-transparent placeholder-gray-500 placeholder:font-light focus:outline-none px-8 py-5"
                  />
                </div>
                <div className="border-t border-gray-200 relative group">
                  <select
                    required
                    className="w-full bg-transparent text-gray-500 font-light focus:outline-none appearance-none cursor-pointer px-8 py-5"
                  >
                    <option value="">Office location (Country) *</option>
                    <option value="uk">United Kingdom</option>
                    <option value="bd">Bangladesh</option>
                  </select>
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-teal-600 transition-colors">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.41 0.589844L6 5.16984L10.59 0.589844L12 1.99984L6 7.99984L0 1.99984L1.41 0.589844Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <div className="border-t border-gray-200 relative group">
                  <select
                    required
                    className="w-full bg-transparent text-gray-500 font-light focus:outline-none appearance-none cursor-pointer px-8 py-5"
                  >
                    <option value="">Office location (City) *</option>
                    <option value="london">London</option>
                    <option value="dhaka">Dhaka</option>
                  </select>
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-teal-600 transition-colors">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.41 0.589844L6 5.16984L10.59 0.589844L12 1.99984L6 7.99984L0 1.99984L1.41 0.589844Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <input
                    type="url"
                    placeholder="LinkedIn"
                    className="w-full bg-transparent placeholder-gray-500 placeholder:font-light focus:outline-none px-8 py-5"
                  />
                </div>
                <div className="border-t border-gray-200 relative group">
                  <div className="flex items-center justify-between px-8 py-5">
                    <input
                      type="file"
                      required
                      id="cv-upload"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setFormData(prev => ({ ...prev, resume: file }));
                        }
                      }}
                    />
                    <label 
                      htmlFor="cv-upload" 
                      className="text-gray-500 font-light cursor-pointer flex-grow group-hover:text-teal-600 transition-colors"
                    >
                      {formData.resume ? formData.resume.name : 'CV'}
                    </label>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 group-hover:text-teal-600 transition-colors">
                      <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.3327 5.33333L7.99935 2L4.66602 5.33333" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 2V10" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <div className="px-8 py-5">
                    <h3 className="text-gray-900 font-normal mb-4">
                      Anything you'd like to add?
                    </h3>
                    <textarea
                      rows={4}
                      placeholder="Type your message..."
                      className="w-full bg-transparent placeholder-gray-500 placeholder:font-light focus:outline-none resize-none"
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 px-6 flex items-center justify-between group transition-colors"
                >
                  <span className="font-light">Send</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;