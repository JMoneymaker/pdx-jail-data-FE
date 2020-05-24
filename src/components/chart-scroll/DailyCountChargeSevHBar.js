import React, { useState, useEffect } from 'react';
import Header from '../common/Header';
import styles from './VerticalBar.css';
import { getDailyAgencyCount } from '../../services/getDailyCounts';
import { shapeAgency } from '../../utils/dailyCounts';
import HBar from '../chart-templates/HBar';

const DailyCountChargeSevHBar = () => {
  const [county, setCounty] = useState('multnomah');
  const [agencyData, setAgencyData] = useState([]);

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  useEffect(() => {
    if(county !== 'multnomah'){
      console.log('error');
    } else {
      getDailyAgencyCount(county)
        .then(res => {setAgencyData(res);});
    }
  }, [county]);

  const data = shapeAgency(agencyData);

  return (
    <>
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header 
            handleChange={handleChange}
            name={'charge-radio'}
            id={'charge'}
            title={'Number of People in Custody'}
            category={'by Charge Severity'}> 
          </Header>
        </header>
        <section className={styles.chartArea}>
          {county === 'multnomah' ?
            <HBar data={data} county={county} /> 
            : <div className={styles.countyError}>No Data Available</div> }
        </section>
      </section>
    </>
  );
};

export default DailyCountChargeSevHBar;

