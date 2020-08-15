import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import ChartLoading from '../common/ChartLoading';
import Header from '../common/Header';
import Pie from '../chart-templates/Pie';
import styles from './ChartScroll.css';
import useDailyCountFacility from '../../hooks/useDailyFacilityCount';

const DailyCountFacility = ({ updated }) => {
  const [county, setCounty] = useState('multnomah');
  const [data, loading] = useDailyCountFacility(county);

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
          updated={updated}
          filename={`jdpdx-daily-facility-${county}.csv`}
          category={'Population by Facility'}> 
        </Header>
        <section className={styles.chartWrapper}>
          {loading ? <ChartLoading /> :
            <Pie 
              data={data}
              county={county} 
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
