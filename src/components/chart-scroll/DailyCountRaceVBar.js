import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import useDailyRaceCount from '../../hooks/useDailyRaceCount';
import Header from '../common/Header';
import VBar from '../chart-templates/VBar';
import styles from './VerticalBar.css';
import useCSVUpdated from '../../hooks/useCSVUpdated';

const DailyCountRaceVBar = () => {
  const [county, setCounty] = useState('multnomah');
  const data = useDailyRaceCount(county);
  const updated = useCSVUpdated();

  const csvData = data.map(item => {
    return ({
      date: updated,
      county: county,
      race: item.x,
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
            name={'race-radio'} 
            id={'race'}
            title={'Daily Snapshot'}
            category={'Population by Race'}> 
          </Header>
          <CSVLink 
            data={[...csvData]}
            filename={`jdpdx-daily-race-${updated}-${county}.csv`}
            target='_blank'
          >Download Data</CSVLink>
        </header>
        <VBar 
          county={county} 
          data={data} 
          xLabel={'Number of People in Detention'} 
          yLabel={'Race'} />
      </section>
    </>
  );
};

export default DailyCountRaceVBar;

