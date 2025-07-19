import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  faBolt,
  faPhone,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

export const navItems = [
  { id: "skills", label: "Skills", icon: faBolt },
  { id: "contact", label: "Contact", icon: faPhone },
  { id: "projects", label: "Projects", icon: faBriefcase },
];
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleBackdropClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.navbarContainer}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <img
                src="/favicon-32x32.png"
                alt="Logo"
                className={styles.logoImage}
              />
              <div className={styles.logoGlow}></div>
            </div>
            <span className={styles.logoText}>Ivan Swanepoel</span>
          </div>

          <div
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={handleToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul
            className={`${styles.navList} ${menuOpen ? styles.showMenu : ""}`}
          >
            {navItems.map((item, index) => (
              <li
                className={styles.navItem}
                key={item.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  activeClass={styles.active}
                  onClick={handleLinkClick}
                  className={styles.navLink}
                  onSetActive={() => setActiveSection(item.id)}
                >
                  <span className={styles.navIcon}>
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                  <span className={styles.navLabel}>{item.label}</span>
                  <div className={styles.navIndicator}></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {menuOpen && (
        <div className={styles.navBackdrop} onClick={handleBackdropClick}></div>
      )}
    </>
  );
};

export default Navbar;
