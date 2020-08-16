import React from 'react';
import PropTypes from 'prop-types';
import Area from '../chart-templates/Area';
import HBar from '../chart-templates/HBar';
import VBar from '../chart-templates/VBar';
import Pie from '../chart-templates/Pie';

const ChartDisplay = ({ county, data, loading, template, yLabel }) => {
  
  const CHART_TEMPLATES = {
    VBar: <VBar 
      county={county} 
      data={data} 
      loading={loading} 
      yLabel={yLabel}></VBar>,
    HBar: <HBar 
      county={county} 
      data={data} 
      loading={loading}></HBar>,
    Area: <Area data={data} loading={loading} yLabel={yLabel}></Area>,
    Pie: <Pie county={county} data={data} loading={loading}></Pie>
  };

  return (
    <div>
      {CHART_TEMPLATES[template]}
    </div>
  );
};

ChartDisplay.propTypes = {
  county: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  template: PropTypes.string.isRequired,
  yLabel: PropTypes.string
};

export default ChartDisplay;
