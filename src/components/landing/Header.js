import React from 'react';
import PropTypes from 'prop-types';
import styles from './Landing.css';

const Header = ({ updated }) => {

  return (
    <header className={styles.Header}>
      <h1>Jail Data PDX</h1>
      <h1>County Dashboard</h1>
      <div className={styles.updateStatus}><h4>Last Updated: {updated}</h4></div>
    </header>
  );
};

Header.propTypes = {
  updated: PropTypes.string.isRequired,
};

export default Header;
