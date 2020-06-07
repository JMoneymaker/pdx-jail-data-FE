import React from 'react';
import styles from './Footer.css';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.footerContent}>
        <h2>About This Project</h2>
        <p>
        The PDX Jail Data Dashboard was created for public information purposes, compiling and visualising key population data for persons jailed in the Portland Metro Area. 
        </p>
        <p>
        The data* is sourced from the jail roster information pages of <a href='https://web3.clackamas.us/roster/' target='_blank' rel="noopener noreferrer">Clackamas</a>, <a href='https://www.mcso.us/paid' target='_blank' rel="noopener noreferrer">Multnomah</a>, and <a href='https://www.co.washington.or.us/Sheriff/Jail/who-is-in-custody.cfm' target='_blank' rel="noopener noreferrer">Washington</a> counties, and updated each morning. 
        </p>
        <p>
        This is an ongoing project. Feel free to <a href='mailto:pdx.jail.data@gmail.com'>contact</a> the development team with questions, suggestions, or concerns.
        </p>
        <p className={styles.disclaimer}>
        *While every attempt is made to ensure data is accurate, this website is an unofficial source, therefore accuracy of data cannot be guaranteed. Please contact the Public Information Officer (PIO) for each county if you wish to verify specific data points.
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
