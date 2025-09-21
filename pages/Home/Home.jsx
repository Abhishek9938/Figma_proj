import React, { useState } from "react"
import ActivityBar from "../../components/Layouts/ActivityBar/ActivityBar"
import Default from "../../components/Layouts/Default/Default"
import Sidebar from "../../components/Layouts/Sidebar/Sidebar"
import "./Home.css"

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isActivityBarOpen, setIsActivityBarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  const toggleActivityBar = () => {
    setIsActivityBarOpen(!isActivityBarOpen)
  }

  return (
    <>
      <div className="home-layout">
        <Sidebar className={isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}/>
        <Default 
          onToggleSidebar={toggleSidebar} 
          onToggleActivityBar={toggleActivityBar}
          className={`main-content ${!isSidebarOpen ? 'sidebar-closed' : ''} ${!isActivityBarOpen ? 'activity-bar-closed' : ''}`}
        />
        <ActivityBar className={isActivityBarOpen ? 'activity-bar-open' : 'activity-bar-closed'}/>
      </div>
    </>
  )
}

export default Home