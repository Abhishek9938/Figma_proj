import { useState } from 'react'

import React, { useEffect} from 'react';
import Card from '../components/Cards/Card/Card'
import ChartCard from '../components/Cards/ChartCard/ChartCard';
import ContactList from '../components/Layouts/ContactList/ContactList';
import BasicTable from '../components/Cards/Table/Table';
import TableRow from '../components/Cards/TableRow/TableRow';
import ActivityFeed from '../components/Layouts/ActivityFeed/ActivityFeed';
import NotificationPanel from '../components/Layouts/NotificationPanel/NotificationPanel';
import Navbar from '../components/Layouts/Navbar/Navbar';
import LineChart from '../components/Charts/LineChart/LineChart';
import BasicLineChart from '../components/Charts/LineChart/LineChart';
import TreadyLinechart from '../components/Charts/LineChart/LineChart';
import TreadyBarchart from '../components/Charts/BarChart/BarChart';
import MapChart from '../components/Charts/MapChart/MapChart';

function App() {
  const [count, setCount] = useState(0)
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);


  return (
    <>
      {/* <Navbar/>
      <ContactList/>
      <ActivityFeed/>
      <NotificationPanel/>
      <BasicTable/>
      <LineChart/>
      <TreadyLinechart/>
      <TreadyBarchart/> */}
      
      <MapChart />
      <h1>Vite + React</h1>
      <div className="time">
        <h2>{currentTime}</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
      {/* World Map Chart */}
  
        

      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
