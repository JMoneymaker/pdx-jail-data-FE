import React from 'react';
import PropTypes from 'prop-types';
import styles from './RadioControls.css';

const RadioControls = ({ handleChange, name, category }) => {

  return (
    <div className={styles.radioGroup}>
      <input
        type='radio'
        value='clackamas'
        name={name}
        id={category + '-clackamas'}
        onChange={handleChange}
        disabled={name === 'Agency-radio'}
      />
      <label  htmlFor={category + '-clackamas'}>C</label>

      <input
        type='radio'
        value='multnomah'
        name={name}
        id={category + '-multnomah'}
        defaultChecked
        onChange={handleChange}
      />
      <label htmlFor={category + '-multnomah'}>M</label>

      <input
        type='radio'
        value='washington'
        name={name}
        id={category + '-washington'}
        onChange={handleChange}
        disabled={name === 'Age-radio'}
      />
      <label htmlFor={category + '-washington'}>W</label>
    </div>
  );
};

RadioControls.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default RadioControls;
