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
        id='clackamas-gender'
        onChange={handleChange}
      />
      <label htmlFor='clackamas-gender'>Clackamas</label>

      <input
        type='radio'
        value='multnomah'
        name={name}
        id='multnomah-gender'
        defaultChecked
        onChange={handleChange}
      />
      <label htmlFor='multnomah-gender'>Multnomah</label>

      <input
        type='radio'
        value='washington'
        name={name}
        id='washington-gender'
        onChange={handleChange}
      />
      <label htmlFor='washington-gender'>Washington</label>
    </div>
  );
};

RadioControls.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default RadioControls;
