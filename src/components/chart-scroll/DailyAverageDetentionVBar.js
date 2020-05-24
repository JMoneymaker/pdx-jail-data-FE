import React, { useState, useEffect } from 'react';
import { getDailyAverageDetention } from '../../services/getDailyAverages';
import { shapeMultDetAvg, shapeClackDetAvg, shapeWashDetAvg } from '../../utils/dailyAverages';
import Header from '../common/Header';
import VBar from '../chart-templates/VBar';
import styles from './VerticalBar.css';

const DailyAverageDetentionHBar = () => {
  const [county, setCounty] = useState('multnomah');
  const [rawDetentionData, setRawDetentionData] = useState([]);

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  useEffect(() => {
    getDailyAverageDetention(county)
      .then(res => {setRawDetentionData(res);});
  }, [county]);

  const data = (county === 'multnomah') ? shapeMultDetAvg(rawDetentionData)
    : (county === 'clackamas') ? shapeClackDetAvg(rawDetentionData) 
      : shapeWashDetAvg(rawDetentionData);

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

