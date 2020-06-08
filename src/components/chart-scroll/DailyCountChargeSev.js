import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChartLoading from '../common/ChartLoading';
import Header from '../common/Header';
import BarH from '../chart-templates/BarH';
import styles from './ChartScroll.css';
import useDailyChargeSeverityCount from '../../hooks/useDailyChargeSeverity';

const DailyCountChargeSev = ({ updated }) => {
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
      <section className={styles.ChartScroll}>
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
        <section className={styles.chartWrapper}>
          {loading ? <ChartLoading /> :
            county !== 'multnomah' ?
              <div className={styles.countyError}><h3>Data coming soon</h3></div>
              :  <BarH 
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

DailyCountChargeSev.propTypes = {
  updated: PropTypes.string.isRequired
};

export default DailyCountChargeSev;

