import './ActivityItem.css'
import { Avatar } from '@mui/joy'
import { COLORS } from '../../../styles/colors'
function ActivityItem({message,img,time}) {
  return (
        <div className='activity-item'>
          <Avatar className='user-avatar' size="sm" alt="user-image" src={img} />
          <div className='details'>
            <div className='user-message' style={{color:`var(${COLORS.BLACK100})`}}>{message}</div>
            <div className='user-time' style={{color:`var(${COLORS.BLACK100})`}}>{time}</div>
          </div>
        </div>
  )
}

export default ActivityItem