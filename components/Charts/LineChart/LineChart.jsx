import * as React from 'react';
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';
import DotBlack from '@/assets/icons/main/DotBlack.svg';
import DotBlue from '@/assets/icons/main/DotBlue.svg';
import './LineChart.css'
import { useDarkMode } from '../../../contexts/DarkModeContext';
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

  const Lightdata = {
    seriesPcolor:'#A8C5DA',
    seriesUcolor:'#1C1C1C',
    xStroke : '#1C1C1C33',
    gridStroke: '#1C1C1C66'
  }
  const Darkdata = {
    seriesPcolor:'#A8C5DA',
    seriesUcolor:'#C6C7F8',
    xStroke : '#FFFFFF66',
    gridStroke: '#FFFFFF33'
  }

export default function TreadyLinechart() {
  const {isDarkMode} = useDarkMode()
  const data = isDarkMode ? Darkdata : Lightdata;

  const settings = {
    height: 200,
    series: [
      { data: pData, highlightScope, showMark: false, color: data.seriesPcolor },
      { data: uData , highlightScope, showMark: false, color: data.seriesUcolor },
    ],
    xAxis: [{ scaleType: 'point', data: xLabels,stroke: data.xStroke,disableLine:true,disableTicks: true }],
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
        stroke: data.gridStroke
      }
    },
    margin,
  };

  return (
    <div className={`TreadyLinechart ${isDarkMode ? 'dark-mode' : ''}`}>
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
    </div>
  );
}
