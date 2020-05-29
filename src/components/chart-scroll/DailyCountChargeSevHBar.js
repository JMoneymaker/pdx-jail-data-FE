import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChartLoading from '../common/ChartLoading';
import Header from '../common/Header';
import HBar from '../chart-templates/HBar';
import styles from './ChartScroll.css';
import useDailyChargeSeverityCount from '../../hooks/useDailyChargeSeverity';

const DailyCountChargeSevHBar = ({ updated }) => {
  const [county, setCounty] = useState('multnomah');
  const [data, loading] = useDailyChargeSeverityCount(county);

  const csvData = data.map(item => {
    return ({
      date: updated,
      county: county,
      charge: item.x,
      count: item.y
    });
  });

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  return (
    <>
      <section className={styles.ChartScroll}>
        <Header 
          handleChange={handleChange}
          name={'charge-radio'}
          id={'charge'}
          title={'Daily Snapshot'}
          data={csvData}
          updated={updated}
          filename={`jdpdx-daily-chargeSeverity-${updated}-${county}.csv`}
          category={'Population by Top Charge Severity'}> 
        </Header>
        <section className={styles.chartArea}>
          {loading ? <ChartLoading /> :
            <HBar 
              data={data} 
              county={county} 
              xLabel={'Number of People in Detention'} 
              legend={true}
            /> 
          }
        </section>
      </section>
    </>
  );
};

DailyCountChargeSevHBar.propTypes = {
  updated: PropTypes.string.isRequired
};

export default DailyCountChargeSevHBar;

