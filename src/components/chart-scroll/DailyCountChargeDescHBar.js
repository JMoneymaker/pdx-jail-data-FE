import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useUpDated from '../../hooks/useUpDated';
import Header from '../common/Header';
import styles from './VerticalBar.css';
import HBar from '../chart-templates/HBar';
import ChartLoading from '../common/ChartLoading';
import useDailyChargeDescription from '../../hooks/useDailyChargeDescription';

const DailyCountChargeDescHBar = ({ updated }) => {
  const [county, setCounty] = useState('multnomah');
  const [data, loading] = useDailyChargeDescription(county);

  const csvData = data.map(item => {
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
        <Header 
          upDateHook={useUpDated} 
          handleChange={handleChange} 
          name={'description-radio'} 
          id={'description'}
          title={'Daily Snapshot'}
          category={'Most Common Charges'}
          updated={updated} 
          filename={`jdpdx-daily-chargeDescription-${updated}-${county}.csv`}
          data={csvData}  
        >
        </Header>
        <section className={styles.chartArea}>
          {loading ? <ChartLoading /> :
            <HBar 
              data={data} 
              county={county} 
              xLabel={'Number of people in Detention'} /> 
          }
        </section>
      </section>
    </>
  );
};

DailyCountChargeDescHBar.propTypes = {
  updated: PropTypes.string.isRequired
};


export default DailyCountChargeDescHBar;

