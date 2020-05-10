import React from 'react';
import PropTypes from 'prop-types';
import styles from './VerticalBar.css';

const Header = ({ upDateHook, children }) => {
  const { upDated } = upDateHook();

  return (
    <header className={styles.Header}>
      <h3>{children}</h3>
      <div className={styles.updateStatus}>Last Updated: {upDated}</div>
    </header>
  );
};

Header.propTypes = {
  upDateHook: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default Header;
