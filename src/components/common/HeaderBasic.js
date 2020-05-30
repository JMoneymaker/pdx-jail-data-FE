import React from 'react';
import PropTypes from 'prop-types';
import styles from '../chart-scroll/ChartScroll.css';
import CSV from './CSV';

const HeaderBasic = ({ title, category, data, updated, filename  }) => {

  return (
    <header className={styles.headWrapper}>
      <div className={styles.titleContainer}>
        <div className={styles.titleWrapper}>
          <h3>{title} - {updated}</h3>
          <h1>{category}</h1>
        </div>
        <CSV 
          data={data}
          filename={filename}
        ></CSV>
      </div>
    </header>
  );
};

HeaderBasic.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  updated: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired
};

export default HeaderBasic;
