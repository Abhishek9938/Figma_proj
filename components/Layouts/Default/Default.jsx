import React from 'react'
import './Default.css'
import ChartCard from '../../Cards/ChartCard/ChartCard'
import TreadyBarchart from '../../Charts/BarChart/BarChart'
import TreadyLinechart from '../../Charts/LineChart/LineChart'
import MapChart from '../../Charts/MapChart/MapChart'
import BasicTable from '../../Cards/Table/Table'
import Navbar from '../Navbar/Navbar' 
function Default() {
  return (
    <div className='Default-main'>
        <Navbar/>
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
          </div>
        </div>
    </div>
  )
}

export default Default