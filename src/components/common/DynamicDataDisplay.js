import React from 'react';
import PropTypes from 'prop-types';
import styles from '../home/Home.css';

const DynamicDataDisplay = ({ children, hook }) => {
  const { data } = hook();
  return (
    <div className={styles.dynamoDisplay}>
      <h4 className={styles.title}>{children}</h4>
      <h2 className={styles.number}>{data}</h2>
    </div>
  );
};

DynamicDataDisplay.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.number.isRequired,
  hook: PropTypes.func.isRequired
};

export default DynamicDataDisplay;
