import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    file: null as File | null,
    privacyPolicy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };

  return (
    <div id="contact" className="py-24 bg-white">
      <section className="bg-gray-50 dark:bg-gray-800 pt-4 pb-16 md:pt-8 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Title */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block">
              <div className="flex items-center space-x-3 mb-2">
                <div className="h-[1px] w-8 bg-teal-600" />
                <span className="text-teal-600 uppercase tracking-wider text-sm font-light">Get in Touch</span>
                <div className="h-[1px] w-8 bg-teal-600" />
              </div>
              <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-white font-light">Contact us</h2>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-6xl mx-auto">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {/* Left Column */}
              <div className="space-y-2">
                {/* Full Name */}
                <motion.div 
                  className="bg-white dark:bg-gray-900 overflow-hidden"
                  initial={{ height: 80 }}
                  whileHover={{ height: 80 }}
                >
                  <div className="flex items-stretch h-full">
                    <div className="w-1/3 p-6 border-r border-gray-100 dark:border-gray-700 flex items-center">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">Full name</span>
                    </div>
                    <div className="flex-1 p-6 flex items-center">
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        className="w-full bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div 
                  className="bg-white dark:bg-gray-900 overflow-hidden"
                  initial={{ height: 80 }}
                  whileHover={{ height: 80 }}
                >
                  <div className="flex items-stretch h-full">
                    <div className="w-1/3 p-6 border-r border-gray-100 dark:border-gray-700 flex items-center">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">Work email</span>
                    </div>
                    <div className="flex-1 p-6 flex items-center">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
                        placeholder="Enter your work email"
                        required
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div 
                  className="bg-white dark:bg-gray-900 overflow-hidden"
                  initial={{ height: 80 }}
                  whileHover={{ height: 80 }}
                >
                  <div className="flex items-stretch h-full">
                    <div className="w-1/3 p-6 border-r border-gray-100 dark:border-gray-700 flex items-center">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">Phone (optional)</span>
                    </div>
                    <div className="flex-1 p-6 flex items-center">
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-2">
                {/* Message */}
                <motion.div 
                  className="bg-white dark:bg-gray-900 overflow-hidden"
                  initial={{ height: 244 }}
                  whileHover={{ height: 244 }}
                >
                  <div className="flex items-stretch h-full">
                    <div className="w-1/3 p-6 border-r border-gray-100 dark:border-gray-700 flex items-start pt-6">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">How can we help you?</span>
                    </div>
                    <div className="flex-1 p-6">
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full h-full bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none resize-none"
                        placeholder="Tell us about your project..."
                        required
                      />
                    </div>
                  </div>
                </motion.div>

                {/* File Upload */}
                <motion.div 
                  className="bg-white dark:bg-gray-900 overflow-hidden"
                  initial={{ height: 80 }}
                  whileHover={{ height: 80 }}
                >
                  <div className="flex items-stretch h-full">
                    <div className="w-1/3 p-6 border-r border-gray-100 dark:border-gray-700 flex items-center">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">Upload file</span>
                    </div>
                    <div className="flex-1 p-6 flex items-center">
                      <label className="flex items-center gap-2 cursor-pointer text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500 transition-colors">
                        <Upload className="w-5 h-5" />
                        <span>Upload file (max file size is 30MB)</span>
                        <input
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                          accept=".pdf,.doc,.docx,.txt"
                        />
                      </label>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Full Width Elements */}
              <div className="md:col-span-2 space-y-2">
                {/* Privacy Policy */}
                <motion.div 
                  className="bg-white dark:bg-gray-900 overflow-hidden"
                  initial={{ height: 80 }}
                  whileHover={{ height: 80 }}
                >
                  <div className="flex items-stretch h-full">
                    <div className="w-1/6 p-6 border-r border-gray-100 dark:border-gray-700 flex items-center">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">Privacy Policy</span>
                    </div>
                    <div className="flex-1 p-6 flex items-center">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.privacyPolicy}
                          onChange={(e) => setFormData(prev => ({ ...prev, privacyPolicy: e.target.checked }))}
                          className="w-4 h-4 text-teal-600 dark:text-teal-500 border-gray-300 dark:border-gray-600 rounded focus:ring-teal-500 dark:focus:ring-teal-400"
                          required
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          I agree to the <a href="#" className="text-teal-600 dark:text-teal-500 hover:text-teal-700 dark:hover:text-teal-400">Privacy Policy</a> and give my permission to process my personal data.
                        </span>
                      </label>
                    </div>
                  </div>
                </motion.div>

                {/* Submit Button */}
                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="bg-teal-600 text-white px-8 py-3 rounded-sm hover:bg-teal-700 transition-colors"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 