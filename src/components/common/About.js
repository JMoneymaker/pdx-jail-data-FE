import React from 'react';
import styles from '../App.css';


const About = () => {
  return (
    <div className='About open'>
      <div className='about-close'></div>
      <div className={About}>
        <div className='about-pane-close'>
          :: before
          :: after
        </div>
        <h2>About This Project</h2>
        <br></br>
        <p>
        The PDX Jail Data Dashboard was created for public information purposes, compiling and visualising key population data for persons jailed in the Portland Metro Area. 
        </p>
        <br></br>
        <p>
        The data* is sourced from the jail roster information pages of <a href='https://web3.clackamas.us/roster/'>Clackamas</a>, <a href='https://www.mcso.us/paid'>Multnomah</a>, and <a href='https://www.co.washington.or.us/Sheriff/Jail/who-is-in-custody.cfm'>Washington</a> counties, and updated each morning. 
        </p>
        <br></br>
        <p>
        This is an ongoing project. Please feel free to <a href='mailto:pdx.jail.data@gmail.com'>contact</a> the development team with questions, suggestions, or concerns.
        </p>
        <br></br>
        <p className={styles.disclaimer}>
        *While every attempt is made to ensure data is accurate, this website is an unofficial source, therefore accuracy of data cannot be guaranteed. Please contact the Public Information Officer (PIO) for each county if you wish to verify specific data points.
        </p>
      </div>
    </div>
  );
};

export default About;
