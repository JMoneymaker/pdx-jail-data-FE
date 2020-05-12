import { VictoryLine, VictoryChart, VictoryAxis, VictoryLabel, VictoryStack, VictoryArea } from 'victory';
import React, { useState, useEffect } from 'react';
import { getDailyCounts } from '../../services/getTriCountyDaily';
import styles from './Charts.css';

const TrendTotals = () => {
  const [rawTrendData, setRawTrendData] = useState([]);
  
  useEffect(() => {
    getDailyCounts()
      .then(res => {setRawTrendData(res[0].counts);});
  }, []);

  console.log(rawTrendData, 'rawdata');

  const shapeTrend = rawData => {
    let clackamas = [];
    let washington = [];
    let multnomah = [];

    rawData.map(i => {
      clackamas.push({
        date: i.date,
        total: i.clack });
      multnomah.push({
        date: i.date,
        total: i.mult });
      washington.push({
        date: i.date,
        total: i.wash });
    });
    return [clackamas, multnomah, washington];
  };
  
  const data = shapeTrend(rawTrendData);

  console.log(data, 'data');

  return (
    <div className={styles.ChartWrapper}>
      <VictoryStack>
        <VictoryLine />
        <VictoryLine />
        <VictoryLine />
      </VictoryStack>
    </div>
  );
};

TrendTotals.propTypes = {};

export default TrendTotals;
