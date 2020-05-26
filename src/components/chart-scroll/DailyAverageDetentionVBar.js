import React, { useState } from 'react';
import Header from '../common/Header';
import VBar from '../chart-templates/VBar';
import styles from './VerticalBar.css';
import useDailyAverageDetentionByRace from '../../hooks/useDailyAverageDetentionMult';

const DailyAverageDetentionHBar = () => {
  const [county, setCounty] = useState('multnomah');
  const data = useDailyAverageDetentionByRace(county);

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
        </header>
        <section className={styles.chartWrapper}>
          {!data ? <div>data not available</div> :
            <VBar 
              data={data} 
              county={county} 
              xLabel={'Number of Days in Detention'} 
              yLabel={'Race'} />
          }
        </section>
      </section>
    </>
  );
};

export default DailyAverageDetentionHBar;

