import { Clock, Award, DollarSign, Users, Briefcase, Code } from 'lucide-react';

const Stats = () => {
  return (
    <section className="relative bg-gray-900 py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-400 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-400 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-[1px] w-8 bg-teal-500" />
              <span className="text-teal-500 uppercase tracking-wider text-sm font-light">Our Impact</span>
              <div className="h-[1px] w-8 bg-teal-500" />
            </div>
            <h2 className="text-3xl md:text-4xl text-white font-light">Driving Success Through Numbers</h2>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {/* Average Engagement */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-5 h-5 text-teal-500" />
                <div className="h-[1px] flex-1 bg-gradient-to-r from-teal-500/50 to-transparent" />
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl md:text-6xl text-white font-light tracking-tight group-hover:text-teal-500 transition-colors">3</span>
                  <span className="text-xl md:text-2xl text-teal-500/80">mo</span>
                </div>
                <p className="text-sm text-gray-400 font-light">Average Engagement</p>
              </div>
            </div>
          </div>

          {/* Award Winning Clients */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-5 h-5 text-teal-500" />
                <div className="h-[1px] flex-1 bg-gradient-to-r from-teal-500/50 to-transparent" />
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl md:text-6xl text-white font-light tracking-tight group-hover:text-teal-500 transition-colors">10</span>
                  <span className="text-xl md:text-2xl text-teal-500/80">+</span>
                </div>
                <p className="text-sm text-gray-400 font-light">Award-Winning Clients</p>
              </div>
            </div>
          </div>

          {/* Client Acquisitions */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-4">
                <DollarSign className="w-5 h-5 text-teal-500" />
                <div className="h-[1px] flex-1 bg-gradient-to-r from-teal-500/50 to-transparent" />
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl md:text-6xl text-white font-light tracking-tight group-hover:text-teal-500 transition-colors">4k</span>
                  <span className="text-xl md:text-2xl text-teal-500/80">+</span>
                </div>
                <p className="text-sm text-gray-400 font-light">In Client Acquisitions</p>
              </div>
            </div>
          </div>

          {/* Client IPOs */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Briefcase className="w-5 h-5 text-teal-500" />
                <div className="h-[1px] flex-1 bg-gradient-to-r from-teal-500/50 to-transparent" />
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl md:text-6xl text-white font-light tracking-tight group-hover:text-teal-500 transition-colors">2</span>
                  <span className="text-xl md:text-2xl text-teal-500/80">+</span>
                </div>
                <p className="text-sm text-gray-400 font-light">Client IPOs Supported</p>
              </div>
            </div>
          </div>

          {/* Years Experience */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-5 h-5 text-teal-500" />
                <div className="h-[1px] flex-1 bg-gradient-to-r from-teal-500/50 to-transparent" />
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl md:text-6xl text-white font-light tracking-tight group-hover:text-teal-500 transition-colors">2</span>
                  <span className="text-xl md:text-2xl text-teal-500/80">+</span>
                </div>
                <p className="text-sm text-gray-400 font-light">Years of Experience</p>
              </div>
            </div>
          </div>

          {/* Engineers */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Code className="w-5 h-5 text-teal-500" />
                <div className="h-[1px] flex-1 bg-gradient-to-r from-teal-500/50 to-transparent" />
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl md:text-6xl text-white font-light tracking-tight group-hover:text-teal-500 transition-colors">16</span>
                  <span className="text-xl md:text-2xl text-teal-500/80">+</span>
                </div>
                <p className="text-sm text-gray-400 font-light">Experience Engineers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 