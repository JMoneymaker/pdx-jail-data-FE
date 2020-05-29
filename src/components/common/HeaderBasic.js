import React from 'react';
import PropTypes from 'prop-types';
import styles from '../chart-scroll/ChartScroll.css';
import CSV from './CSV';

const HeaderBasic = ({ title, category, data, updated, filename  }) => {

  return (
    <header className={styles.basicHeadWrapper}>
      <div className={styles.basicTitleWrapper}>
        <h4>{title} - {updated}</h4>
        <CSV 
          data={data}
          filename={filename}
        ></CSV>
      </div>
      <h3>{category}</h3>
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
