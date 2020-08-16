import React from 'react';
const CHART_TEMPLATES = {
  ageTemplate: <VBar 
    county={county} 
    data={data} 
    loading={loading} 
    yLabel={'Age Range'} 
    xLabel={'Number of People in Detention'}></VBar>,
  agencyTemplate: <HBar 
    county={county} 
    data={data} 
    loading={loading} 
    xLabel={'Number of People in Detention'}></HBar>,
  // 'Area': <Area county={county} data={data} loading={loading} yLabel={template.yLabel} xLabel={template.xLabel}></Area>,
  // 'Pie': <Pie county={county} data={data} loading={loading}></Pie>
};
