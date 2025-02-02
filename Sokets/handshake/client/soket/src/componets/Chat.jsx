import React from 'react'
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
const Chat = () => {
    const [socket] = useState(() => io(':8000'));
 
    useEffect(() => {
      // we need to set up all of our event listeners
      // in the useEffect callback function
      console.log('Is this running?');
      socket.on('welcome', data => console.log(data));
      socket.emit('test',data => {
        //
      })
   
      // note that we're returning a callback function
      // this ensures that the underlying socket will be closed if App is unmounted
      // this would be more critical if we were creating the socket in a subcomponent
      return () => socket.removeAllListeners;
    }, [socket]);
  return (
    <div>
      <h1>Socket Test</h1>
    </div>
  )
}

export default Chat
