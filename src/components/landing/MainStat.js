import React from 'react';
import PropTypes from 'prop-types';
import styles from './Landing.css';

const MainStat = ({ county, totalHook, changeHook }) => {
  const { total } = totalHook();
  const { change } = changeHook();
  
  return (
    <div className={styles.mainStat}>
      <h2>{county}</h2>
      <h2 className={styles.number}>{total}</h2>
      <h4 className={styles.caption}>In Custody</h4>
      <h5 className={styles.change}>{change}</h5>
    </div>
  );
};

MainStat.propTypes = {
  county: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  change: PropTypes.number.isRequired,
  totalHook: PropTypes.func.isRequired,
  changeHook: PropTypes.func.isRequired
};

export default MainStat;
