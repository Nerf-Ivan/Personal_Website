import React from 'react';
import styles from './Certificates.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Certificates = () => {
  // Your actual certificates from the public/certificates folder
  const certificates = [
    {
      id: 1,
      name: "CS50x - Introduction to Computer Science",
      issuer: "Harvard University",
      date: "2024",
      image: "/certificates/CS50x_Certificate.jpg",
      link: "https://cs50.harvard.edu/certificates/fc6f74b2-f23d-4d7e-9008-4d2a71a6fb01",
      description: "Comprehensive introduction to computer science and programming"
    },
    {
      id: 2,
      name: "Frontend Development with React",
      issuer: "IBM",
      date: "2025",
      image: "/certificates/Frontend_with_React_Certificate.jpg",
      link: "https://www.coursera.org/account/accomplishments/verify/TLOZS9EFG0KW",
      description: "Modern React development with hooks and advanced concepts"
    },
    {
      id: 3,
      name: "Backend Development with Node.js & Express",
      issuer: "IBM",
      date: "2025",
      image: "/certificates/Backend_with_nodejs_and_express_Certificate.jpg",
      link: "https://www.coursera.org/account/accomplishments/verify/S9T5EPF4MJFR",
      description: "Server-side development with Node.js and Express framework"
    },
    {
      id: 4,
      name: "Django Application Development with SQL and Databases",
      issuer: "IBM",
      date: "2025",
      image: "/certificates/Django_and_SQLDatabases_Certificate.jpg",
      link: "https://www.coursera.org/account/accomplishments/verify/6DQZMV0UKLVN",
      description: "Full-stack development with Django and database management"
    },
    {
      id: 5,
      name: "AI Applications with Python & Flask",
      issuer: "IBM",
      date: "2025",
      image: "/certificates/AI_apps_with_python_and_flask_Certificate.jpg",
      link: "#",
      description: "Building AI-powered applications with Python and Flask"
    },
    {
      id: 6,
      name: "Cloud Computing",
      issuer: "IBM",
      date: "2025",
      image: "/certificates/Cloud_Computing_Certificate.jpg",
      link: "https://www.coursera.org/account/accomplishments/verify/0KSLC6OLBTOR",
      description: "Cloud infrastructure and deployment strategies"
    },
    {
      id: 7,
      name: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
      issuer: "IBM",
      date: "2025",
      image: "/certificates/Containers_with_docker_and_kubernetes_Certificate.jpg",
      link: "https://www.coursera.org/account/accomplishments/verify/BHOXKGD4B5NI",
      description: "Containerization and orchestration with Docker & K8s"
    },
    {
      id: 8,
      name: "Application Development using Microservices and Serverless",
      issuer: "IBM",
      date: "2025",
      image: "/certificates/Microservices_and_Serverless_Certificate.jpg",
      link: "https://www.coursera.org/account/accomplishments/verify/DC4J0CNSCPDV",
      description: "Microservices architecture and serverless computing"
    },
    {
      id: 9,
      name: "Python for Data Science, AI & Development",
      issuer: "IBM",
      date: "2025",
      image: "/certificates/python_for_datascience_and_AI_certificate.jpg",
      link: "https://www.coursera.org/account/accomplishments/verify/FRB342UW0WLK",
      description: "Data science and AI applications with Python"
    },
    {
      id: 10,
      name: "Introduction to Software Engineering",
      issuer: "IBM",
      date: "2025",
      image: "/certificates/Introduction_to_Software_Engineering_Certificate.jpg",
      link: "https://www.coursera.org/account/accomplishments/verify/C72F385JDTQY",
      description: "Software engineering principles and best practices"
    },
    {
      id: 11,
      name: "Git & GitHub",
      issuer: "IBM",
      date: "2025",
      image: "/certificates/Git_and_Github_Certificate.jpg",
      link: "https://www.coursera.org/account/accomplishments/verify/S78PP1SVJFYA",
      description: "Version control and collaborative development"
    },
    {
      id: 12,
      name: "Introduction to HTML, CSS & JavaScript",
      issuer: "IBM",
      date: "2025",
      image: "/certificates/Intro_to_HTML_CSS_JS_Certificate.jpg",
      link: "https://www.coursera.org/account/accomplishments/verify/N1CMB8T68I5J",
      description: "Web development fundamentals and frontend technologies"
    }
  ];

  return (
    <section id="certificates" className={styles.section} data-aos="fade-up">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <FontAwesomeIcon icon={faCertificate} className={styles.titleIcon} />
            Certificates & Achievements
          </h2>
          <p className={styles.subtitle}>
            Professional certifications that validate my skills and expertise
          </p>
        </div>

        <div className={styles.certificatesGrid}>
          {certificates.map((cert, index) => (
            <div 
              key={cert.id} 
              className={styles.certificateCard}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={styles.certificateImage}>
                <img 
                  src={cert.image} 
                  alt={cert.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className={styles.placeholder}>
                  <FontAwesomeIcon icon={faCertificate} />
                </div>
              </div>
              
              <div className={styles.certificateContent}>
                <h3 className={styles.certificateName}>{cert.name}</h3>
                <p className={styles.certificateIssuer}>{cert.issuer}</p>
                <p className={styles.certificateDate}>{cert.date}</p>
                <p className={styles.certificateDescription}>{cert.description}</p>
                
                <a 
                  href={cert.link} 
                  className={styles.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.addMore}>
          <p>More certificates coming soon...</p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
