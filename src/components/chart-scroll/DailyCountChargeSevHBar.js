import React, { useState } from 'react';
import Header from '../common/Header';
import useDailyChargeSeverityCount from '../../hooks/useDailyChargeSeverity';
import styles from './VerticalBar.css';
import HBar from '../chart-templates/HBar';

const DailyCountChargeSevHBar = () => {
  const [county, setCounty] = useState('multnomah');
  const data = useDailyChargeSeverityCount(county);

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  return (
    <>
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header 
            handleChange={handleChange}
            name={'charge-radio'}
            id={'charge'}
            title={'Daily Snapshot'}
            category={'Population by Top Charge'}> 
          </Header>
        </header>
        <section className={styles.chartArea}>
          {county === 'multnomah' ?
            <HBar 
              data={data} 
              county={county} 
              xLabel={'Number of People in Detention'} 
              legend={true}
            /> 
            : <div className={styles.countyError}>No Data Available</div> }
        </section>
      </section>
    </>
  );
};

export default DailyCountChargeSevHBar;

