import { NavLink } from "react-router-dom";
import './SidebarItem.css'
import { SidebarIcons } from "../../../src/assets/icons/sidebar/sidebar";
const SidebarItem = ({ label, icon, link,isMultilink }) => {
  return (
    <>
      <div className="sidebaritem-main">

        {isMultilink?<span><img src={SidebarIcons.ArrowLineRight} alt={link} /></span>:<span className="spacer"></span>}
        <span><img src={icon} alt={link} /></span>
        <span className='sideitem-label'>{label}</span>
      </div>
    </>
  );
};

export default SidebarItem;
