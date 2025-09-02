import React from 'react';
import styles from './Certificates.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Certificates = () => {
  // actual certificates from the public/certificates folder
  const certificates = [
    {
      id: 1,
      name: "IBM Full Stack Software Developer",
      issuer: "IBM",
      date: "2025",
      image: "/certificates/Full_Stack_Developer_Certificate.jpeg",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/FQDDAD2R7293",
      description: "This program covered full stack development, including front-end and back-end technologies, databases, APIs, and deployment, giving me the skills to build and deploy web applications from start to finish."
    },
    {
      id: 2,
      name: "CS50x - Introduction to Computer Science",
      issuer: "Harvard University",
      date: "2024",
      image: "/certificates/CS50x_Certificate.jpg",
      link: "https://cs50.harvard.edu/certificates/fc6f74b2-f23d-4d7e-9008-4d2a71a6fb01",
      description: "Comprehensive introduction to computer science and programming"
    },
    {
      id: 3,
      name: "AWS Cloud Practitioner Essentials",
      issuer: "AWS",
      date: "2025",
      image: "/certificates/AWS_Cloud_Practitioner_Certificate.png",
      link: "https://onedrive.live.com/?ls=true&cid=C2FE2E4537DAD8EC&id=C2FE2E4537DAD8EC%21s7fdad9940c7246409649cb06dab6fcf5&parId=root&o=OneUp",
      description: "Completed the foundational course covering core AWS cloud concepts, services, security, pricing, and basic architectural principles."
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
