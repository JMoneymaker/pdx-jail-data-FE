import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading/Loading';
import styles from './Landing.css';

const MainStat = ({ total, change, loading }) => {

  return (

    <>
      <div className={styles.mainStat}>
        { loading ? <Loading /> :
          <>
            <h1 className={styles.digit}>{total}</h1>
            <h3 className={styles.caption}>In Custody</h3>
            <h3 className={styles.change}>{change > 0 ? `+${change}` : change}</h3>
          </>
        }
      </div>
    </>
    
  );
    
};

MainStat.propTypes = {
  total: PropTypes.number,
  change: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired
};

export default MainStat;
