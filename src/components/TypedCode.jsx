import React, { useEffect } from 'react';
import styles from './TypedCode.module.css';
import Typed from 'typed.js';

const CodeTyper = ({ lines }) => {
  useEffect(() => {
    // Initialize Typed.js for each line
    const typedInstances = lines.map((_, index) => {
      const typed = new Typed(`#typed-${index}`, {
        strings: [lines[index]],
        typeSpeed: 50, // Speed of typing (ms per character)
        backSpeed: 0, // No backspacing
        loop: false, // No repeating
        showCursor: false, // Show typing cursor

        startDelay: index * 1500, // Delay each line by 1.5s
      });
      return typed;
    });

    // Cleanup Typed.js instances on unmount
    return () => {
      typedInstances.forEach(typed => typed.destroy());
    };
  }, [lines]);

  return (
    <div className={styles.codeContainer}>
      <div className={styles.lineNumbers}>
        {lines.map((_, index) => (
          <span key={index} className={styles.lineNumber}></span>
        ))}
      </div>
      <div className={styles.codeContent}>
        {lines.map((_, index) => (
          <div key={index} className={styles.codeLine}>
            <code id={`typed-${index}`} className={styles.codeText}></code>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeTyper;