import ActivityBar from "../../components/Layouts/ActivityBar/ActivityBar"
import Default from "../../components/Layouts/Default/Default"
import Navbar from "../../components/Layouts/Navbar/Navbar"
import Sidebar from "../../components/Layouts/Sidebar/Sidebar"

function Home() {
  return (
    <>
      <div className="flex flex-row align-items-center justify-content-center">
        <Sidebar/>
        <Default/>
        <ActivityBar/>
      </div>

        
    </>

  )
}

export default Home