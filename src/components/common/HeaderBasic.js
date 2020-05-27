import React from 'react';
import PropTypes from 'prop-types';
import styles from '../chart-scroll/VerticalBar.css';
import { CSVLink } from 'react-csv';
import { dailyCounts } from '../../data/daily-counts';
import { makeCSVData } from '../../utils/dailyCounts';
import { findCSVUpDate } from '../../utils/dailyCounts';


const HeaderBasic = ({ title, category }) => {

  const downloadData = (makeCSVData(dailyCounts));
  const date = findCSVUpDate(dailyCounts);
  console.log(date);

  return (
    <header className={styles.titleWrapper}>
      <h4>{title}</h4>
      <h3>{category}</h3>
      <CSVLink 
        data={downloadData}
        filename={`PDXjd-dailyCounts-${date}.csv`}
        target='_blank'
      >Download Data</CSVLink>
    </header>
  );
};

HeaderBasic.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default HeaderBasic;
