import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Stats from './components/Stats';
import HowWeWork from './components/HowWeWork';
import Testimonials from './components/Testimonials';
import OurWork from './components/OurWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Home />
      <About />
      <Stats />
      <HowWeWork />
      <Testimonials />
      <OurWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;