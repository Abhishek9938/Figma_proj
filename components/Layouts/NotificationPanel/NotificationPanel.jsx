
import { Noticons } from "../../../src/assets/icons/notification/notification";
import { COLORS } from "../../../styles/colors";
import Notification from "../../Elements/Notification/Notification";

const notificationData=[
  { "id":1,
    "icon": Noticons.BugBeetle,
    "message": "You have a bug that needs...",
    "time": "Just now"
  },
  { "id":2,
    "icon": Noticons.User,
    "message": "New user registered",
    "time": "59 minutes ago"
  },
  { "id":3,
    "icon": Noticons.BugBeetle,
    "message": "You have a bug that needs...",
    "time": "12 hours ago"
  },
  { "id":4,
    "icon": Noticons.Broadcast,
    "message": "Andi Lane subscribed to you",
    "time": "Today, 11:59 AM"
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
            />
            ))}
        </div>
      </section>
    </>
  )
}

export default NotificationPanel