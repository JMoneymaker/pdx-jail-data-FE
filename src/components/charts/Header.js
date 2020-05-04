import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Charts.css';

const Header = ({ upDateHook }) => {
  const { upDated } = upDateHook();
  const [checked, setChecked] = useState('multnomah');

  const handleChange = (e) => {
      
  }

  return (
    <header className={styles.Header}>
      <div>
        <h3>Number of People in Custody by Race</h3>
        <div className={styles.updateStatus}>Last Updated: {upDated}</div>
      </div>
      <div className={styles.radioGroup}>
        <form onChange={handleChange}>
          <label>
            <input
              type='radio'
              name="county"
              value="clackamas"
              className="radio"
            />
    Clackamas
          </label>

          <label>
            <input
              type="radio"
              name="county"
              value="multnomah"
              className="radio"
            />
    Multnomah
          </label>

          <label>
            <input
              type="radio"
              name="county"
              value="washington"
              className="radio"
            />
    Washington
          </label>
        </form>
      </div>
    </header>
  );
};

Header.propTypes = {
  upDateHook: PropTypes.func.isRequired,
};

export default Header;
