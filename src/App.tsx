import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Testimonials from './components/Testimonials';
import OurWork from './components/OurWork';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import AboutCompany from './pages/AboutCompany';
import Careers from './pages/Careers';
import JobOpenings from './pages/JobOpenings';
import TeamMember from './pages/TeamMember';
import Publications from './pages/Publications';
import SoftwareDevelopment from './pages/enterprise/SoftwareDevelopment';
import WebDevelopment from './pages/enterprise/WebDevelopment';
import MobileDevelopment from './pages/enterprise/MobileDevelopment';
import DevOps from './pages/enterprise/Devops';
import CloudConsulting from './pages/enterprise/CloudConsulting';
import ArtificialIntelligence from './pages/enterprise/ArtificialIntelligence';
import BackendDevelopment from './pages/enterprise/BackendDevelopment';
import FrontendDevelopment from './pages/enterprise/FrontendDevelopment';
import ARVRDevelopment from './pages/enterprise/ARVRDevelopment';
import BlockchainDevelopment from './pages/enterprise/BlockchainDevelopment';
import Portfolio from './pages/Portfolio';
import ScrollToTop from './components/ScrollToTop';
import AWSConsulting from './pages/enterprise/AWSConsulting';
import AzureConsulting from './pages/enterprise/AzureConsulting';
import GoogleCloudConsulting from './pages/enterprise/GoogleCloudConsulting';
import Healthcare from './pages/industry/Healthcare';
import Finance from './pages/industry/Finance';
import Ecommerce from './pages/industry/Ecommerce';
import Education from './pages/industry/Education';
import FoodBeverage from './pages/industry/FoodBeverage';
import Automotive from './pages/industry/Automotive';
import OurTeams from './components/OurTeams';
import ResearchAndDevelopment from './pages/ResearchAndDevelopment';

// Breadcrumb schema for better SEO
const getBreadcrumbSchema = (path: string) => {
  const items = path.split('/').filter(Boolean);
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      "item": `https://qourin.com/${items.slice(0, index + 1).join('/')}`
    }))
  };
  return breadcrumbList;
};

// ScrollHandler component to handle scroll after navigation
const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      // Small delay to ensure the contact section is rendered
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <ScrollHandler />
          <div className="min-h-screen bg-white dark:bg-gray-900">
            <SEO /> {/* Default SEO component */}
            <Navbar />
            <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
              <Routes>
                <Route path="/" element={
                  <>
                    <SEO 
                      title="Qourin - Technology Solutions & Digital Services"
                      description="Leading provider of innovative technology solutions including software development, cloud consulting, and digital transformation services."
                      keywords="technology solutions, software development, cloud consulting, digital transformation"
                      ogUrl="https://qourin.com"
                    />
                    <Home />
                    <About />
                    <OurTeams />
                    <Testimonials />
                    <OurWork />
                    <Contact />
                  </>
                } />
                <Route path="/about-company" element={
                  <>
                    <SEO 
                      title="About Qourin - Our Story & Mission"
                      description="Learn about Qourin's journey, our mission, values, and commitment to delivering innovative technology solutions."
                      keywords="about qourin, company mission, technology company, innovation"
                      ogUrl="https://qourin.com/about-company"
                      canonical="https://qourin.com/about-company"
                      schema={getBreadcrumbSchema('/about-company')}
                    />
                    <AboutCompany />
                  </>
                } />
                <Route path="/team-member" element={
                  <>
                    <SEO 
                      title="Team Members - Meet the Qourin Team"
                      description="Meet the talented team behind Qourin. Our diverse group of experts brings innovation and excellence to every project."
                      keywords="qourin team, leadership team, tech experts, software development team"
                      ogUrl="https://qourin.com/team-member"
                      canonical="https://qourin.com/team-member"
                      schema={getBreadcrumbSchema('/team-member')}
                    />
                    <TeamMember />
                  </>
                } />
                <Route path="/career" element={<Careers />} />
                <Route path="/job-opening" element={<JobOpenings />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/enterprise/software-development" element={<SoftwareDevelopment />} />
                <Route path="/enterprise/web-development" element={<WebDevelopment />} />
                <Route path="/enterprise/mobile-development" element={<MobileDevelopment />} />
                <Route path="/enterprise/artificial-intelligence" element={
                  <>
                    <SEO 
                      title="AI Development Services - Qourin"
                      description="Transform your business with our cutting-edge AI development services. Machine learning, deep learning, and AI consulting solutions."
                      keywords="AI development, machine learning, deep learning, artificial intelligence services"
                    />
                    <ArtificialIntelligence />
                  </>
                } />
                <Route path="/enterprise/backend-development" element={
                  <>
                    <SEO 
                      title="Backend Development Services - Qourin"
                      description="Robust backend development services for scalable and secure applications. API development, database design, and server optimization."
                      keywords="backend development, API development, database design, server optimization"
                    />
                    <BackendDevelopment />
                  </>
                } />
                <Route path="/enterprise/frontend-development" element={<FrontendDevelopment />} />
                <Route path="/enterprise/ar-vr-development" element={<ARVRDevelopment />} />
                <Route path="/enterprise/blockchain-development" element={<BlockchainDevelopment />} />
                <Route path="/enterprise/devops" element={<DevOps />} />
                <Route path="/enterprise/cloud-consulting" element={<CloudConsulting />} />
                <Route path="/enterprise/aws-consulting" element={<AWSConsulting />} />
                <Route path="/enterprise/azure-consulting" element={<AzureConsulting />} />
                <Route path="/enterprise/google-cloud-consulting" element={<GoogleCloudConsulting />} />
                <Route path="/industry/healthcare" element={<Healthcare />} />
                <Route path="/industry/finance" element={<Finance />} />
                <Route path="/industry/e-commerce" element={<Ecommerce />} />
                <Route path="/industry/education" element={<Education />} />
                <Route path="/industry/food-beverage" element={<FoodBeverage />} />
                <Route path="/industry/automotive" element={<Automotive />} />
                <Route path="/publications" element={
                  <>
                    <SEO 
                      title="Publications - Research & Insights | Qourin"
                      description="Explore Qourin's latest research papers, white papers, and technical publications on technology innovation and digital transformation."
                      keywords="research papers, white papers, technical publications, technology research, digital innovation"
                      ogUrl="https://qourin.com/publications"
                      canonical="https://qourin.com/publications"
                      schema={getBreadcrumbSchema('/publications')}
                    />
                    <Publications />
                  </>
                } />
                <Route path="/research-and-development" element={
                  <>
                    <SEO 
                      title="Research & Development - Innovation Hub | Qourin"
                      description="Explore Qourin's cutting-edge R&D initiatives, where we pioneer breakthrough technologies and innovative solutions that shape the future of digital transformation."
                      keywords="research and development, innovation, technology research, digital transformation"
                      ogUrl="https://qourin.com/research-and-development"
                      canonical="https://qourin.com/research-and-development"
                      schema={getBreadcrumbSchema('/research-and-development')}
                    />
                    <ResearchAndDevelopment />
                  </>
                } />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;