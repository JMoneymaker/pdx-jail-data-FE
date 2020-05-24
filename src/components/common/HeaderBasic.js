import React from 'react';
import PropTypes from 'prop-types';
import styles from '../chart-scroll/VerticalBar.css';

const HeaderBasic = ({ title, category }) => {

  return (
    <header className={styles.titleWrapper}>
      <h4>{title}</h4>
      <h3>{category}</h3>
    </header>
  );
};

HeaderBasic.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default HeaderBasic;
