import React from 'react';
import styles from './Header.css';
import DynamicDataDisplay from './DynamicDataDisplay';
import useDailyChange from '../../hooks/useDailyChange';


const Header = () => {

  return (
    <section className={styles.Header}>
      <h1>PDX Jail Data</h1>
      <div className={styles.dynamicDisplay}>
        <DynamicDataDisplay hook={useDailyChange}>Change Since Yesterday</DynamicDataDisplay>
        
      </div>
    </section>
  );
};

export default Header;
