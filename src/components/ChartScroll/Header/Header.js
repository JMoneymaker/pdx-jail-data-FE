import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CSV from './CSV/CSV';
import RadioControls from './Radios/RadioControls';
import { UpdatedContext } from '../../../hooks/useUpdatedContext';
import styles from '../ChartScroll.css';

const Header = ({ title, category, chartType, csv, displayRadios, name, handleChange }) => {
  const { shortUpdated } = useContext(UpdatedContext);

  return (
    <header className={styles.headWrapper}>
      <div className={styles.titleContainer}>
        <div className={styles.titleWrapper}>
          <h3>{chartType} - {shortUpdated ? shortUpdated : 'loading'}</h3>
          <h2>{title}</h2>
        </div>
        <CSV csv={csv}></CSV>
      </div>
      <div className={styles.radioContainer}>
        { displayRadios ? <RadioControls
          name={name}
          category={category}
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
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  displayRadios: PropTypes.bool
};

export default Header;
