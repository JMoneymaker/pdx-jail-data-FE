import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChartLoading from '../common/ChartLoading';
import Header from '../common/Header';
import BarH from '../chart-templates/BarH';
import styles from './ChartScroll.css';
import useDailyAgencyCount from '../../hooks/useDailyAgencyCount';

const DailyCountAgency = ({ updated }) => {
  const [county, setCounty] = useState('multnomah');
  const [data, loading] = useDailyAgencyCount(county);
  
  const csvData = data.map(item => {
    return ({
      date: updated,
      county: county,
      agency: item.x,
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
          name={'agency-radio'} 
          id={'agency'}
          title={'Daily Snapshot'}  
          updated={updated} 
          data={csvData}
          filename={`jdpdx-daily-agency-${updated}-${county}.csv`}
          category={'Population by Arresting Agency'}>
        </Header>
        <section className={styles.chartWrapper}>
          {loading ? <ChartLoading /> :
            county === 'clackamas' ? 
              <div className={styles.countyError}><h3>No Data Available</h3></div> 
              : <BarH 
                data={data} 
                county={county} 
                xLabel={'number of people in detention'} />}
        </section>
      </section>
    </>
  );
};

DailyCountAgency.propTypes = {
  updated: PropTypes.string.isRequired
};


export default DailyCountAgency;

