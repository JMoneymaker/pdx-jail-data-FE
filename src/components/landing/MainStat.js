import React from 'react';
import PropTypes from 'prop-types';
import styles from './Landing.css';

const MainStat = ({ totalHook, changeHook }) => {
  const { total } = totalHook();
  const { change } = changeHook();
  
  return (
    <>
      <div className={styles.mainStat}>
        <h2 className={styles.digit}>{total}</h2>
        <h4 className={styles.caption}>In Custody</h4>
        <h4 className={styles.change}>{change}</h4>
      </div>
    </>
  );
};

MainStat.propTypes = {
  totalHook: PropTypes.func.isRequired,
  changeHook: PropTypes.func.isRequired
};

export default MainStat;
