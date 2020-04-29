import React from 'react';
import PropTypes from 'prop-types';
import styles from './Landing.css';

const Header = ({ upDateHook }) => {
  const { upDated } = upDateHook();


  return (
    <header className={styles.Header}>
      <h1>Jail Data PDX</h1>
      <h1>County Dashboard</h1>
      <div className={styles.updateStatus}>Last Updated: {upDated}</div>
    </header>
  );
};

Header.propTypes = {
  upDateHook: PropTypes.number.isRequired,
};

export default Header;