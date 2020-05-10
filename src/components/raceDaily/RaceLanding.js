import React from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';
// import useUpDate from '../../hooks/useUpDated';
import DailyRaceMult from '../charts/DailyRaceMult';
import DailyRaceClack from '../charts/DailyRaceClack';
import DailyRaceWash from '../charts/DailyRaceWash';


const RaceLanding = () => {
    
  return (
    <>
      <Header/>
      <DailyRaceMult />
      <DailyRaceClack />
      <DailyRaceWash />
    </>
  );
};

// RaceLanding.propTypes = {};

export default RaceLanding;
