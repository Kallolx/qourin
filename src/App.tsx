import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Portfolio from './pages/Portfolio';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
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
            <Route path="/enterprise/devops" element={<DevOps />} />
            <Route path="/enterprise/cloud-consulting" element={<CloudConsulting />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;