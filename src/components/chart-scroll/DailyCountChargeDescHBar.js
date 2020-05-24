import React, { useState, useEffect } from 'react';
import { getDailyDescripitions } from '../../services/getDailyCounts';
import { shapeDescription } from '../../utils/dailyCounts';
import useUpDated from '../../hooks/useUpDated';
import Header from '../common/Header';
import styles from './VerticalBar.css';
import HBar from '../chart-templates/HBar';

const DailyCountChargeDescHBar = () => {
  const [county, setCounty] = useState('multnomah');
  const [descriptionData, setDescriptionData] = useState([]);

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  useEffect(() => {
    if(county !== 'multnomah'){
      console.log('error');
    } else {
      getDailyDescripitions(county)
        .then(res => {setDescriptionData(res);});
    }
  }, [county]);
  
  const data = shapeDescription(descriptionData);

  return (
    <>
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header 
            upDateHook={useUpDated} 
            handleChange={handleChange} 
            name={'description-radio'} 
            id={'description'}
            title={'Twenty Most Common Charges'}   
          >
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

export default DailyCountChargeDescHBar;

