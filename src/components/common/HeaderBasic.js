import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';

const HeaderBasic = ({ title, category }) => {

  return (
    <header className={styles.HeaderBasic}>
      <h3>{title}</h3>
      <h2>{category}</h2>
    </header>
  );
};

HeaderBasic.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default HeaderBasic;
