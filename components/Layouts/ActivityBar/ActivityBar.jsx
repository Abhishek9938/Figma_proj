import './ActivityBar.css'
import NotificationPanel from '../NotificationPanel/NotificationPanel'
import ActivityFeed from '../ActivityFeed/ActivityFeed'
import ContactList from '../ContactList/ContactList'
import { useDarkMode } from '../../../contexts/DarkModeContext'
function ActivityBar({ className }) {
  const { isDarkMode } = useDarkMode()
  return (
    <div className={`ActivityBar ${className || ''}`}>
        <div className={`right-sidebar ${isDarkMode ? 'dark-mode' : ''}`}>
            <NotificationPanel/>
            <ActivityFeed/>
            <ContactList/>
        </div>
    </div>
  )
}

export default ActivityBar