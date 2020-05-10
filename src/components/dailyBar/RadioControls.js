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
        id='clackamas-race'
        onChange={handleChange}
      />
      <label htmlFor='clackamas-race'>Clackamas</label>

      <input
        type='radio'
        value='multnomah'
        name={name}
        id='multnomah-race'
        defaultChecked
        onChange={handleChange}
      />
      <label htmlFor='multnomah-race'>Multnomah</label>

      <input
        type='radio'
        value='washington'
        name={name}
        id='washington-race'
        onChange={handleChange}
      />
      <label htmlFor='washington-race'>Washington</label>
    </div>
  );
};

RadioControls.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default RadioControls;
