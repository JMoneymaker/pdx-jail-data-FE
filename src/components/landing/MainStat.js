import React from 'react';
import PropTypes from 'prop-types';
import styles from './Landing.css';

const MainStat = ({ totalHook, changeHook }) => {
  const { total } = totalHook();
  const { change } = changeHook();

  return (
    <>
      <div className={styles.mainStat}>
        <h1 className={styles.digit}>{total}</h1>
        <h3 className={styles.caption}>In Custody</h3>
        <h3 className={styles.change}>{change}</h3>
      </div>
    </>);
};

MainStat.propTypes = {
  totalHook: PropTypes.func.isRequired,
  changeHook: PropTypes.func.isRequired
};

export default MainStat;
