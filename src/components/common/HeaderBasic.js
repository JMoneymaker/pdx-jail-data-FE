import React from 'react';
import PropTypes from 'prop-types';
import styles from '../chart-scroll/VerticalBar.css';
import { CSVLink } from 'react-csv';
import useCSVTriCountyTrend from '../../hooks/useCSVTriCountyTrend';
import useCSVUpdated from '../../hooks/useCSVUpdated';


const HeaderBasic = ({ title, category }) => {
  const CSVData = useCSVTriCountyTrend();
  const upDated = useCSVUpdated();

  return (
    <header className={styles.titleWrapper}>
      <h4>{title}</h4>
      <h3>{category}</h3>
      <CSVLink 
        data={[...CSVData]}
        filename={`jdpdx-TriCountyTotals-${upDated}.csv`}
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
