import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CSV from '../common/CSV';
import useUpDated from '../../hooks/useUpDated';
import Header from '../common/Header';
import styles from './VerticalBar.css';
import HBar from '../chart-templates/HBar';
import useDailyChargeDescription from '../../hooks/useDailyChargeDescription';

const DailyCountChargeDescHBar = ({ updated }) => {
  const [county, setCounty] = useState('multnomah');
  const chargeDescriptions = useDailyChargeDescription(county);

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
          <CSV 
            data={[...csvData]}
            filename={`jdpdx-daily-chargeDescription-${updated}-${county}.csv`}
          ></CSV>
        </header>
        <section className={styles.chartArea}>
          <HBar 
            data={chargeDescriptions} 
            county={county} 
            xLabel={'Number of people in Detention'} /> 
        </section>
      </section>
    </>
  );
};

DailyCountChargeDescHBar.propTypes = {
  updated: PropTypes.string.isRequired
};


export default DailyCountChargeDescHBar;

