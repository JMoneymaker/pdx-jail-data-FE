import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Charts.css';

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
      <div className={styles.radioGroup}>
        
        <input
          type='radio'
          value='clackamas'
          name='county'
          id='clackamas'
          onChange={handleChange}
        />
        <label htmlFor='clackamas'>Clackamas</label>

        <input
          type='radio'
          value='multnomah'
          name='county'
          id='multnomah'
          defaultChecked
          onChange={handleChange}
        />
        <label htmlFor='multnomah'>Multnomah</label>

        <input
          type='radio'
          value='washington'
          name='county'
          id='washington'
          onChange={handleChange}
        />
        <label htmlFor='washington'>Washington</label>
      </div>
    </header>
  );
};


Header.propTypes = {
  upDateHook: PropTypes.func.isRequired,
};

export default Header;

