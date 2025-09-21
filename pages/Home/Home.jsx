import React, { useState } from "react"
import ActivityBar from "../../components/Layouts/ActivityBar/ActivityBar"
import Default from "../../components/Layouts/Default/Default"
import Sidebar from "../../components/Layouts/Sidebar/Sidebar"
import { DarkModeProvider, useDarkMode } from "../../contexts/DarkModeContext"
import "./Home.css"

function HomeContent() {
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
      <Default 
        onToggleSidebar={toggleSidebar} 
        onToggleActivityBar={toggleActivityBar}
        className={`main-content ${!isSidebarOpen ? 'sidebar-closed' : ''} ${!isActivityBarOpen ? 'activity-bar-closed' : ''}`}
      />
      <ActivityBar className={isActivityBarOpen ? 'activity-bar-open' : 'activity-bar-closed'}/>
    </div>
  )
}

function Home() {
  return (
    <DarkModeProvider>
      <HomeContent />
    </DarkModeProvider>
  )
}

export default Home