import React from 'react'
import './Sidebar.css'
import { SidebarIcons } from '../../../src/assets/icons/sidebar/sidebar';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
const sidebarData = [
    {
      title: "Favorites",
      items: [
        { label: "Overview", icon: SidebarIcons.Dot, link: "/overview" },
        { label: "Projects", icon: SidebarIcons.Dot, link: "/projects" },
      ],
    },
    {
      title: "Dashboards",
      items: [
        { label: "Default", icon: SidebarIcons.ChartPieSlice, link: "/dashboard/default" },
        { label: "eCommerce", icon: SidebarIcons.ShoppingBagOpen, link: "/dashboard/ecommerce",isMultilink:true },
        { label: "Projects", icon: SidebarIcons.FolderNotch, link: "/dashboard/projects",isMultilink:true },
        { label: "Online Courses", icon: SidebarIcons.IdentificationCard, link: "/dashboard/courses",isMultilink:true },
      ],
    },
    {
      title: "Pages",
      items: [
        { label: "User Profile", icon: SidebarIcons.IdentificationBadge, link: "/profile",isMultilink:true },
        { label: "Account", icon: SidebarIcons.IdentificationCard, link: "/account",isMultilink:true },
        { label: "Corporate", icon: SidebarIcons.FolderNotch, link: "/corporate",isMultilink:true },
        { label: "Blog", icon: SidebarIcons.Notebook, link: "/blog",isMultilink:true },
        { label: "Social", icon: SidebarIcons.UsersThree, link: "/social",isMultilink:true },
      ],
    },
  ];
  

function Sidebar({ className }) {
  return (
    <>
    <div className={`Sidebar ${className || ''}`}>
      <aside className="sidebar-main">
        <div className='profile'>
          <img className='user-profile' src={SidebarIcons.ByeWind} alt="ByeWind" />
          <div className="user-name">ByeWind</div>
        </div>
        <div className='sidebar-items'>
          {sidebarData.map((menu, idx) => (
            <SidebarMenu key={idx} {...menu}/>
          ))}
        </div>
      </aside>
    </div>
    </>
  )
}

export default Sidebar