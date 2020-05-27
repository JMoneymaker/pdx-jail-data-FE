import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import useDailyCountFacility from '../../hooks/useDailyFacilityCount';
import Header from '../common/Header';
import Pie from '../chart-templates/Pie';
import styles from './VerticalBar.css';
import useCSVUpdated from '../../hooks/useCSVUpdated';


const DailyCountFacilityPie = () => {
  const [county, setCounty] = useState('multnomah');
  const data = useDailyCountFacility(county);
  const updated = useCSVUpdated();

  const csvData = data.map(item => {
    return ({
      date: updated,
      county: county,
      facility: item.x,
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
            name={'facility-radio'}
            id={'facility'}
            title={'Daily Snapshot'}
            category={'Population by Facility'}> 
          </Header>
          <CSVLink 
            data={[...csvData]}
            filename={`jdpdx-daily-facility-${updated}-${county}.csv`}
            target='_blank'
          >Download Data</CSVLink>
        </header>
        <Pie 
          county={county} 
          data={data} 
        />
      </section>
    </>
  );
};

export default DailyCountFacilityPie;

