import React, { useEffect, useRef } from 'react';
import styles from './Home.module.css';
import TypedText from './TypedText.jsx';
import CodeTyper from './TypedCode.jsx';

const Home = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const loadParticles = () => {
      // Clear any existing particles
      if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom.forEach(pjs => {
          if (pjs.pJS) {
            pjs.pJS.fn.vendors.destroypJS();
          }
        });
        window.pJSDom = [];
      }

      // Load particles.js script
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js';
      script.onload = () => {
        // Initialize particles after script loads
        setTimeout(() => {
          initParticles();
        }, 100);
      };
      
      // Remove existing script if it exists
      const existingScript = document.querySelector('script[src*="particles.min.js"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      document.head.appendChild(script);
    };

    const initParticles = () => {
      if (!window.particlesJS) {
        console.error('particlesJS not loaded');
        return;
      }

      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 1000
            }
          },
          color: {
            value: ["#ffffff", "#00ffff", "#4080ff"]
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.9,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.4,
              sync: false
            }
          },
          size: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.2,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 200,
            color: "#00ffff",
            opacity: 0.4,
            width: 0.8
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
    };

    loadParticles();

    // Cleanup function
    return () => {
      if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom.forEach(pjs => {
          if (pjs.pJS) {
            pjs.pJS.fn.vendors.destroypJS();
          }
        });
        window.pJSDom = [];
      }
    };
  }, []);

  const sentences = [
    "// Hi and welcome to my website!",
    "/*",
    "I am a Developer from South Africa 🇿🇦",
    "I love coding and creating new things.",
    " */",
    "", 
    "/* ======================== *",
    " * Welcome Aboard!     *",
    " * ======================== */",
    " */",
  ];

  return (
    <section className={styles.section} data-aos="fade-up">
      {/* Particles.js Background */}
      <div 
        id="particles-js"
        className={styles.particlesContainer}
      />
      
      {/* Content Layer */}
      <div className={styles.content}>
        <h1 className={styles.heading}>Hello, I'm Ivan 👋</h1>
        <TypedText
          strings={['Hello, world!', 'Welcome to my page!', 'Enjoy your stay!']}
          typeSpeed={60}
          backSpeed={30}
          loop={true}
        />
        <CodeTyper lines={sentences} />
        <p className={styles.subtitle}>Aspiring software engineer. Scroll to learn more!</p>
      </div>
    </section>
  );
};

export default Home;