import React from 'react';
import PropTypes from 'prop-types';
import styles from '../charts/Charts.css';

const Header = ({ upDateHook }) => {
  const { upDated } = upDateHook();


  return (
    <header className={styles.Header}>
      <h1>Number of People in Custody by Race</h1>
      <div className={styles.updateStatus}>Last Updated: {upDated}</div>
    </header>
  );
};

Header.propTypes = {
  upDateHook: PropTypes.func.isRequired,
};

export default Header;
