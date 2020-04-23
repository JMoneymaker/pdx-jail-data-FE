import React from 'react';
import PropTypes from 'prop-types';
import styles from './DynamicDataDisplay.css';

const DynamicDataDisplay = ({ children, hook }) => {
  const { data } = hook();
  return (
    <div>
      <h3>{children}</h3>
      <div>
        <h2 className={styles.netChangeNumber}>{data}</h2>
      </div>
    </div>
  );
};

DynamicDataDisplay.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.number.isRequired,
  hook: PropTypes.func.isRequired
};

export default DynamicDataDisplay;
