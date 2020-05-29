import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useDailyCountFacility from '../../hooks/useDailyFacilityCount';
import Header from '../common/Header';
import Pie from '../chart-templates/Pie';
import styles from './VerticalBar.css';

const DailyCountFacilityPie = ({ updated }) => {
  const [county, setCounty] = useState('multnomah');
  const data = useDailyCountFacility(county);

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
        <Header 
          handleChange={handleChange}
          name={'facility-radio'}
          id={'facility'}
          title={'Daily Snapshot'}
          updated={updated}
          data={csvData}
          filename={`jdpdx-daily-facility-${updated}-${county}.csv`}
          category={'Population by Facility'}> 
        </Header>
        <Pie 
          county={county} 
          data={data} 
        />
      </section>
    </>
  );
};

DailyCountFacilityPie.propTypes = {
  updated: PropTypes.string.isRequired
};

export default DailyCountFacilityPie;

