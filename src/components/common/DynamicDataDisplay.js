import React from 'react';
import PropTypes from 'prop-types';


const DynamicDataDisplay = ({ children, hook }) => {
  const printableNumber = (n) =>  {return (n > 0) ? '+' + n : n;};
  const { data } = hook();
  return (
    <div>
      <h3>{children}</h3>
      <div>
        <h2>{printableNumber(data)}</h2>
      </div>
    </div>
  );
};

DynamicDataDisplay.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.number.isRequired,
  hook: PropTypes.func.isRequired
};

export default DynamicDataDisplay;
