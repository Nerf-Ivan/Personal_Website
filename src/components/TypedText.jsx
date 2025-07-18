import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './TypedText.module.css';
import styles from './TypedText.module.css';


const TypedText = ({ strings, typeSpeed = 50, backSpeed = 25, loop = true }) => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(typedRef.current, {
      strings,
      typeSpeed,
      backSpeed,
      loop,
    });

    return () => {
      // Destroy instance on cleanup
      typedInstance.current.destroy();
    };
  }, [strings, typeSpeed, backSpeed, loop]);

  return <span ref={typedRef} className={styles.typing} />;
};

export default TypedText;
