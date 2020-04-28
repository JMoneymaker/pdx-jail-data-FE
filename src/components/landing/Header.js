import React from 'react';
import styles from './Landing.css';

const Header = () => {

  return (
    <header className={styles.Header}>
      <h1>Portland Metro</h1>
      <h1>Jail Data Dashboard</h1>
      <div className={styles.updateStatus}>Last Updated: date information</div>
    </header>
  );
};

export default Header;
