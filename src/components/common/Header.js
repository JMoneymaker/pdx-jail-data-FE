import React from 'react';
import styles from './Header.css';
// import DynamicDataDisplay from '../HomePage/DynamicDataDisplay';
// import useAverageDetention from '../../hooks/useAverageDetention';


const Header = () => {

  return (
    <section className={styles.Header}>
      <h1>PDX Jail Data</h1>
      <div className={styles.dynamicDisplay}>
        <h3>Change since yesterday</h3>
        {/* <DynamicDataDisplay hook={useAverageDetention}>Average Length of Stay</DynamicDataDisplay> */}
        <h2>Number</h2>
      </div>
    </section>
  );
};

export default Header;
