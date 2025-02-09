import { ArrowUpRight } from "lucide-react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import OurWork from "../components/OurWork";

// Team member data
const teamMembers = [
  {
    name: "Indra Prosad Roy",
    role: "Founder & CEO",
    image: "/images/indra-prosad-roy.png",
    linkedin: "#",
  },
  {
    name: "Sm Badsha Bappi",
    role: "CTO",
    image: "/images/sm-badsha-bappi.png",
    linkedin: "#",
  },
  {
    name: "Al Mahbub",
    role: "Senior Full Stack Developer",
    image: "/images/al-mahbub.png",
    linkedin: "#",
  },
  {
    name: "Moshahed Hossain",
    role: "Senior Signal Processing Engineer",
    image: "/images/moshahed-hossain.png",
    linkedin: "#",
  },
  {
    name: "Anik Sarker",
    role: "Senior Network Engineer",
    image: "/images/anik-sarker.png",
    linkedin: "#",
  },
  {
    name: "Md Abdullah Al Jubayer",
    role: "Digital Marketing Expert",
    image: "/images/md-abdullah-al-jubayer.png",
    linkedin: "#",
  },
  {
    name: "Abrar Akib",
    role: "UI/UX Designer",
    image: "/images/abrar-akib.png",
    linkedin: "#",
  },
  {
    name: "Md. Sumon Biswas",
    role: "Lead Product Designer",
    image: "/images/md-sumon-biswas.png",
    linkedin: "#",
  },
  {
    name: "Sowmik Sarker",
    role: "Senior AI Engineer",
    image: "/images/sowmik-sarker.png",
    linkedin: "#",
  },
];

const TeamMember = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative mt-8 md:mt-12">
        {/* Hero Image */}
        <div className="w-full h-[60vh] md:h-[80vh] relative">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"
            alt="Team collaboration"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Content Container */}
          <div className="absolute inset-0 flex items-end pb-[60px] md:pb-[72px]">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
              <div className="bg-white w-full md:w-[110%] ml-0 p-6 md:p-12 lg:p-16">
                <div className="grid grid-cols-12 gap-6 md:gap-12">
                  {/* Left Side - Title */}
                  <div className="col-span-12 md:col-span-6">
                    <h1 className="text-3xl md:text-4xl lg:text-[50px] font-light text-gray-900 leading-[1.2] md:leading-[1.1]">
                      Qourin <br /> Leadership Team
                    </h1>
                  </div>

                  {/* Right Side - Description */}
                  <div className="col-span-12 md:col-span-6 md:pr-12 lg:pr-24">
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      Our team of experts brings together diverse skills and
                      experiences to deliver innovative solutions that drive our
                      clients' success. Get to know the people who make Qourin
                      exceptional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Get in Touch Button */}
          <a
            href="/job-opening"
            className="absolute bottom-0 left-0 right-0 block"
          >
            <div className="bg-teal-600 hover:bg-teal-700 transition-colors">
              <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="w-full md:w-[95%] ml-0">
                  <div className="flex items-center justify-between py-4 md:py-6 px-6 md:px-12 lg:px-16 cursor-pointer">
                    <span className="text-lg md:text-xl font-light text-white">
                      Join our team
                    </span>
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Leadership Team Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-[#008080] p-6 flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-white">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white text-lg font-light mb-1">
                  {member.name}
                </h3>
                <p className="text-white/80 text-sm mb-4">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Departments Section*/}
      <OurWork />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TeamMember;
