import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import ChartLoading from '../common/ChartLoading';
import useDailyChargeSeverityCount from '../../hooks/useDailyChargeSeverity';
import styles from './VerticalBar.css';
import HBar from '../chart-templates/HBar';

const DailyCountChargeSevHBar = ({ updated }) => {
  const [county, setCounty] = useState('multnomah');
  const [data, loading] = useDailyChargeSeverityCount(county);

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
          handleChange={handleChange}
          name={'charge-radio'}
          id={'charge'}
          title={'Daily Snapshot'}
          data={csvData}
          updated={updated}
          filename={`jdpdx-daily-chargeSeverity-${updated}-${county}.csv`}
          category={'Population by Top Charge Severity'}> 
        </Header>
        <section className={styles.chartArea}>
          {loading ? <ChartLoading /> :
            <HBar 
              data={data} 
              county={county} 
              xLabel={'Number of People in Detention'} 
              legend={true}
            /> 
          }
        </section>
      </section>
    </>
  );
};

DailyCountChargeSevHBar.propTypes = {
  updated: PropTypes.string.isRequired
};

export default DailyCountChargeSevHBar;

