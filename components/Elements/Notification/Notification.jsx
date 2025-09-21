import { Avatar } from "@mui/joy"
import './Notification.css'
import { useDarkMode } from '../../../contexts/DarkModeContext'
function Notification({img,message,time,color}) {
  const { isDarkMode } = useDarkMode()
  return (
    <div className="Notification">
      <div className={`notification-item ${isDarkMode ? 'dark-mode' : ''}`}>
          <Avatar className='noti-avatar' style={{backgroundColor:`var(${color})`}} size="sm" alt="user-image" src={img} />
          <div className='noti-details'>
              <div className='noti-message'>{message}</div>
              <div className='noti-time' >{time}</div>
          </div>
      </div>
    </div>
  )
}

export default Notification