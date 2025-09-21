
// import { useState } from 'react';

// import React, { useEffect} from 'react';
import Home from '../pages/Home/Home';
import SalesDonutChart from '../components/Charts/PieChart/PieChart';


function App() {
  // const [count, setCount] = useState(0)
  //   const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  //   useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTime(new Date().toLocaleTimeString());
  //   }, 1000);

  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, []);


  return (
    <>
      {/* <ChartCard/> */}
      {/* <Navbar/>
      <ContactList/>
      <ActivityFeed/>
      <NotificationPanel/>
      <BasicTable/>
      <TreadyLinechart/>
      <TreadyBarchart/>
      <MapChart /> 
      
      <Orderslist/>
      */}
      {/* <Sidebar/>
      <ActivityBar/> */}
      {/* <Default/> */}
      <Home/>
      {/* <SalesDonutChart/> */}
      
      {/* <SalesDonutChart/> */}
      {/* <h1>Vite + React</h1> */}
      {/* <div className="time">
        <h2>{currentTime}</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
