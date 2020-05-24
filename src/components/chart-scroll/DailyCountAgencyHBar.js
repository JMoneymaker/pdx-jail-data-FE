import React, { useState, useEffect } from 'react';
import useUpDated from '../../hooks/useUpDated';
import Header from '../common/Header';
import styles from './VerticalBar.css';
import { getDailyAgencyCount } from '../../services/getDailyCounts';
import { shapeAgency } from '../../utils/dailyCounts';
import HBar from '../chart-templates/HBar';

const DailyCountAgencyHBar = () => {
  const [county, setCounty] = useState('multnomah');
  const [agencyData, setAgencyData] = useState([]);

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  useEffect(() => {
    if(county === 'clackamas'){
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
            upDateHook={useUpDated}
            handleChange={handleChange}
            name={'agency-radio'} 
            id={'agency'}
            title={'Number of People in Custody'}   
            category={'by Arresting Agency'}>
          </Header>
        </header>
        <section className={styles.chartArea}>
          {county === 'clackamas' ? 
            <div className={styles.countyError}>No Data Available</div> 
            : <HBar 
              data={data} 
              county={county} 
              xLabel={'Number of People in Custody'} />}
        </section>
      </section>
    </>
  );
};

export default DailyCountAgencyHBar;

