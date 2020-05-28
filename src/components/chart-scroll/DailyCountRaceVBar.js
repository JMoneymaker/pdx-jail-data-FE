import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CSV from '../common/CSV';
import useDailyRaceCount from '../../hooks/useDailyRaceCount';
import Header from '../common/Header';
import VBar from '../chart-templates/VBar';
import styles from './VerticalBar.css';

const DailyCountRaceVBar = ({ updated }) => {
  const [county, setCounty] = useState('multnomah');
  const data = useDailyRaceCount(county);

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
          <CSV 
            data={[...csvData]}
            filename={`jdpdx-daily-race-${updated}-${county}.csv`}>
          </CSV>
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

DailyCountRaceVBar.propTypes = {
  updated: PropTypes.string.isRequired
};

export default DailyCountRaceVBar;

