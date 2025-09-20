import * as React from 'react';
import { BarChart as MuiBarChart } from '@mui/x-charts/BarChart';
import './BarChart.css' 
const margin = { right: 24 };
const uData = [15, 10, 11, 16, 19, 21];
const pData = [7, 18, 15, 11, 13, 20];
const xLabels = [
  'Jan',
  'Feb',
  'mar',
  'Apr',
  'May',
  'Jun',
];

const highlightScope = {
  highlight: 'item',
  fade: 'global',
};

const settings = {
  height: 300,
  series: [
    { data: pData , showMark: false, color: '#A8C5DA', stack: 'stack1',barWidth: 25  },
    { data: uData , showMark: false, color: '#A8C5DA50', stack: 'stack1',barWidth: 25 },
  ],
  xAxis: [{ scaleType: 'band', data: xLabels,stroke: '#1C1C1C33',disableTicks: true }],
  yAxis: [{ 
    width: 50,
    min: 0,
    max: 30,
    tickNumber: 4,
    valueFormatter: (value) => {
      if (value === 0) return '0';
      if (value === 10) return '10M';
      if (value === 20) return '20M';
      if (value === 30) return '30M';
      return '';
    },
    disableLine: true,
    disableTicks: true 
  }],
  grid: { 
    vertical: false, 
    horizontal: true,
    horizontalLine: {
      stroke: '#1C1C1C66'
    }
  },
  margin,
};

export default function TreadyBarchart() {
  return (
    <div className='bar-section' >
        <div className='title-group'>
          <div className='title'>Projections vs Actuals</div>
        </div>
        
        <div className='bar-graph'>
        <MuiBarChart {...settings}   bar={{barThickness: 40,categoryGapRatio: 0.3, barGapRatio: 0.1}}/>
        </div>
       
    </div>
  );
}
