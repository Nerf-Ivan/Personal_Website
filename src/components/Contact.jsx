import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, Instagram, Twitter, Github, Mail, CheckCircle, AlertCircle, Award } from 'lucide-react';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  // EmailJS configuration - you can switch back to env vars once working
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_NOTIFICATION_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const EMAILJS_AUTO_REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
  
  // Initialize EmailJS
  useEffect(() => {
    // Load EmailJS script dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init(EMAILJS_PUBLIC_KEY);
        console.log('EmailJS initialized successfully');
      }
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [EMAILJS_PUBLIC_KEY]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced Particle class with darker theme
    class Particle {
      constructor() {
        const rect = canvas.getBoundingClientRect();
        this.x = Math.random() * rect.width;
        this.y = Math.random() * rect.height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.4 + 0.2;
        this.color = this.getRandomColor();
        this.originalRadius = this.radius;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseOffset = Math.random() * Math.PI * 2;
      }

      getRandomColor() {
        const colors = ['#64ffda', '#00d4ff', '#4a9eff', '#8b5cf6', '#06b6d4'];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        const rect = canvas.getBoundingClientRect();
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > rect.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > rect.height) this.vy = -this.vy;

        // Pulse effect
        this.radius = this.originalRadius + Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 0.5;
      }

      draw() {
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // Create particles with responsive count
    const createParticles = () => {
      particlesRef.current = [];
      const rect = canvas.getBoundingClientRect();
      const particleCount = Math.min(150, Math.floor((rect.width * rect.height) / 10000));
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    // Enhanced animation loop
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Draw connections with improved performance
      particlesRef.current.forEach((particle, i) => {
        particle.update();
        particle.draw();

        // Draw lines between nearby particles (optimized for mobile)
        const maxConnections = window.innerWidth < 768 ? 3 : 5;
        let connections = 0;
        
        for (let j = i + 1; j < particlesRef.current.length && connections < maxConnections; j++) {
          const dx = particle.x - particlesRef.current[j].x;
          const dy = particle.y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < (window.innerWidth < 768 ? 80 : 120)) {
            ctx.globalAlpha = 0.08 * (1 - distance / 120);
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            ctx.stroke();
            connections++;
          }
        }
        ctx.globalAlpha = 1;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  // Validate all fields
  if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
    setErrorMessage('Please fill in all fields.');
    setShowError(true);
    setTimeout(() => setShowError(false), 5000);
    return;
  }

  // Additional email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    setErrorMessage('Please enter a valid email address.');
    setShowError(true);
    setTimeout(() => setShowError(false), 5000);
    return;
  }

  setIsSubmitting(true);
  setShowError(false);

  try {
    if (!window.emailjs) {
      throw new Error('EmailJS not loaded');
    }

    const currentTime = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });

    const baseParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      time: currentTime
    };

    // Send notification to you
    const notificationParams = {
      ...baseParams,
      to_email: 'ivan.swanepoel.dev@gmail.com' // Explicitly set for notification
    };
    console.log('Sending notification with:', {
      SERVICE_ID: EMAILJS_SERVICE_ID,
      TEMPLATE_ID: EMAILJS_NOTIFICATION_TEMPLATE_ID,
      PUBLIC_KEY: EMAILJS_PUBLIC_KEY,
      templateParams: notificationParams
    });
    const notificationResult = await window.emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_NOTIFICATION_TEMPLATE_ID,
      notificationParams,
      EMAILJS_PUBLIC_KEY
    );
    console.log('Notification Result:', notificationResult);

    // Send auto-reply to user
    const autoReplyParams = {
      ...baseParams,
      to_email: formData.email // Explicitly set for auto-reply
    };
    console.log('Sending auto-reply with:', {
      SERVICE_ID: EMAILJS_SERVICE_ID,
      TEMPLATE_ID: EMAILJS_AUTO_REPLY_TEMPLATE_ID,
      PUBLIC_KEY: EMAILJS_PUBLIC_KEY,
      templateParams: autoReplyParams
    });
    const autoReplyResult = await window.emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_AUTO_REPLY_TEMPLATE_ID,
      autoReplyParams,
      EMAILJS_PUBLIC_KEY
    );
    console.log('Auto-Reply Result:', autoReplyResult);

    if (notificationResult.status === 200 && autoReplyResult.status === 200) {
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setShowSuccess(false), 4000);
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    setErrorMessage(`Failed to send message: ${error.message}. Please try again or email me directly.`);
    setShowError(true);
    setTimeout(() => setShowError(false), 5000);
  } finally {
    setIsSubmitting(false);
  }
};

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      Icon: Linkedin,
      url: 'https://linkedin.com/in/ivan-swanepoel',
      color: '#0077B5'
    },
    {
      name: 'Instagram',
      Icon: Instagram,
      url: 'https://instagram.com/ivan._.swanepoel',
      color: '#E4405F'
    },
    {
      name: 'X (Twitter)',
      Icon: Twitter,
      url: 'https://x.com/devswanepoel',
      color: '#1DA1F2'
    },
    {
      name: 'GitHub',
      Icon: Github,
      url: 'https://github.com/Nerf-Ivan',
      color: '#333'
    },
    {
      name: 'Email',
      Icon: Mail,
      url: 'mailto:ivan.swanepoel.dev@gmail.com',
      color: '#EA4335'
    },
    {
      name: 'Credly',
      Icon: Award,
      url: 'https://www.credly.com/users/ivan-swanepoel/badges#credly',
      color: '#EA4335'
    }
  ];

  return (
    <div className={styles.contactContainer} id="contact">
      <canvas 
        ref={canvasRef}
        className={styles.particlesCanvas}
      />
      
      {/* Success Message */}
      {showSuccess && (
        <div className={styles.successMessage}>
          <div className={styles.successCard}>
            <div className={styles.successIcon}>
              <CheckCircle size={24} />
            </div>
            <div className={styles.successContent}>
              <h3>Message Sent Successfully!</h3>
              <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {showError && (
        <div className={styles.errorMessage}>
          <div className={styles.errorCard}>
            <div className={styles.errorIcon}>
              <AlertCircle size={24} />
            </div>
            <div className={styles.errorContent}>
              <h3>Message Failed to Send</h3>
              <p>{errorMessage}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Social Sidebar */}
      <div className={`${styles.socialSidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarToggle} onClick={toggleSidebar}>
          <div className={`${styles.toggleIcon} ${sidebarOpen ? styles.toggleOpen : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <div className={styles.socialLinks}>
          {socialLinks.map((link, index) => {
            const { Icon } = link;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  '--link-color': link.color
                }}
              >
                <span className={styles.socialIcon}>
                  <Icon size={20} />
                </span>
                <span className={styles.socialName}>{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Sidebar Backdrop */}
      {sidebarOpen && (
        <div className={styles.sidebarBackdrop} onClick={toggleSidebar}></div>
      )}

      <div className={styles.contactOverlay}>
        <div className={styles.contactContent}>
          <div className={styles.contactHeader}>
            <h2 className={styles.contactTitle}>Let's Connect</h2>
            <p className={styles.contactSubtitle}>
              Ready to bring your ideas to life? Drop me a message and let's create something amazing together!
            </p>
          </div>

          <div className={styles.contactGrid}>
            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <Mail size={24} />
                </div>
                <div className={styles.infoText}>
                  <h4>Email</h4>
                  <a href="mailto:ivan.swanepoel.dev@gmail.com" className={styles.emailLink}>
                    ivan.swanepoel.dev@gmail.com
                  </a>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🌍</div>
                <div className={styles.infoText}>
                  <h4>Location</h4>
                  <p>Johannesburg, South Africa</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>⚡</div>
                <div className={styles.infoText}>
                  <h4>Response Time</h4>
                  <p>Usually within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.contactForm}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  className={styles.formTextarea}
                  rows="5"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.spinner}></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span className={styles.buttonIcon}></span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;