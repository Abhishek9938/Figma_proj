import * as React from 'react';
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';
import DotBlack from '@/assets/icons/main/DotBlack.svg';
import DotBlue from '@/assets/icons/main/DotBlue.svg';
import './LineChart.css'
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
    { data: pData, highlightScope, showMark: false, color: '#A8C5DA' },
    { data: uData , highlightScope, showMark: false, color: '#1C1C1C' },
  ],
  xAxis: [{ scaleType: 'point', data: xLabels,stroke: '#1C1C1C33',disableLine:true,disableTicks: true }],
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

export default function TreadyLinechart() {
  return (
    <div className='line-section' >
        <div className='title-group'>
          <div className='title'>Revenue</div>
          <span>|</span>
          <div className='week'>
            <img src={DotBlack} alt="DotBlack" />Current week <strong>$58,211</strong>
          </div>
          <div className='week'>
            <img src={DotBlue} alt="DotBlack" />Previous Week  <strong>$68,768</strong>
          </div>

        </div>
        
        <div className='line-graph'>
          <LineChart {...settings} />
        </div>
       
    </div>
  );
}
