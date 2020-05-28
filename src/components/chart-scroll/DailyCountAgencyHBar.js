import React, { useState } from 'react';
import CSV from '../common/CSV';
import Header from '../common/Header';
import styles from './VerticalBar.css';
import HBar from '../chart-templates/HBar';
import useDailyAgencyCount from '../../hooks/useDailyAgencyCount';
import Loading from '../common/Loading';

const DailyCountAgencyHBar = (updated) => {
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
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header 
            handleChange={handleChange}
            name={'agency-radio'} 
            id={'agency'}
            title={'Daily Snapshot'}   
            category={'Population by Arresting Agency'}>
          </Header>
          <CSV 
            data={[...csvData]}
            filename={`jdpdx-daily-agency-${updated}-${county}.csv`}
          ></CSV>
        </header>
        {loading ? <Loading /> :
          <section className={styles.chartArea}>
            {county === 'clackamas' ? 
              <div className={styles.countyError}>No Data Available</div> 
              : <HBar 
                data={data} 
                county={county} 
                xLabel={'Number of People in Detention'} />}
          </section>
        }
      </section>
    </>
  );
};

export default DailyCountAgencyHBar;

