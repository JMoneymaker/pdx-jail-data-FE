import React, { useState, useEffect } from 'react';
import Header from '../common/Header';
import styles from './VerticalBar.css';
import { getDailyChargeSeverityCount } from '../../services/getDailyCounts';
import { shapeChargeSeverity } from '../../utils/dailyCounts';
import HBar from '../chart-templates/HBar';

const DailyCountChargeSevHBar = () => {
  const [county, setCounty] = useState('multnomah');
  const [chargeSeverityData, setChargeSeverityData] = useState([]);

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  useEffect(() => {
    if(county !== 'multnomah'){
      console.log('error');
    } else {
      getDailyChargeSeverityCount(county)
        .then(res => {setChargeSeverityData(res);});
    }
  }, [county]);

  const data = shapeChargeSeverity(chargeSeverityData);

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

