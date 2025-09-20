import ChartCard from '../components/Cards/ChartCard/ChartCard';
import ContactList from '../components/Layouts/ContactList/ContactList';
import BasicTable from '../components/Cards/Table/Table';
import TableRow from '../components/Cards/TableRow/TableRow';
import ActivityFeed from '../components/Layouts/ActivityFeed/ActivityFeed';
import NotificationPanel from '../components/Layouts/NotificationPanel/NotificationPanel';
import Navbar from '../components/Layouts/Navbar/Navbar';
import TreadyLinechart from '../components/Charts/LineChart/LineChart';
import TreadyBarchart from '../components/Charts/BarChart/BarChart';
import MapChart from '../components/Charts/MapChart/MapChart';
import Sidebar from '../components/Layouts/Sidebar/Sidebar';

function App() {
  return (
    <>
      <ChartCard/>
      {/* <Navbar/>
      <ContactList/>
      <ActivityFeed/>
      <NotificationPanel/>
      <BasicTable/>
      <TreadyLinechart/>
      <TreadyBarchart/>
      <MapChart /> */}
      <Sidebar/>
    </>
  )
}

export default App
