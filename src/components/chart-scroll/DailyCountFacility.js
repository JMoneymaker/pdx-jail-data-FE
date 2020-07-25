import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import ChartLoading from '../common/ChartLoading';
import Header from '../common/Header';
import Pie from '../chart-templates/Pie';
import styles from './ChartScroll.css';
import useDailyCountFacility from '../../hooks/useDailyFacilityCount';

const DailyCountFacility = () => {
  const [county, setCounty] = useState('multnomah');
  const [clack, mult, wash, loading] = useDailyCountFacility();
  const [data, setData] = useState([]);

  console.log(clack, 'clack', mult, 'mult', wash, 'wash');

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  console.log(county, 'county');

  useEffect(() => {
    county === 'clackamas' ? setData(clack) : 
      county === 'multnomah' ? setData(mult) : 
        setData(wash);
  }, [county]);

  console.log(data, 'container data');

  return (
    <>
      <section className={styles.ChartScroll}>
        <Header 
          handleChange={handleChange}
          name={'facility-radio'}
          id={'facility'}
          title={'Daily Snapshot'}
          updated={clack.date}
          filename={`jdpdx-daily-facility-${clack.date}-${county}.csv`}
          category={'Population by Facility'}> 
        </Header>
        <section className={styles.chartWrapper}>
          {loading ? <ChartLoading /> :
            <Pie 
              data={mult} 
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
