import React from 'react';
import PropTypes from 'prop-types';
import Area from '../chart-templates/Area';
import HBar from '../chart-templates/HBar';
import VBar from '../chart-templates/VBar';
import Pie from '../chart-templates/Pie';

const ChartDisplay = ({ county, data, loading, template, yLabel }) => {
  
  const CHART_TEMPLATES = {
    VBar: <VBar 
      loading={loading} 
      data={data} 
      county={county} 
      yLabel={yLabel}>
    </VBar>,
    HBar: <HBar 
      loading={loading}
      data={data} 
      county={county}>
    </HBar>,
    Area: <Area 
      loading={loading} 
      data={data}
      yLabel={yLabel}>
    </Area>,
    Pie: <Pie 
      loading={loading}
      data={data} 
      county={county}>
    </Pie>
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
  template: PropTypes.string.isRequired,
  yLabel: PropTypes.string
};

export default ChartDisplay;
