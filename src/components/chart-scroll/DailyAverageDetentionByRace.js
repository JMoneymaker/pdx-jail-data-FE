import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChartLoading from '../common/ChartLoading';
import Header from '../common/Header';
import BarV from '../chart-templates/BarV';
import styles from './ChartScroll.css';
import useDailyAverageDetentionByRace from '../../hooks/useDailyAverageDetentionByRace';

const DailyAverageDetentionByRace = ({ updated }) => {
  const [county, setCounty] = useState('multnomah');
  const [data, loading] = useDailyAverageDetentionByRace(county);

  const csvData = data.map(item => {
    return ({
      date: updated,
      county: county,
      stay: item.x,
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
          name={'avg-detention-radio'} 
          id={'avg-detention'} 
          title={'Daily Snapshot'}
          updated={updated}
          county={county}
          category={'Average Length of Stay by Race'}
          data={csvData}
          filename={`jdpdx-avg-stay-byRace-${updated}-${county}.csv`}
        > 
        </Header>
        <section className={styles.chartWrapper}>
          {loading ? <ChartLoading /> :
            <BarV 
              data={data} 
              county={county} 
              xLabel={'number of days in detention'} 
              yLabel={'race'} />
          }
        </section>
      </section>
    </>
  );
};

DailyAverageDetentionByRace.propTypes = {
  updated: PropTypes.string.isRequired
};

export default DailyAverageDetentionByRace;

