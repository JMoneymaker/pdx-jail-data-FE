import React from 'react';
import PropTypes from 'prop-types';
import styles from '../chart-scroll/VerticalBar.css';
import useUpDate from '../../hooks/useUpDated';

const HeaderBasic = ({ title, category }) => {
  const { upDated } = useUpDate();
  const date = upDated.slice(0, 13);

  return (
    <header className={styles.titleWrapper}>
      <h4>{title} - {date}</h4>
      <h3>{category}</h3>
    </header>
  );
};

HeaderBasic.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default HeaderBasic;
