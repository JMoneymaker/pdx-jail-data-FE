import React, { useState, useEffect } from 'react';
import useUpDated from '../../hooks/useUpDated';
import Header from '../common/Header';
import VBar from '../chart-templates/VBar';
import { getDailyAgeCount } from '../../services/getDailyCounts';
import { shapeAge } from '../../utils/dailyCounts';
import styles from './VerticalBar.css';

const DailyCountAgeVBar = () => {
  const [county, setCounty] = useState('multnomah');
  const [rawAgeData, setRawAgeData] = useState([]);

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  useEffect(() => {
    getDailyAgeCount(county)
      .then(res => {setRawAgeData(res);});
  }, [county]);

  const data = shapeAge(rawAgeData);
  
  return (
    <>
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header 
            upDateHook={useUpDated} 
            handleChange={handleChange} 
            name={'age-radio'} 
            id={'age'}
            title={'Number of People in Custody'}   
            category={'by Age'}>
          </Header>
        </header>
        <VBar 
          county={county} 
          data={data} 
          xLabel={'Number of People in Custody'} 
          yLabel={'Age Range'} />
      </section>
    </>
  );
};

export default DailyCountAgeVBar;

