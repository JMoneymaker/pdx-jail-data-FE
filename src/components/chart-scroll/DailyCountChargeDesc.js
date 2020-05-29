import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChartLoading from '../common/ChartLoading';
import Header from '../common/Header';
import BarH from '../chart-templates/BarH';
import styles from './ChartScroll.css';
import useDailyChargeDescription from '../../hooks/useDailyChargeDescription';

const DailyCountChargeDesc = ({ updated }) => {
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
      <section className={styles.ChartScroll}>
        <Header 
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
            <BarH 
              data={data} 
              county={county} 
              xLabel={'Number of people in Detention'} /> 
          }
        </section>
      </section>
    </>
  );
};

DailyCountChargeDesc.propTypes = {
  updated: PropTypes.string.isRequired
};


export default DailyCountChargeDesc;

