import React from 'react';
import PropTypes from 'prop-types';
import styles from '../chart-scroll/VerticalBar.css';
import { CSVLink } from 'react-csv';
import { findCSVUpDate } from '../../utils/dailyCounts';
import useCSV from '../../hooks/useCSV';


const HeaderBasic = ({ title, category }) => {
  const data = useCSV();
  const upDate = findCSVUpDate([data]);

  return (
    <header className={styles.titleWrapper}>
      <h4>{title}</h4>
      <h3>{category}</h3>
      <CSVLink 
        data={[...data]}
        filename={`PDXjd-dailyCounts-${upDate}.csv`}
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
