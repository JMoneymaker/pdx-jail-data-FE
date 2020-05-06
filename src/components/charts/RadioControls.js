import React from 'react';
import PropTypes from 'prop-types';
import styles from './Charts.css';

const RadioControls = ({ handleChange }) => {
  return (
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
  );
};

RadioControls.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default RadioControls;
