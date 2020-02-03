import fetch from 'isomorphic-unfetch';
import absoluteUrl from 'next-absolute-url';
import ChatRoom from '../components/ChatRoom';

// placeholder for current user ;
const CURRENT_USER = { 
  "id": "current_user",
} 

function App({users, posts}) {
  return (
    <div className="App">
      <ChatRoom 
        users={users} 
        posts={posts} 
        currentUser={CURRENT_USER}
      />
    </div>
  );
}

// async fetch on server-side for SSR
App.getInitialProps = async function({req}) {
  const { protocol, host } = absoluteUrl(req);
  const response =  await fetch(`${protocol}//${host}/api/chatroom`);
  const  json = await response.json();
  const { users, posts } = json;
  return { users, posts };
}

export default App;