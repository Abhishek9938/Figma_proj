import './ActivityItem.css'
import { Avatar } from '@mui/joy'
import { useDarkMode } from '../../../contexts/DarkModeContext'
function ActivityItem({message,img,time}) {
  const { isDarkMode } = useDarkMode()
  return (
      <div className='ActivityItem'>
        <div className={`activity-item ${isDarkMode ? 'dark-mode' : ''}`}>
          <Avatar className='user-avatar' size="sm" alt="user-image" src={img} />
          <div className='user-details'>
            <div className='user-message' >{message}</div>
            <div className='user-time' >{time}</div>
          </div>
        </div>
      </div>
  )
}

export default ActivityItem