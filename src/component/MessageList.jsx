import React from 'react'
import socket from '../Services/Socket'
function MessageList() {
const [messages,setMessages] = React.useState([])
 React.useEffect(() => {

  const handleMessage = (message) => {
    console.log(message);

    setMessages((prev) => [...prev, message]);
  };

  socket.on("message_room", handleMessage);

  return () => {
    socket.off("message_room", handleMessage);
  };

}, []);

  return (
    <div className="flex flex-col gap-2 p-4">
      {messages.map((msg, index) => (
        <div key={index} className="p-2 bg-gray-100 rounded">
          {msg}
        </div>
      ))}
    </div>
  )                 
}

export default MessageList