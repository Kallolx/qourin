import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Stats from './components/Stats';
import HowWeWork from './components/HowWeWork';
import Testimonials from './components/Testimonials';
import OurWork from './components/OurWork';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutCompany from './pages/AboutCompany';
import Careers from './pages/Careers';
import JobOpenings from './pages/JobOpenings';
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

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Navbar />
          <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
            <Routes>
              <Route path="/" element={
                <>
                  <Home />
                  <About />
                  <Stats />
                  <HowWeWork />
                  <Testimonials />
                  <OurWork />
                  <Contact />
                </>
              } />
              <Route path="/about-company" element={<AboutCompany />} />
              <Route path="/career" element={<Careers />} />
              <Route path="/job-opening" element={<JobOpenings />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/enterprise/software-development" element={<SoftwareDevelopment />} />
              <Route path="/enterprise/web-development" element={<WebDevelopment />} />
              <Route path="/enterprise/mobile-development" element={<MobileDevelopment />} />
              <Route path="/enterprise/artificial-intelligence" element={<ArtificialIntelligence />} />
              <Route path="/enterprise/backend-development" element={<BackendDevelopment />} />
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
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;