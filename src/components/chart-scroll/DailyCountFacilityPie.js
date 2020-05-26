import React, { useState } from 'react';
import useDailyCountFacility from '../../hooks/useDailyFacilityCount';
import Header from '../common/Header';
import Pie from '../chart-templates/Pie';
import styles from './VerticalBar.css';

const DailyCountFacilityPie = () => {
  const [county, setCounty] = useState('multnomah');
  const data = useDailyCountFacility(county);

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  return (
    <>
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header 
            handleChange={handleChange}
            name={'facility-radio'}
            id={'facility'}
            title={'Daily Snapshot'}
            category={'Population by Facility'}> 
          </Header>
        </header>
        <Pie 
          county={county} 
          data={data} 
        />
      </section>
    </>
  );
};

export default DailyCountFacilityPie;

