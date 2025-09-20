import './ActivityItem.css'
import { Avatar } from '@mui/joy'
function ActivityItem({message,img,time}) {
  return (
      <div className='ActivityItem'>
        <div className='activity-item'>
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