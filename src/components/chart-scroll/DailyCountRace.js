import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChartLoading from '../common/ChartLoading';
import Header from '../common/Header';
import BarV from '../chart-templates/BarV';
import styles from './ChartScroll.css';
import useDailyRaceCount from '../../hooks/useDailyRaceCount';

const DailyCountRace = ({ updated }) => {
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
      <section className={styles.ChartScroll}>
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
        <section className={styles.chartWrapper}>
          {loading ? <ChartLoading /> :
            <BarV 
              county={county} 
              data={data} 
              xLabel={'number of people in detention'} 
              yLabel={'race'} />
          }
        </section>
      </section>
    </>
  );
};

DailyCountRace.propTypes = {
  updated: PropTypes.string.isRequired
};

export default DailyCountRace;

