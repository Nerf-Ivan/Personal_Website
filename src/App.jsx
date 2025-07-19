import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';

import Home from './components/Home.jsx';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar.jsx';
import ProjectsShowcase from './components/Projects.jsx';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Contact />
      <ProjectsShowcase/>
    </div>
  );
}

export default App;
