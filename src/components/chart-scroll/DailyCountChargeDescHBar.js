import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import useUpDated from '../../hooks/useUpDated';
import Header from '../common/Header';
import styles from './VerticalBar.css';
import HBar from '../chart-templates/HBar';
import useDailyChargeDescription from '../../hooks/useDailyChargeDescription';
import useCSVUpdated from '../../hooks/useCSVUpdated';

const DailyCountChargeDescHBar = () => {
  const [county, setCounty] = useState('multnomah');
  const chargeDescriptions = useDailyChargeDescription(county);
  const updated = useCSVUpdated();

  const csvData = chargeDescriptions.map(item => {
    return ({
      date: updated,
      county: county,
      charge: item.x,
      count: item.y
    });
  });

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
          <CSVLink 
            data={[...csvData]}
            filename={`jdpdx-daily-chargeDescription-${updated}-${county}.csv`}
            target='_blank'
          >Download Data</CSVLink>
        </header>
        <section className={styles.chartArea}>
          {county === 'multnomah' ?
            <HBar 
              data={chargeDescriptions.slice(0, 20)} 
              county={county} 
              xLabel={'Number of people in Detention'} /> 
            : <div className={styles.countyError}>No Data Available</div> }
        </section>
      </section>
    </>
  );
};

export default DailyCountChargeDescHBar;

