import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';

import Home from './components/Home.jsx';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar.jsx';
import ProjectsShowcase from './components/Projects.jsx';
import Certificates from './components/Certificates.jsx';
import Footer from './components/Footer.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import BugCursor from './components/BugCursor.jsx';


function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div>
      <ScrollProgress />
      <BugCursor />
      <Navbar />
      <Home />
      <Skills />
      <Certificates />
      <ProjectsShowcase/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
