import { useState } from 'react';
import Post from '../Post';
import { submitPost } from '../../helpers';
import InputBox from '../InputBox';
import styles from './ChatRoom.module.css';

function ChatRoom({posts: initialPosts, users, currentUser}) {
  const [posts, setPosts] = useState(initialPosts);

  const addPost = (message) => {
    submitPost({ 
      message,
      ts: Date.now(),
      user: currentUser.id 
    })
    .then(allPosts => setPosts(allPosts));
  }

  const postUser = (post) => {
    const {user: userId} = post;
    if (userId === currentUser.id) {
      return currentUser;
    }
    return users.find(user => user.id === userId)
  }

  return (
    <div className={styles.ChatRoom}>
      {
        posts.map(post => (
          <Post
            key={post.ts}
            post={post}
            user={postUser(post)}
            byCurrentUser={post.user == currentUser.id}
          />
        ))
      }
      

      <div className={styles.inputBox}>
        <InputBox submit={addPost} />
      </div>
    </div>
  );
}

export default ChatRoom;