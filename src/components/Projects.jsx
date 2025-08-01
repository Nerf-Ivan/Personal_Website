// ProjectsShowcase.jsx
import React, { useState } from 'react';
import { ExternalLink, Github, Code, Zap, Star, Eye } from 'lucide-react';
import styles from './Projects.module.css';
const ProjectsShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Movie List (Frontend)",
      description: "A sleek React application that lets users explore popular movies and search for any film using The Movie Database (TMDB) API.",
      features: ["React", "JavaScript", "API"],
      image: "/ReactMovieList.png",
      demoUrl: "https://nerf-ivan.github.io/ReactMovieList",
      githubUrl: "https://github.com/Nerf-Ivan/ReactMovieList",
      status: "Featured",
      complexity: "Medium"
    },
    {
      id: 2,
      title: "(In Progress) Dictionary App using API",
      description: "A modern Full Stack Dictionary Application that will help students find and understand unfamiliar words fast and with ease.",
      features: ["React", "Node.js", "API"],
      image: "https://images.unsplash.com/photo-1622555063306-9930f396f051?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=200&h=200&fit=crop",
      demoUrl: "https://img.freepik.com/free-vector/red-grunge-style-coming-soon-design_1017-26691.jpg?semt=ais_hybrid&w=740",
      githubUrl: "https://github.com/Nerf-Ivan/",
      status: "In Progress",
      complexity: "Expert"
    },
      {
      id: 3,
      title: "Quote Collector",
      description: "Simple Quote Collector app that lets users add quotes and its author. Users can edit and delete quotes.",
      features: ["Django", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1553374402-559e8b431161?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cXVvdGVzfGVufDB8fDB8fHwy?w=800&h=200&fit=crop",
      demoUrl: "https://quote-collector.onrender.com",
      status: "Deployed",
      githubUrl: "https://github.com/Nerf-Ivan/Quote_Collector",
      complexity: "Medium"
    },
    {
      id: 4,
      title: "More Coming Soon!",
      description: "Working on it!",
      features: ["Coming Soon"],
      image: "https://images.unsplash.com/photo-1625470496744-a01bf36a262f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=500&h=400&fit=crop",
      demoUrl: "https://img.freepik.com/free-vector/red-grunge-style-coming-soon-design_1017-26691.jpg?semt=ais_hybrid&w=740",
      githubUrl: "https://github.com/Nerf-Ivan/",
      status: "Coming Soon",
      complexity: "Advanced"
    },
  ];

  const getStatusClass = (status) => {
    const statusClasses = {
      Featured: styles.statusFeatured,
      Live: styles.statusLive,
      Production: styles.statusProduction,
      Beta: styles.statusBeta,
      Mobile: styles.statusMobile,
      Enterprise: styles.statusEnterprise
    };
    return statusClasses[status] || styles.statusDefault;
  };

  const getComplexityIcon = (complexity) => {
    switch (complexity) {
      case 'Expert': return <Star className={styles.icon} />;
      case 'Advanced': return <Zap className={styles.icon} />;
      default: return <Code className={styles.icon} />;
    }
  };

  return (
    <div className={styles.container} id="projects">
      {/* Header */}
      <div className={styles.headerWrapper} >
        <div className={styles.titleSection}>
          <h1 className={styles.mainTitle}>
            Featured Projects
          </h1>
          <p className={styles.subtitle}>
            A collection of cutting-edge applications showcasing full-stack development, 
            emerging technologies, and scalable architecture solutions.
          </p>
        </div>
        
        {/* Stats Bar */}
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>3</div>
            <div className={styles.statLabel}>Projects</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>10+</div>
            <div className={styles.statLabel}>Technologies</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Open Source</div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className={styles.projectsWrapper}>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${styles.projectGroup} ${
                hoveredProject === project.id ? styles.projectHovered : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Main Card */}
              <div className={styles.projectCard}>
                {/* Status Badge */}
                <div className={styles.statusBadge}>
                  <div className={`${styles.statusPill} ${getStatusClass(project.status)}`}>
                    {project.status}
                  </div>
                </div>

                {/* Complexity Badge */}
                <div className={styles.complexityBadge}>
                  <div className={styles.complexityPill}>
                    {getComplexityIcon(project.complexity)}
                    {project.complexity}
                  </div>
                </div>

                {/* Project Image */}
                <div className={styles.imageContainer}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                  />
                  <div className={styles.imageGradient} />
                  
                  {/* Preview Overlay */}
                  <div className={`${styles.previewOverlay} ${
                    hoveredProject === project.id ? styles.overlayVisible : ''
                  }`}>
                    <Eye className={styles.eyeIcon} />
                  </div>
                </div>

                {/* Content */}
                <div className={styles.content}>
                  <h3 className={styles.projectTitle}>
                    {project.title}
                  </h3>
                  
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className={styles.techStack}>
                    {project.features.map((tech) => (
                      <span key={tech} className={styles.techPill}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className={styles.actionButtons}>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.demoButton}
                    >
                      <ExternalLink className={styles.buttonIcon} />
                      Live Demo
                    </a>
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.githubButton}
                    >
                      <Github className={styles.buttonIcon} />
                      Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating Particles Effect */}
              {hoveredProject === project.id && (
                <div className={styles.particlesContainer}>
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={styles.particle}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className={styles.ctaWrapper}>
        <div className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>
            Ready to Build Something Amazing?
          </h2>
          <p className={styles.ctaDescription}>
            These projects represent just a glimpse of what's possible. 
            Let's discuss how we can bring your vision to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;