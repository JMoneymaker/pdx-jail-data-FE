import React, { useState, useEffect } from 'react';
import { getDailyFacilityCount } from '../../services/getDailyCounts';
import { shapeFacility } from '../../utils/dailyCounts';
import Header from '../common/Header';
import Pie from '../chart-templates/Pie';
import styles from './VerticalBar.css';

const DailyCountFacilityPie = () => {
  const [county, setCounty] = useState('multnomah');
  const [facilityData, setFacilityData] = useState([]);

  useEffect(() => {
    getDailyFacilityCount(county)
      .then(res => {setFacilityData(res);});
  }, [county]);

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  const data = shapeFacility(facilityData);

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
          facilityData={facilityData}/>
      </section>
    </>
  );
};

export default DailyCountFacilityPie;

