import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Charts.css';

const Header = ({ upDateHook }) => {
  const { upDated } = upDateHook();
  const [county, setCounty] = useState('multnomah');
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = event => {
    // setIsChecked(event.target.value);
    setCounty(event.target.value);
    setIsChecked(isChecked);
  };

  console.log(county, 'county');
  console.log(isChecked, 'ischecked');
  return (
    
    <header className={styles.Header}>
      <div>
        <h3>Number of People in Custody by Race</h3>
        <div className={styles.updateStatus}>Last Updated: {upDated}</div>
      </div>
      <div className={styles.radioGroup}>
        <label>
          <input
            type='radio'
            value='clackamas'
            checked={county === 'clackamas'}
            onChange={handleChange}
          />
    Clackamas
        </label>

        <label>
          <input
            type='radio'
            value='multnomah'
            checked={county === 'multnomah'}
            onChange={handleChange}
          />
    Multnomah
        </label>

        <label>
          <input
            type='radio'
            value='washington'
            checked={county === 'washington'}
            onChange={handleChange}
          />
    Washington
        </label>
      </div>
    </header>
  );
};


Header.propTypes = {
  upDateHook: PropTypes.func.isRequired,
};

export default Header;

