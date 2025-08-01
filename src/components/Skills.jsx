
import React, { useEffect, useRef } from 'react';
import styles from './Skills.module.css';
import { TbDatabase } from "react-icons/tb";
import { 
  SiReact, 
  SiPython, 
  SiCss3, 
  SiJavascript, 
  SiNodedotjs, 
  SiGit,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiC,
  SiGithub,
  SiHtml5,
  SiFlask,
  SiDjango,
} from 'react-icons/si';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      // Reinitialize particles on resize
      initParticles();
    };

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      }
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000);
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        ));
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections between nearby particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.globalAlpha = 0.1 * (1 - distance / 100);
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={styles.particleCanvas}
    />
  );
};

// Skill logos component using React Icons
const SkillLogo = ({ skill }) => {
  const logoMap = {
    'JavaScript': <SiJavascript color="#f7df1e" size={28} />,
    'React': <SiReact color="#61dafb" size={28} />,
    'Python': <SiPython color="#3776ab" size={28} />,
    'CSS Modules': <SiCss3 color="#1572b6" size={28} />,
    'Node.js': <SiNodedotjs color="#8cc84b" size={28} />,
    'Git': <SiGit color="#f05032" size={28} />,
    'TypeScript': <SiTypescript color="#3178c6" size={28} />,
    'MongoDB': <SiMongodb color="#47a248" size={28} />,
    'Tailwind CSS': <SiTailwindcss color="#06b6d4" size={28} />,
    'C': <SiC color="#06b6d4" size={28} />,
    'Github': <SiGithub color="#d8d8d8ff" size={28} />,
    'HTML': <SiHtml5 color="#ff7300ff" size={28} />,
    'Flask': <SiFlask color="#f5f5f5ff" size={48} />,
    'SQL': <TbDatabase color="#00a6f3ff" size={48} />,
    'Django': <SiDjango color="#ff7300ff" size={48} />

  };

  return logoMap[skill] || (
    <div style={{ 
      width: '28px', 
      height: '28px', 
      backgroundColor: '#666', 
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: '14px',
      fontWeight: 'bold'
    }}>
      ?
    </div>
  );
};

const Skills = () => {
  const skills = [
    'JavaScript',
    'Python', 
    'C',
    'React',
    'CSS Modules',
    'HTML',
    'Node.js',
    'Flask',
    'Git',
    'Github',
    'TypeScript',
    'MongoDB',
    'SQL',
    'Django'
  ];

  return (
    <section className={styles.container} id="skills">
      {/* Background Layer */}
      <ParticleBackground />
      
      {/* Content Layer */}
      <div className={styles.content}>
        <h2 className={styles.heading} data-aos="fade-right">
          My Skills
        </h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div 
              key={skill}
              className={styles.skillItem}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              <div className={styles.skillLogo}>
                <SkillLogo skill={skill} />
              </div>
              <span className={styles.skillName}>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;