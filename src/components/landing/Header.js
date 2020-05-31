import React from 'react';
import PropTypes from 'prop-types';
import styles from './Landing.css';

const Header = ({ upDateHook }) => {
  const { upDated } = upDateHook();


  return (
    <header className={styles.Header}>
      <h1>Jail Data PDX</h1>
      <h1>County Dashboard</h1>
      <div className={styles.updateStatus}><h2>Last Updated: {upDated}</h2></div>
    </header>
  );
};

Header.propTypes = {
  upDateHook: PropTypes.func.isRequired,
};

export default Header;
