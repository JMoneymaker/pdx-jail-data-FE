import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CSV from '../common/CSV';
import styles from './VerticalBar.css';
import Area from '../chart-templates/Area';
import { getDailyCounts } from '../../services/getTriCountyDaily';
import useCSVTriCountyTrend from '../../hooks/useCSVTriCountyTrend';

import HeaderBasic from '../common/HeaderBasic';

const TrendTriCountyTotalsStack = ({ updated }) => {
  const [rawTrendData, setRawTrendData] = useState([]);
  const CSVData = useCSVTriCountyTrend();


  useEffect(() => {
    getDailyCounts()
      .then(res => {setRawTrendData(res[0].counts);});
  }, []);

  const shapeTrend = rawData => {
    let clackamas = [];
    let washington = [];
    let multnomah = [];

    rawData.map(i => {
      clackamas.push({
        x: i.date.slice(0, 10),
        y: i.clack });
      multnomah.push({
        x: i.date.slice(0, 10),
        y: i.mult });
      washington.push({
        x: i.date.slice(0, 10),
        y: i.wash });
    });
    return [clackamas, multnomah, washington];
  };
  
  const data = shapeTrend(rawTrendData);

  return (
    <>
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <HeaderBasic
            title={'Trend Data: Last updated'}
            category={'Daily Population Total'}
          > 
          </HeaderBasic >
          <CSV 
            data={[...CSVData]}
            filename={`jdpdx-TriCountyTotals-${updated}.csv`}>
          </CSV>
        </header>
        <Area 
          data={data}
          xLabel={'Number of People in Detention'} 
          yLabel={'Date'}
        />
      </section>
    </>
  );
};

TrendTriCountyTotalsStack.propTypes = {
  updated: PropTypes.string.isRequired
};

export default TrendTriCountyTotalsStack;

