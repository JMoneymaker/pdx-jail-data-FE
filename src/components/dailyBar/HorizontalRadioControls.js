import React from 'react';
import PropTypes from 'prop-types';
import styles from './RadioControls.css';

const HorizontalRadioControls = ({ handleChange, name }) => {
  return (
    <div className={styles.radioGroup}>
      <input
        type='radio'
        value='multnomah'
        name={name}
        id='multnomah-agency'
        defaultChecked
        onChange={handleChange}
      />
      <label htmlFor='multnomah-agency'>Multnomah</label>

      <input
        type='radio'
        value='washington'
        name={name}
        id='washington-agency'
        onChange={handleChange}
      />
      <label htmlFor='washington-agency'>Washington</label>
    </div>
  );
};

HorizontalRadioControls.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default HorizontalRadioControls;
