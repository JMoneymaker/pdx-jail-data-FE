import React from 'react';
import PropTypes from 'prop-types';
import styles from './RadioControls.css';

const RadioControls = ({ handleChange, name }) => {
  return (
    <div className={styles.radioGroup}>
        
      <input
        type='radio'
        value='clackamas'
        name={name}
        id='clackamas-avg'
        onChange={handleChange}
      />
      <label htmlFor='clackamas-avg'>Clackamas</label>

      <input
        type='radio'
        value='multnomah'
        name={name}
        id='multnomah-avg'
        defaultChecked
        onChange={handleChange}
      />
      <label htmlFor='multnomah-avg'>Multnomah</label>

      <input
        type='radio'
        value='washington'
        name={name}
        id='washington-avg'
        onChange={handleChange}
      />
      <label htmlFor='washington-avg'>Washington</label>
    </div>
  );
};

RadioControls.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default RadioControls;
