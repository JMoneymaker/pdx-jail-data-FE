import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../charts/Charts.css';
import RadioControls from '../charts/RadioControls';

const Header = ({ upDateHook }) => {
  const { upDated } = upDateHook();
  const [county, setCounty] = useState('multnomah');

  const handleChange = ({ target }) => {
    setCounty({ county: target.value });
  };

  console.log(county);

  return (
    
    <header className={styles.Header}>
      <div>
        <h3>Number of People in Custody by Race</h3>
        <div className={styles.updateStatus}>Last Updated: {upDated}</div>
      </div>
      <RadioControls handleChange={handleChange} />
    </header>
  );
};


Header.propTypes = {
  upDateHook: PropTypes.func.isRequired,
};

export default Header;

