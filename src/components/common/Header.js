import React from 'react';
import PropTypes from 'prop-types';
import styles from '../chart-scroll/ChartScroll.css';
import RadioControls from './RadioControls';
import CSV from './CSV';

const Header = ({ title, category, handleChange, name, id, data, updated, filename }) => {

  return (
    <header className={styles.headWrapper}>
      <div className={styles.titleContainer}>
        <div className={styles.titleWrapper}>
          <h3>{title} - {updated}</h3>
          <h1>{category}</h1>
        </div>
        <CSV 
          data={data}
          filename={filename}
        ></CSV>
      </div>
      <div className={styles.radioContainer}>
        <RadioControls 
          handleChange={handleChange}  
          name={name}  
          id={id} />
      </div>
    </header>
  );
};

Header.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  updated: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired
};

export default Header;
