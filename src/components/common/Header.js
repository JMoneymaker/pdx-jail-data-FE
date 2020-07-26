import React from 'react';
import PropTypes from 'prop-types';
import styles from '../chart-scroll/ChartScroll.css';
import RadioControls from './RadioControls';
import CSV from './CSV';

const Header = ({ title, category, handleChange, name, id, data, filename, updated }) => {

  return (
    <header className={styles.headWrapper}>
      <div className={styles.titleContainer}>
        <div className={styles.titleWrapper}>
          <h3>{title} - {updated}</h3>
          <h2>{category}</h2>
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
  handleChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  data: PropTypes.array,
  updated: PropTypes.string,
  filename: PropTypes.string.isRequired
};

export default Header;
