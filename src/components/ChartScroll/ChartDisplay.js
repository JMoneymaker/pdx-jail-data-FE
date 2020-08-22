import React from 'react';
import PropTypes from 'prop-types';
import Area from './chart-templates/Area';
import Pie from './chart-templates/Pie';
import HBar from './chart-templates/HBar';
import VBar from './chart-templates/VBar';

const ChartDisplay = ({ county, data, loading, yLabel, template }) => {
  
  const CHART_TEMPLATES = {
    Area: <Area 
      data={data}
      loading={loading} 
      yLabel={yLabel}></Area>,
    Pie: <Pie 
      county={county} 
      data={data} 
      loading={loading}></Pie>,
    HBar: <HBar 
      county={county} 
      yLabel={yLabel}>
    </HBar>,
    VBar: <VBar 
      county={county} 
      data={data} 
      loading={loading} 
      yLabel={yLabel}></VBar>
  };

  return (

    <>
      {CHART_TEMPLATES[template]}
    </>

  );

};

ChartDisplay.propTypes = {
  county: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  yLabel: PropTypes.string,
  template: PropTypes.string.isRequired
};

export default ChartDisplay;
