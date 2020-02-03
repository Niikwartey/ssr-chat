import { Validate, Calendar } from 'grommet-icons';
import moment from 'moment';
import TimeAgo from '../TimeAgo';
import Card from '../Card';
import styles from  './Post.module.css';

function Post({post, user, byCurrentUser}) {
  if(!post) return null;

  const { message, ts } = post;
  const { real_name, username, verified} = user;

  return (
    <div className={`${styles.Post} ${byCurrentUser ? styles.byCurrentUser:''}`}>
      <div>
        <div className={styles.avatarWrapper}>
          <img 
            className={styles.avatar} 
            src={byCurrentUser ? '/images/better-icon.svg':`/images/${username}.jpg`}
            alt={`${username}'s avatar`}
          />
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.metadata}>
          <div className={styles.user}>
            {
              !byCurrentUser &&
              <span>
                {real_name} 
                <span className={styles.divider}>-</span>
                <span className={styles.username}>
                  <a>
                    @{username}
                    {
                      verified && 
                      <span title="verified">
                        <Validate className={styles.verified} />
                      </span>
                    }
                  </a>
                </span>
                
              </span>
            }
          </div>
          <div>
            <TimeAgo timestamp={ts} />
          </div>
        </div>


        {
          byCurrentUser ? 
          <p className={styles.message}>{message}</p>
          :
          <Card
            back={(
              <p className={styles.activeDate}>
                <Calendar className={styles.icon} />
                <span>active since</span>
                <span>
                  {moment(user.created_at).format('MMMM DD, YYYY')}
                </span>
              </p>
            )}
          >
            <p className={styles.message}>{message}</p>
          </Card>
        }
      </div>
    </div>
  );
}

export default Post;