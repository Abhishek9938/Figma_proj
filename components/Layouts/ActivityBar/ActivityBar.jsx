import './ActivityBar.css'
import NotificationPanel from '../NotificationPanel/NotificationPanel'
import ActivityFeed from '../ActivityFeed/ActivityFeed'
import ContactList from '../ContactList/ContactList'
function ActivityBar({ className }) {
  return (
    <div className={`ActivityBar ${className || ''}`}>
        <div className='right-sidebar'>
            <NotificationPanel/>
            <ActivityFeed/>
            <ContactList/>
        </div>
    </div>
  )
}

export default ActivityBar