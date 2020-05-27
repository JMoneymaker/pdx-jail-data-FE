import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import Header from '../common/Header';
import useDailyChargeSeverityCount from '../../hooks/useDailyChargeSeverity';
import styles from './VerticalBar.css';
import HBar from '../chart-templates/HBar';
import useCSVUpdated from '../../hooks/useCSVUpdated';

const DailyCountChargeSevHBar = () => {
  const [county, setCounty] = useState('multnomah');
  const data = useDailyChargeSeverityCount(county);
  const updated = useCSVUpdated();

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
            category={'Population by Top Charge'}> 
          </Header>
          <CSVLink 
            data={[...csvData]}
            filename={`jdpdx-daily-chargeSeverity-${updated}-${county}.csv`}
            target='_blank'
          >Download Data</CSVLink>
        </header>
        <section className={styles.chartArea}>
          {county === 'multnomah' ?
            <HBar 
              data={data} 
              county={county} 
              xLabel={'Number of People in Detention'} 
              legend={true}
            /> 
            : <div className={styles.countyError}>No Data Available</div> }
        </section>
      </section>
    </>
  );
};

export default DailyCountChargeSevHBar;

