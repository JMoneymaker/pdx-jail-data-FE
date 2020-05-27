import React, { useState } from 'react';
import Header from '../common/Header';
import VBar from '../chart-templates/VBar';
import CSV from '../common/CSV';
import styles from './VerticalBar.css';
import useDailyAverageDetentionByRace from '../../hooks/useDailyAverageDetentionMult';
import useCSVUpdated from '../../hooks/useCSVUpdated';

const DailyAverageDetentionHBar = () => {
  const [county, setCounty] = useState('multnomah');
  const data = useDailyAverageDetentionByRace(county);
  const updated = useCSVUpdated();
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
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header 
            handleChange={handleChange} 
            name={'avg-detention-radio'} 
            id={'avg-detention'} 
            title={'Daily Snapshot'}
            category={'Average Length of Stay by Race'}> 
          </Header>
          <div className={styles.csvWrapper}>
            <CSV
              data={[...csvData]}
              filename={`jdpdx-avg-stay-byRace-${updated}-${county}.csv`}
            >
            </CSV>
          </div>
        </header>
        <section className={styles.chartWrapper}>
          <VBar 
            data={data} 
            county={county} 
            xLabel={'Number of Days in Detention'} 
            yLabel={'Race'} />
        </section>
      </section>
    </>
  );
};

export default DailyAverageDetentionHBar;

