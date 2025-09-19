
import { Noticons } from "../../../src/assets/icons/notification/notification";
import { COLORS } from "../../../styles/colors";
import Notification from "../../Elements/Notification/Notification";

const notificationData=[
  { "id":1,
    "icon": Noticons.BugBeetle,
    "message": "You have a bug that needs...",
    "time": "Just now",
    "color": COLORS.BLUE  
  },
  { "id":2,
    "icon": Noticons.User,
    "message": "New user registered",
    "time": "59 minutes ago",
    "color":COLORS.PURPLE  
  },
  { "id":3,
    "icon": Noticons.BugBeetle,
    "message": "You have a bug that needs...",
    "time": "12 hours ago",
    "color":COLORS.BLUE 
  },
  { "id":4,
    "icon": Noticons.Broadcast,
    "message": "Andi Lane subscribed to you",
    "time": "Today, 11:59 AM",
    "color":COLORS.PURPLE
  }
]

function NotificationPanel() {
  return (
    <>
      <section id="section-feeds">
          <div className="noti-container">
            <div className="noti-header">
              <h2 className="noti-title" style={{color:`var(${COLORS.BLACK100})`}}>Notifications</h2>
            </div>

            {notificationData.map((data) => (
            <Notification 
                key={data.id}
                message={data.message}
                img={data.icon}
                time={data.time}
                color={data.color}
            />
            ))}
        </div>
      </section>
    </>
  )
}

export default NotificationPanel