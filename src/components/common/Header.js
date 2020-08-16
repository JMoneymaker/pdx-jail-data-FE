import React from 'react';
import PropTypes from 'prop-types';
import styles from '../chart-scroll/ChartScroll.css';
import CSV from './CSV';
import RadioControls from './RadioControls';

const Header = ({ title, chartType, csv, displayRadios, name, id, handleChange, updated }) => {

  return (
    <header className={styles.headWrapper}>
      <div className={styles.titleContainer}>
        <div className={styles.titleWrapper}>
          <h3>{chartType} - {updated}</h3>
          <h2>{title}</h2>
        </div>
        <CSV csv={csv}></CSV>
      </div>
      <div className={styles.radioContainer}>
        { displayRadios ? <RadioControls
          name={name}
          id={id}
          handleChange={handleChange}
        ></RadioControls> : null}
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  chartType: PropTypes.string.isRequired,
  category: PropTypes.string,
  csv: PropTypes.object,
  updated: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  displayRadios: PropTypes.bool
};

export default Header;
