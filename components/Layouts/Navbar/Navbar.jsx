import './Navbar.css'
import { navbarIcons } from "../../../src/assets/icons/navbar/navbar"
import IconButton from "../../Elements/IconButton/IconButton"
import { useDarkMode } from "../../../contexts/DarkModeContext"

function Navbar({ onToggleSidebar,onToggleActivityBar }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  
  return (
    <div className={`Navbar ${isDarkMode ? 'dark-mode' : ''}`}>
    <nav className="navbar-main">
      <div className="bread-crumbs-section">
        <div className="group-icons">
          <IconButton icon={navbarIcons.Sidebar} name="Sidebar" onClick={onToggleSidebar} />
          <IconButton icon={navbarIcons.Star} name="Star" />
        </div>
        <div className="bread-crumbs">
          <IconButton name="Dashboards" />
          <span className="slash">/</span>
          <IconButton name="Default" />
        </div>
      </div>
      <div className='utilities-section'>
        <div className="search-input-container">
          <img src={navbarIcons.Search} alt="Search"  className="search-icon"/>
          <input type="text" placeholder="Search" autoFocus="false"/>
          <span className="slash">⌘/</span>


        </div>
        <div className="group-icons">
          <IconButton icon={navbarIcons.Sun} name="Sun" onClick={toggleDarkMode} />
          <IconButton icon={navbarIcons.ClockCounterClockwise} name="Clock" />
          <IconButton icon={navbarIcons.Bell} name="Bell" />
          <IconButton icon={navbarIcons.Sidebar} name="Sidebar" onClick={onToggleActivityBar} />

        </div>


      </div>
    </nav>
    </div>
  )
}

export default Navbar