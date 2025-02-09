import { Clock, Award, DollarSign, Users, Briefcase, Code } from 'lucide-react';

const Stats = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900">
      {/* Top Border Line */}
      <div className="w-full h-px bg-gray-200 dark:bg-gray-800" />

      <div className="max-w-7xl mx-auto relative">
        {/* Left Vertical Line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Top Left - Title Section */}
          <div className="p-12">
            <div className="max-w-xs">
              <h2 className="text-xl text-gray-900 dark:text-white font-light mb-2">Key stats</h2>
            </div>
          </div>

          {/* Top Right - First Two Stats */}
          <div className="p-12">
            <div className="grid grid-cols-2 gap-12">
              {/* Award Winning Clients */}
              <div className="group">
                <div className="space-y-4">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-5xl text-teal-600 dark:text-teal-500 font-light tracking-tight">10</span>
                    <span className="text-2xl text-teal-600 dark:text-teal-500 font-light">+</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-light">award-winning clients</p>
                </div>
              </div>

              {/* Client Acquisitions */}
              <div className="group">
                <div className="space-y-4">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-5xl text-teal-600 dark:text-teal-500 font-light tracking-tight">$4k</span>
                    <span className="text-2xl text-teal-600 dark:text-teal-500 font-light">+</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-light">in client acquisitions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Left - Two Stats */}
          <div className="p-12">
            <div className="grid grid-cols-2 gap-12">
              {/* Average Engagement */}
              <div className="group">
                <div className="space-y-4">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-5xl text-teal-600 dark:text-teal-500 font-light tracking-tight">3</span>
                    <span className="text-2xl text-teal-600 dark:text-teal-500 font-light">mo</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-light">month average engagement</p>
                </div>
              </div>

              {/* Client IPOs */}
              <div className="group">
                <div className="space-y-4">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-5xl text-teal-600 dark:text-teal-500 font-light tracking-tight">2</span>
                    <span className="text-2xl text-teal-600 dark:text-teal-500 font-light">+</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-light">client IPOs supported</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right - Two Stats */}
          <div className="p-12">
            <div className="grid grid-cols-2 gap-12">
              {/* Years Experience */}
              <div className="group">
                <div className="space-y-4">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-5xl text-teal-600 dark:text-teal-500 font-light tracking-tight">2</span>
                    <span className="text-2xl text-teal-600 dark:text-teal-500 font-light">+</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-light">years of experience</p>
                </div>
              </div>

              {/* Engineers */}
              <div className="group">
                <div className="space-y-4">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-5xl text-teal-600 dark:text-teal-500 font-light tracking-tight">16</span>
                    <span className="text-2xl text-teal-600 dark:text-teal-500 font-light">+</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-light">experience engineers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 