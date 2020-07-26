import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import ChartLoading from '../common/ChartLoading';
import Header from '../common/Header';
import Pie from '../chart-templates/Pie';
import styles from './ChartScroll.css';
import useDailyCountFacility from '../../hooks/useDailyFacilityCount';

const DailyCountFacility = () => {
  const [county, setCounty] = useState('multnomah');
  const [clack, mult, wash, loading] = useDailyCountFacility();

  const countyToData = {
    multnomah: mult,
    clackamas: clack,
    washington: wash
  };
  const data = countyToData[county];

  const handleChange = ({ target }) => setCounty(target.value);

  return (
    <>
      <section className={styles.ChartScroll}>
        <Header 
          handleChange={handleChange}
          name={'facility-radio'}
          id={'facility'}
          title={'Daily Snapshot'}
          data={data}
          updated={data[0] ? data[0].date : 'loading'}
          filename={`jdpdx-daily-facility-${data[0] ? data[0].date : 'loading'}-${county}.csv`}
          category={'Population by Facility'}> 
        </Header>
        <section className={styles.chartWrapper}>
          {loading ? <ChartLoading /> :
            <Pie 
              data={data} 
            />
          }
        </section>
      </section>
    </>
  );
};

DailyCountFacility.propTypes = {
  // updated: PropTypes.string.isRequired
};

export default DailyCountFacility;
