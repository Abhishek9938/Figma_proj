import React from 'react'
import './Default.css'
import ChartCard from '../../Cards/ChartCard/ChartCard'
import TreadyBarchart from '../../Charts/BarChart/BarChart'
import TreadyLinechart from '../../Charts/LineChart/LineChart'
import MapChart from '../../Charts/MapChart/MapChart'
import BasicTable from '../../Cards/Table/Table'
import Navbar from '../Navbar/Navbar' 
import SalesDonutChart from '../../Charts/PieChart/PieChart'
function Default({ onToggleSidebar, onToggleActivityBar, className }) {
  return (
    <div className={`Default-main ${className || ''}`}>
        <Navbar onToggleSidebar={onToggleSidebar} onToggleActivityBar={onToggleActivityBar}/>
          <div className='fullwidth-default'>
          <div className='main-section'>
              <ChartCard/>
              <TreadyBarchart/>
          </div>
          <div className='main-section'>
              <TreadyLinechart/>
              <MapChart/>
            
          </div>
          <div className='main-section'>
              <BasicTable/>
              <SalesDonutChart/>
          </div>
        </div>
    </div>
  )
}

export default Default