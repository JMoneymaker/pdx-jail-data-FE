import React, { useState } from 'react';
import useUpDated from '../../hooks/useUpDated';
import Header from '../common/Header';
import styles from './VerticalBar.css';
import HBar from '../chart-templates/HBar';
import useDailyChargeDescription from '../../hooks/useDailyChargeDescription';

const DailyCountChargeDescHBar = () => {
  const [county, setCounty] = useState('multnomah');
  const chargeDescriptions = useDailyChargeDescription(county);

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
            name={'description-radio'} 
            id={'description'}
            title={'Daily Snapshot'}
            category={'Most Common Charges'}   
          >
          </Header>
        </header>
        <section className={styles.chartArea}>
          {county === 'multnomah' ?
            <HBar 
              data={chargeDescriptions} 
              county={county} 
              xLabel={'Number of people in Detention'} /> 
            : <div className={styles.countyError}>No Data Available</div> }
        </section>
      </section>
    </>
  );
};

export default DailyCountChargeDescHBar;

