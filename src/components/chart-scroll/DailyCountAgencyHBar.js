import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import Header from '../common/Header';
import styles from './VerticalBar.css';
import HBar from '../chart-templates/HBar';
import useDailyAgencyCount from '../../hooks/useDailyAgencyCount';
import useCSVUpdated from '../../hooks/useCSVUpdated';

const DailyCountAgencyHBar = () => {
  const [county, setCounty] = useState('multnomah');
  const data = useDailyAgencyCount(county);
  const updated = useCSVUpdated();
  const csvData = data.map(item => {
    return ({
      date: updated,
      county: county,
      agency: item.x,
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
            name={'agency-radio'} 
            id={'agency'}
            title={'Daily Snapshot'}   
            category={'Population by Arresting Agency'}>
          </Header>
          <CSVLink 
            data={[...csvData]}
            filename={`jdpdx-daily-agency-${updated}-${county}.csv`}
            target='_blank'
          >Download Data</CSVLink>
        </header>
        <section className={styles.chartArea}>
          {county === 'clackamas' ? 
            <div className={styles.countyError}>No Data Available</div> 
            : <HBar 
              data={data} 
              county={county} 
              xLabel={'Number of People in Detention'} />}
        </section>
      </section>
    </>
  );
};

export default DailyCountAgencyHBar;

