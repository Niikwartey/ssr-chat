import { useState, useEffect } from 'react';
import moment from 'moment';


function TimeAgo({timestamp}) {
  const initialTimeAgo = moment(timestamp).fromNow();
  const [timeAgo, setTimeAgo] = useState(initialTimeAgo);

  useEffect(() => {
    const timeAgoInterval = setInterval(updateTimeAgo, 30000);
    return () => clearTimeout(timeAgoInterval);
  });
  
  const updateTimeAgo = () => {
    const newTimeAgo = moment(timestamp).fromNow();
    if(newTimeAgo !== timeAgo) setTimeAgo(newTimeAgo);
  }


  return (<span>{timeAgo}</span>);
}

export default TimeAgo;