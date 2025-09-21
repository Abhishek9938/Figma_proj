import React from 'react'
import './SidebarMenu.css'
import SidebarItem from '../../Elements/SidebarItem/SidebarItem';
import './SidebarMenu.css'
import { useDarkMode } from '../../../contexts/DarkModeContext';
const SidebarMenu = ({ title, items }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className='SidebarMenu'>
      <div className={`sidebarmenu-main ${isDarkMode ? 'dark-mode' : ''}`}>
        <h4 className={`sidebar-${title} sidebar-text`}>{title}</h4>
        <div className="flex flex-col gap-1">
          {items.map((item, idx) => (
            <SidebarItem key={idx} {...item}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
