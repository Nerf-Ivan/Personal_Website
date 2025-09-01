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
  SiDocker,
  SiKubernetes,
  SiPostman,
  SiFigma,
  SiOpenai,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { BiBot } from 'react-icons/bi';

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
    'CSS': <SiCss3 color="#1572b6" size={28} />,
    'Node.js': <SiNodedotjs color="#8cc84b" size={28} />,
    'Git': <SiGit color="#f05032" size={28} />,
    'TypeScript': <SiTypescript color="#3178c6" size={28} />,
    'MongoDB': <SiMongodb color="#47a248" size={28} />,
    'Tailwind CSS': <SiTailwindcss color="#06b6d4" size={28} />,
    'C': <SiC color="#06b6d4" size={28} />,
    'GitHub': <SiGithub color="#d8d8d8ff" size={28} />,
    'HTML': <SiHtml5 color="#ff7300ff" size={28} />,
    'Flask': <SiFlask color="#f5f5f5ff" size={28} />,
    'SQL': <TbDatabase color="#00a6f3ff" size={28} />,
    'Django': <SiDjango color="#ff7300ff" size={28} />,
    'Docker': <SiDocker color="#2496ed" size={28} />,
    'Kubernetes': <SiKubernetes color="#326ce5" size={28} />,
    'AWS': <div style={{ width: '28px', height: '28px', backgroundColor: '#ff9900', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: 'bold' }}>AWS</div>,
    'VS Code': <VscVscode color="#007acc" size={28} />,
    'Postman': <SiPostman color="#ff6c37" size={28} />,
    'Figma': <SiFigma color="#f24e1e" size={28} />,
    'AI/ML': <BiBot color="#10a37f" size={28} />
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
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "JavaScript", experience: 3, description: "ES6+, DOM manipulation, async programming" },
        { name: "Python", experience: 3, description: "Data structures, algorithms, web development" },
        { name: "C", experience: 2, description: "Systems programming, memory management" },
        { name: "TypeScript", experience: 1, description: "Type safety, interfaces, generics" },
        { name: "HTML", experience: 4, description: "Semantic markup, accessibility" },
        { name: "CSS", experience: 3, description: "Flexbox, Grid, animations, responsive design" }
      ]
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        { name: "React", experience: 1, description: "Hooks, Context API, component architecture" },
        { name: "Node.js", experience: 1, description: "Express.js, REST APIs, middleware" },
        { name: "Django", experience: 1, description: "MVC pattern, ORM, admin interface" },
        { name: "Flask", experience: 2, description: "Micro-framework, blueprints, extensions" },
        { name: "Tailwind CSS", experience: 1, description: "Utility-first CSS, responsive design" }
      ]
    },
    {
      name: "Databases & Cloud",
      skills: [
        { name: "MongoDB", experience: 1, description: "NoSQL, aggregation, indexing" },
        { name: "SQL", experience: 2, description: "Relational databases, complex queries" },
        { name: "Docker", experience: 1, description: "Containerization, Docker Compose" },
        { name: "Kubernetes", experience: 1, description: "Container orchestration, scaling" }
      ]
    },
    {
      name: "Tools & Platforms",
      skills: [
        { name: "Git", experience: 3, description: "Version control, branching, collaboration" },
        { name: "GitHub", experience: 3, description: "Repository management, CI/CD" },
        { name: "VS Code", experience: 4, description: "Extensions, debugging, integrated terminal" },
        { name: "Postman", experience: 2, description: "API testing, documentation" },
        { name: "Figma", experience: 2, description: "UI/UX design, prototyping" },
        { name: "AI/ML", experience: 3, description: "Machine learning, LLMs, prompt engineering" }
      ]
    }
  ];

  // Function to get experience display text
  const getExperienceText = (years) => {
    if (years === 1) return "1 year";
    return `${years} years`;
  };

  // Function to calculate progress bar width (max 5 years = 100%)
  const getProgressWidth = (years) => {
    const maxYears = 5;
    return Math.min((years / maxYears) * 100, 100);
  };

  return (
    <section className={styles.container} id="skills">
      {/* Background Layer */}
      <ParticleBackground />
      
      {/* Content Layer */}
      <div className={styles.content}>
        <h2 className={styles.heading} data-aos="fade-right">
          Skills & Expertise
        </h2>
        <p className={styles.subtitle} data-aos="fade-right" data-aos-delay="200">
          A comprehensive overview of my technical skills and years of experience
        </p>
        
        <div className={styles.categoriesContainer}>
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.name}
              className={styles.category}
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
            >
              <h3 className={styles.categoryTitle}>{category.name}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className={styles.skillItem}
                    data-aos="fade-up"
                    data-aos-delay={(categoryIndex * 100) + (skillIndex * 50)}
                  >
                    <div className={styles.skillHeader}>
                      <div className={styles.skillLogo}>
                        <SkillLogo skill={skill.name} />
                      </div>
                      <div className={styles.skillInfo}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillDescription}>{skill.description}</span>
                      </div>
                      <div className={styles.proficiencyLevel}>
                        <span className={styles.proficiencyText}>{getExperienceText(skill.experience)}</span>
                      </div>
                    </div>
                    
                    <div className={styles.progressBar}>
                      <div 
                        className={styles.progressFill}
                        style={{ width: `${getProgressWidth(skill.experience)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className={styles.skillsSummary} data-aos="fade-up">
          <div className={styles.summaryCard}>
            <h4>Frontend Development</h4>
            <p>React, TypeScript, HTML5, CSS3, Tailwind CSS</p>
          </div>
          <div className={styles.summaryCard}>
            <h4>Backend Development</h4>
            <p>Node.js, Python, Django, Flask, REST APIs</p>
          </div>
          <div className={styles.summaryCard}>
            <h4>DevOps & Cloud</h4>
            <p>Docker, Kubernetes, CI/CD, Git</p>
          </div>
          <div className={styles.summaryCard}>
            <h4>AI & Machine Learning</h4>
            <p>LLMs, Prompt Engineering, ML Models</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;