import React, { useState } from 'react';
import useUpDated from '../../hooks/useUpDated';
import Header from '../common/Header';
import DailyCountFacility from '../charts/DailyCountFacility';
import styles from './VerticalBar.css';

const DailyCountFacilityPie = () => {
  const [county, setCounty] = useState('multnomah');

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  return (
    <>
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header 
            upDateHook={useUpDated}
            handleChange={handleChange}
            name={'facility-radio'}
            id={'facility'}
            title={'Number of People in Custody'}
            category={'by Facility'}> 
          </Header>
        </header>
        <DailyCountFacility county={county} />
      </section>
    </>
  );
};

export default DailyCountFacilityPie;

