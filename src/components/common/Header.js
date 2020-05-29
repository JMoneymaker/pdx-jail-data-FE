import React from 'react';
import PropTypes from 'prop-types';
import styles from '../chart-scroll/VerticalBar.css';
import RadioControls from './RadioControls';
import CSV from './CSV';


const Header = ({ title, category, handleChange, name, id, data, updated, filename }) => {

  return (
    <div className={styles.headContainer}>
      <header className={styles.headWrapper}>
        <div className={styles.titleContainer}>
          <div className={styles.titleWrapper}>
            <h4>{title} - {updated}</h4>
            <CSV 
              data={data}
              filename={filename}
            ></CSV>
          </div>
          <div className={styles.categoryWrapper}>
            <h3>{category}</h3>
          </div>
        </div>
        <div className={styles.radioContainer}>
          <RadioControls 
            handleChange={handleChange}  
            name={name}  
            id={id} />
        </div>
      </header>
    </div>
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
