import React from 'react'
import './SidebarMenu.css'
import SidebarItem from '../../Elements/SidebarItem/SidebarItem';
import './SidebarMenu.css'

const SidebarMenu = ({ title, items }) => {
  return (
    <div className='SidebarItem'>
      <div className="sidebarmenu-main">
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
