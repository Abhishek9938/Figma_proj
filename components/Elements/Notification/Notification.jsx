import { COLORS } from "../../../styles/colors"
import { Avatar } from "@mui/joy"
import './Notification.css'
function Notification({img,message,time}) {
  return (
    <div className='notification-item'>
        <Avatar className='noti-avatar' size="sm" alt="user-image" src={img} />
        <div className='details'>
            <div className='noti-message' style={{color:`var(${COLORS.BLACK100})`}}>{message}</div>
            <div className='noti-time' style={{color:`var(${COLORS.BLACK100})`}}>{time}</div>
        </div>
    </div>
  )
}

export default Notification