import React, { useState } from 'react';
import useUpDated from '../../hooks/useUpDated';
import Header from '../common/Header';
import styles from './VerticalBar.css';
import HBar from '../chart-templates/HBar';
import useDailyAgencyCount from '../../hooks/useDailyAgencyCount';

const DailyCountAgencyHBar = () => {
  const [county, setCounty] = useState('multnomah');
  const data = useDailyAgencyCount(county);

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
            name={'agency-radio'} 
            id={'agency'}
            title={'Daily Snapshot'}   
            category={'Population by Arresting Agency'}>
          </Header>
        </header>
        <section className={styles.chartArea}>
          {county === 'clackamas' ? 
            <div className={styles.countyError}>No Data Available</div> 
            : <HBar 
              data={data} 
              county={county} 
              xLabel={'Number of People in Detention'} />}
        </section>
      </section>
    </>
  );
};

export default DailyCountAgencyHBar;

