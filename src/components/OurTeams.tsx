const teams = [
  {
    id: 1,
    title: "Software Engineering",
    description: "Dive Into Complex Challenges With A Top-Tier Engineering Team, Crafting Innovative Software Solutions.",
    icon: "/icons/icon.svg"
  },
  {
    id: 2,
    title: "Design & UX",
    description: "Collaborate With Creative Minds To Design Captivating User Experiences And Interfaces That Stand Out.",
    icon: "/icons/icon.svg"
  },
  {
    id: 3,
    title: "Artificial Intelligence (AI)",
    description: "Push The Boundaries Of AI, Developing Cutting-Edge Applications That Redefine What's Possible.",
    icon: "/icons/icon.svg"
  },
  {
    id: 4,
    title: "Project Management",
    description: "Lead Projects From Concept To Completion, Ensuring Seamless Execution And Outstanding Results.",
    icon: "/icons/icon.svg"
  },
  {
    id: 5,
    title: "Marketing",
    description: "Propel Our Brand Forward By Creating Compelling Narratives And Strategies That Capture And Engage Our Audience.",
    icon: "/icons/icon.svg"
  },
  {
    id: 6,
    title: "Sales",
    description: "Excel In A Dynamic Sales Environment, Connecting With Global Clients To Deliver Tech Solutions That Meet Their Needs.",
    icon: "/icons/icon.svg"
  },
  {
    id: 7,
    title: "Research",
    description: "Contribute To Groundbreaking Research, Exploring New Technologies And Methodologies To Fuel Innovation.",
    icon: "/icons/icon.svg"
  },
  {
    id: 8,
    title: "Security",
    description: "Safeguard Our Digital Assets, Ensuring The Highest Levels Of Security And Resilience Against Evolving Threats.",
    icon: "/icons/icon.svg"
  }
];

const OurTeams = () => {
  return (
    <section className="bg-white">
      {/* First Section - Title and Description */}
      <div className="relative border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto relative">
          {/* Vertical Lines */}
          <div className="absolute inset-y-0 left-0 w-[1px] bg-gray-200" />
          <div className="absolute inset-y-0 right-0 w-[1px] bg-gray-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 py-12 md:py-16 px-4 md:px-16">
            {/* Left - Title */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900">
                Our Teams
              </h2>
            </div>
            {/* Right - Description */}
            <div>
              <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
                Explore Diverse Areas Such As Software Engineering, Design & UX, And
                More. To Find Where Your Unique Talents Can Shine And Drive Impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="relative">
        <div className="max-w-7xl mx-auto relative">
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-4">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 col-span-4 relative border-b border-gray-200">
              {/* Vertical Lines */}
              <div className="absolute inset-y-0 left-0 w-[1px] bg-gray-200" />
              <div className="hidden md:block absolute inset-y-0 left-1/4 w-[1px] bg-gray-200" />
              <div className="hidden md:block absolute inset-y-0 left-1/2 w-[1px] bg-gray-200" />
              <div className="hidden md:block absolute inset-y-0 left-3/4 w-[1px] bg-gray-200" />
              <div className="absolute inset-y-0 right-0 w-[1px] bg-gray-200" />

              {teams.slice(0, 4).map((team) => (
                <div key={team.id} className="py-8 md:py-12 px-4 md:px-6 border-b md:border-b-0 border-gray-200 md:border-none">
                  <div className="space-y-4">
                    <img 
                      src={team.icon} 
                      alt={team.title} 
                      className="w-10 h-10 md:w-12 md:h-12"
                    />
                    <h3 className="text-lg md:text-xl font-light text-gray-900">
                      {team.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
                      {team.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 col-span-4 relative border-b border-gray-200">
              {/* Vertical Lines */}
              <div className="absolute inset-y-0 left-0 w-[1px] bg-gray-200" />
              <div className="hidden md:block absolute inset-y-0 left-1/4 w-[1px] bg-gray-200" />
              <div className="hidden md:block absolute inset-y-0 left-1/2 w-[1px] bg-gray-200" />
              <div className="hidden md:block absolute inset-y-0 left-3/4 w-[1px] bg-gray-200" />
              <div className="absolute inset-y-0 right-0 w-[1px] bg-gray-200" />

              {teams.slice(4).map((team) => (
                <div key={team.id} className="py-8 md:py-12 px-4 md:px-6 border-b md:border-b-0 border-gray-200 md:border-none">
                  <div className="space-y-4">
                    <img 
                      src={team.icon} 
                      alt={team.title} 
                      className="w-10 h-10 md:w-12 md:h-12"
                    />
                    <h3 className="text-lg md:text-xl font-light text-gray-900">
                      {team.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
                      {team.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-16 md:h-24"></div>
    </section>
  );
};

export default OurTeams; 