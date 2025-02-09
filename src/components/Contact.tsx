import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Check, AlertCircle, ArrowRight, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    file: null as File | null,
    acceptPrivacy: false
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please enter your message');
      return false;
    }
    if (!formData.acceptPrivacy) {
      setErrorMessage('Please accept the privacy policy');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Initialize EmailJS with your public key
      emailjs.init("vvv1XpVpbIDD0ghMO");

      // Format the date
      const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      // Prepare template parameters with more structured data
      const templateParams = {
        // Contact Details Section
        contact_name: formData.fullName,
        contact_email: formData.email,
        contact_phone: formData.phone || 'Not provided',
        
        // Message Content
        message_content: formData.message,
        
        // File Attachment Info
        has_attachment: formData.file ? 'Yes' : 'No',
        attachment_name: formData.file?.name || 'No file attached',
        attachment_size: formData.file ? `${(formData.file.size / 1024 / 1024).toFixed(2)} MB` : 'N/A',
        
        // Metadata
        submission_date: currentDate,
        submission_source: 'Website Contact Form',
        user_agent: navigator.userAgent,
        
        // Additional Context
        page_url: window.location.href,
        referrer: document.referrer || 'Direct visit'
      };

      await emailjs.send(
        'service_zinqc9n', // Your EmailJS service ID
        'template_jzokyob', // Your EmailJS template ID
        templateParams
      );

      setStatus('success');
      setShowNotification(true);
      
      // Hide notification after 5 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: '',
        file: null,
        acceptPrivacy: false
      });

      // Reset file input
      const fileInput = document.getElementById('file-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, file }));
    }
  };

  return (
    <>
      <div id="contact" className="py-24 bg-white dark:bg-gray-900">
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
                          <span>{formData.file ? formData.file.name : 'Upload file (max file size is 30MB)'}</span>
                          <input
                            id="file-upload"
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
                            checked={formData.acceptPrivacy}
                            onChange={(e) => setFormData(prev => ({ ...prev, acceptPrivacy: e.target.checked }))}
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

                  {/* Error Message */}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 dark:text-red-400 px-6">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-sm">{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className={`relative bg-teal-600 text-white px-8 py-3 rounded-sm hover:bg-teal-700 transition-colors ${
                        status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {status === 'loading' ? (
                        <span>Sending...</span>
                      ) : status === 'success' ? (
                        <span className="flex items-center gap-2">
                          <Check className="w-4 h-4" />
                          Sent!
                        </span>
                      ) : (
                        <span>Send</span>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Floating Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 bg-teal-600 text-white px-6 py-4 rounded-lg shadow-xl z-50 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5" />
              <div>
                <p className="font-medium">Message sent successfully!</p>
                <p className="text-sm text-teal-100">We'll get back to you soon.</p>
              </div>
            </div>
            <button 
              onClick={() => setShowNotification(false)}
              className="text-teal-100 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact; 