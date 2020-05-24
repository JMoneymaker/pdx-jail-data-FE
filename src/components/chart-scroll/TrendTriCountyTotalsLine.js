import React, { useState, useEffect } from 'react';
import styles from './VerticalBar.css';
import TrendLine from '../chart-templates/TrendLine';
import { getDailyCounts } from '../../services/getTriCountyDaily';
import HeaderBasic from '../common/HeaderBasic';

const TrendTriCountyTotalsLine = () => {
  const [rawTrendData, setRawTrendData] = useState([]);

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
            title={'Trend Data'}
            category={'Daily Population Total'}
          > 
          </HeaderBasic >
        </header>
        <TrendLine data={data}
          xLabel={'Number of People in Detention'} 
          yLabel={'Date'}
        />
      </section>
    </>
  );
};

export default TrendTriCountyTotalsLine;

