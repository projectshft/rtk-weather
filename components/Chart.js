import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Chart = ({ data, title }) => {
  console.log('Chart Component Props - Data:', data);
  console.log('Chart Component Props - Title:', title);
  
  const sparklinesStyle = {
    height: '200px', 
    width: '200px'   
  };

  return (
    <div className="chart-container">
      <h3>{title}</h3>
      <Sparklines data={data} style={sparklinesStyle}>
        <SparklinesLine color="blue" />
      </Sparklines>
    </div>
  );
};

export default Chart;
