import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CSV from '../common/CSV';
import Header from '../common/Header';
import useDailyChargeSeverityCount from '../../hooks/useDailyChargeSeverity';
import styles from './VerticalBar.css';
import HBar from '../chart-templates/HBar';

const DailyCountChargeSevHBar = ({ updated }) => {
  const [county, setCounty] = useState('multnomah');
  const data = useDailyChargeSeverityCount(county);

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
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header 
            handleChange={handleChange}
            name={'charge-radio'}
            id={'charge'}
            title={'Daily Snapshot'}
            category={'Population by Top Charge Severity'}> 
          </Header>
          <CSV 
            data={[...csvData]}
            filename={`jdpdx-daily-chargeSeverity-${updated}-${county}.csv`}>
          </CSV>
        </header>
        <section className={styles.chartArea}>
          <HBar 
            data={data} 
            county={county} 
            xLabel={'Number of People in Detention'} 
            legend={true}
          /> 
        </section>
      </section>
    </>
  );
};

DailyCountChargeSevHBar.propTypes = {
  updated: PropTypes.string.isRequired
};

export default DailyCountChargeSevHBar;

