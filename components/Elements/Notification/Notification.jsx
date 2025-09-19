import { COLORS } from "../../../styles/colors"
import { Avatar } from "@mui/joy"
import './Notification.css'
function Notification({img,message,time,color}) {
  return (
    <div className='notification-item'>
        <Avatar className='noti-avatar' style={{backgroundColor:`var(${color})`}} size="sm" alt="user-image" src={img} />
        <div className='details'>
            <div className='noti-message'>{message}</div>
            <div className='noti-time' >{time}</div>
        </div>
    </div>
  )
}

export default Notification