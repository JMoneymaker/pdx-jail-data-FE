import React from 'react';
import styles from './Loading.css';

const Loading = () => {

  return (
    <div className={styles.Loading}>
      <div className={styles.spinner}>
        <div className={styles.bounce1}></div>
        <div className={styles.bounce}></div>
        <div className={styles.bounce3}></div>
      </div>
    </div>
  );
};


export default Loading;
