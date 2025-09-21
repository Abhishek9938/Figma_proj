import React, { useState } from "react"
import ActivityBar from "../../components/Layouts/ActivityBar/ActivityBar"
import Sidebar from "../../components/Layouts/Sidebar/Sidebar"
import Navbar from "../../components/Layouts/Navbar/Navbar"
import Orderslist from "../../components/Layouts/Orders/Orderslist"
import { useDarkMode } from "../../contexts/DarkModeContext"
import "./Orders.css"

function Orders() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isActivityBarOpen, setIsActivityBarOpen] = useState(true)
  const { isDarkMode } = useDarkMode()

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  const toggleActivityBar = () => {
    setIsActivityBarOpen(!isActivityBarOpen)
  }

  return (
    <div className={`home-layout ${isDarkMode ? 'dark-mode' : ''}`}>
      <Sidebar className={isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}/>
      <div className={`orders-main ${!isSidebarOpen ? 'sidebar-closed' : ''} ${!isActivityBarOpen ? 'activity-bar-closed' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
        <Navbar onToggleSidebar={toggleSidebar} onToggleActivityBar={toggleActivityBar}/>
        <div className='orders-content'>
          <Orderslist/>
        </div>
      </div>
      <ActivityBar className={isActivityBarOpen ? 'activity-bar-open' : 'activity-bar-closed'}/>
    </div>
  )
}

export default Orders

