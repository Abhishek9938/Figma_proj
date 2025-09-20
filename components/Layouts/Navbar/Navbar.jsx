import './Navbar.css'
import { navbarIcons } from "../../../src/assets/icons/navbar/navbar"
import IconButton from "../../Elements/IconButton/IconButton"

function Navbar() {
  return (
    <div className='Navbar'>
    <nav className="navbar-main">
      <div className="bread-crumbs-section">
        <div className="group-icons">
          <IconButton icon={navbarIcons.Sidebar} name="Sidebar" />
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
          <input type="text" placeholder="Search" autofocus="false"/>
          <span className="slash">⌘/</span>


        </div>
        <div className="group-icons">
          <IconButton icon={navbarIcons.Sun} name="Sun" />
          <IconButton icon={navbarIcons.ClockCounterClockwise} name="Clock" />
          <IconButton icon={navbarIcons.Bell} name="Bell" />
          <IconButton icon={navbarIcons.Sidebar} name="Sidebar" />

        </div>


      </div>
    </nav>
    </div>
  )
}

export default Navbar