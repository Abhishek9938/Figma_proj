import { navbarIcons } from "../../../src/assets/icons/navbar/navbar"
import IconButton from "../../Elements/IconButton"
function Navbar() {
  return (
    <Navbar className="navbar">
        <div className="bread-crumbs-session">
            <div className="group-icons">
                <IconButton icon={navbarIcons.Sidebar} name="Sidebar"/>
                <IconButton icon={navbarIcons.Star} name="Star"/>

            </div>
            <div className="bread-crumbs">
                <IconButton name="Dashboards"/>
                <p className="slash">/</p>
                <IconButton name="Default"/>

            </div>

        </div>
        <div className="utilities">
           

        </div>


    </Navbar>
  )
}

export default Navbar