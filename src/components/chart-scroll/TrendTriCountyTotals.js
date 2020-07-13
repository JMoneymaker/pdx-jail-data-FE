import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChartLoading from '../common/ChartLoading';
import HeaderBasic from '../common/HeaderBasic';
import Area from '../chart-templates/Area';
import { getDailyCounts } from '../../services/getTriCountyDaily';
import useCSVTriCountyTrend from '../../hooks/useCSVTriCountyTrend';
import styles from './ChartScroll.css';

const TrendTriCountyTotals = ({ updated }) => {
  const [rawTrendData, setRawTrendData] = useState([]);
  const csvData = useCSVTriCountyTrend();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getDailyCounts()
      .then(res => {setRawTrendData(res[0].counts);})
      .finally(() => setLoading(false));
  }, []);

  const shapeTrend = rawData => {
    let clackamas = [];
    let washington = [];
    let multnomah = [];

    rawData.slice(-29).map(i => {
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
      <section className={styles.ChartScroll}>
        <HeaderBasic
          title={'Trend Data: Last updated'}
          category={'Daily Population Total'}
          updated={updated}
          data={csvData}
          filename={`jdpdx-TriCountyTotals-${updated}.csv`}
        > 
        </HeaderBasic >
        <section className={styles.chartWrapper}>
          {loading ? <ChartLoading /> :
            <Area 
              data={data}
              xLabel={'Number of People in Detention'} 
              yLabel={'Date'}
            />
          }
        </section>
      </section>
    </>
  );
};

TrendTriCountyTotals.propTypes = {
  updated: PropTypes.string.isRequired
};

export default TrendTriCountyTotals;

