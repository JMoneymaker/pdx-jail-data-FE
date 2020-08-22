import React from 'react';
import About from './About';
import styles from './Footer.css';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.footerContent}>
        <About />
      </div>
    </footer>
  );
};

export default Footer;
