import React from 'react';
import PropTypes from 'prop-types';
import styles from '../chart-scroll/ChartScroll.css';
import CSV from './CSV';
import RadioControls from './RadioControls';

const Header = ({ title, category, csv, name, id, handleChange, updated }) => {

  return (
    <header className={styles.headWrapper}>
      <div className={styles.titleContainer}>
        <div className={styles.titleWrapper}>
          <h3>{title} - {updated}</h3>
          <h2>{category}</h2>
        </div>
        <CSV csv={csv}></CSV>
      </div>
      <div className={styles.radioContainer}>
        <RadioControls
          name={name}
          id={id}
          handleChange={handleChange}
        ></RadioControls>
      </div>
    </header>
  );
};

Header.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
  csv: PropTypes.object,
  updated: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Header;
