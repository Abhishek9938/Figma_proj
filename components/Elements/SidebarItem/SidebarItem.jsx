import { NavLink } from "react-router-dom";
import './SidebarItem.css'
import { SidebarIcons } from "../../../src/assets/icons/sidebar/sidebar";
import { useDarkMode } from "../../../contexts/DarkModeContext";
const SidebarItem = ({ label, icon, link,isMultilink }) => {
  const { isDarkMode } = useDarkMode()
  return (
    <>
      <div className="SidebarItem">
        <div className={`sidebaritem-main ${isDarkMode ? 'dark-mode' : ''}`}>

          {isMultilink?<span><img src={SidebarIcons.ArrowLineRight} alt={link} /></span>:<span className="spacer"></span>}
          <span><img src={icon} alt={link} /></span>
          <span className='sideitem-label'>{label}</span>
        </div>
      </div>
    </>
  );
};

export default SidebarItem;
