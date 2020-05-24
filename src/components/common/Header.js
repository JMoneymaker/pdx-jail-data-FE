import React from 'react';
import PropTypes from 'prop-types';
import styles from '../chart-scroll/VerticalBar.css';
import RadioControls from './RadioControls';

const Header = ({ title, category, handleChange, name, id }) => {

  return (
    <>
      <header className={styles.titleWrapper}>
        <h3>{title}</h3>
        <h2>{category}</h2>
      </header>
      <RadioControls 
        handleChange={handleChange}  
        name={name}  
        id={id} />
    </>
  );
};

Header.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Header;
