import './ActivityFeed.css'
import { COLORS } from '../../../styles/colors';
import { FeedImgs } from '../../../src/assets/Users/Feeds/Feeds';
import ActivityItem from '../../Elements/ActivityItem/ActivityItem';
const activityData = [
    {
      id: 1,
      avatar: FeedImgs.User1, // replace with real images
      message: "You have a bug that needs...",
      time: "Just now"
    },
    {
      id: 2,
      avatar: FeedImgs.User2,
      message: "Released a new version",
      time: "59 minutes ago"
    },
    {
      id: 3,
      avatar: FeedImgs.User3,
      message: "Submitted a bug",
      time: "12 hours ago"
    },
    {
      id: 4,
      avatar: FeedImgs.User4,
      message: "Modified A data in Page X",
      time: "Today, 11:59 AM"
    },
    {
      id: 5,
      avatar: FeedImgs.User5,
      message: "Deleted a page in Project X",
      time: "Feb 2, 2023"
    }
  ];
function ActivityFeed() {
  return (
    <>
      <section id="section-feeds">
          <div className="users-container">
            <div className="users-header">
              <h2 className="users-title" style={{color:`var(${COLORS.BLACK100})`}}>Activities</h2>
            </div>

            {activityData.map((user) => (
            <ActivityItem 
                key={user.id}
                message={user.message}
                img={user.avatar}
                time={user.time}
            />
            ))}
        </div>
      </section>
    </>
  )
}

export default ActivityFeed