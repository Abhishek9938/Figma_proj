import './ActivityBar.css'
import NotificationPanel from '../NotificationPanel/NotificationPanel'
import ActivityFeed from '../ActivityFeed/ActivityFeed'
import ContactList from '../ContactList/ContactList'
function ActivityBar() {
  return (
    <div className='ActivityBar'>
        <div className='right-sidebar'>
            <NotificationPanel/>
            <ActivityFeed/>
            <ContactList/>
        </div>
    </div>
  )
}

export default ActivityBar