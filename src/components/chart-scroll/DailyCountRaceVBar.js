import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useDailyRaceCount from '../../hooks/useDailyRaceCount';
import Header from '../common/Header';
import ChartLoading from '../common/ChartLoading';
import VBar from '../chart-templates/VBar';
import styles from './VerticalBar.css';

const DailyCountRaceVBar = ({ updated }) => {
  const [county, setCounty] = useState('multnomah');
  const [data, loading] = useDailyRaceCount(county);

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
        <Header 
          handleChange={handleChange} 
          name={'race-radio'} 
          id={'race'}
          title={'Daily Snapshot'}
          updated={updated}
          data={csvData}
          filename={`jdpdx-daily-race-${updated}-${county}.csv`}
          category={'Population by Race'}> 
        </Header>
        <section className={styles.chartArea}>
          {loading ? <ChartLoading /> :
            <VBar 
              county={county} 
              data={data} 
              xLabel={'Number of People in Detention'} 
              yLabel={'Race'} />
          }
        </section>
      </section>
    </>
  );
};

DailyCountRaceVBar.propTypes = {
  updated: PropTypes.string.isRequired
};

export default DailyCountRaceVBar;

