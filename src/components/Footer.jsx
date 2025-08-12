import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCode } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.copyright}>
            <p>
              © {currentYear} <strong>Ivan Swanepoel</strong>. All rights reserved.
            </p>
          </div>
          
          
          <div className={styles.links}>
            <a 
              href="https://github.com/Nerf-Ivan" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/ivan-swanepoel" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>
            <a 
              href="mailto:ivan.swanepoel.dev@gmail.com" 
              className={styles.link}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
