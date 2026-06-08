 import socket from "./Services/Socket"
  import React from "react"
import MessageList from "./component/MessageList"
import ChatRoom from "./Pages/ChatRoom"
import {Routes,Route} from "react-router-dom"
function App() {
  const [RoomId,setRoomId] = React.useState(null);
  const [messages,setMessages] = React.useState("")
  
  React.useEffect(()=>{
    
  
    socket.on("room-created",(roomId)=>{
      console.log("room created",roomId)
      setRoomId(roomId)
    })
  },[]

)
const join_room = (e)=>{
  e.preventDefault()
  socket.emit("join_room")
}
const leave_room = (e)=>{
  e.preventDefault()
  socket.emit("leave_room", RoomId)
}
const SubmitHandler=(e)=>{
  e.preventDefault()
  socket.emit("send_room_message",RoomId,messages)
}
const sendMessage = (e)=>{
 e.preventDefault()

}
  return (
    <>

      <div className="flex w-full h-screen justify-center items-center gap-3">
   <div className="block border-1 p-3 ">
      <button type="button" onClick={join_room}> Button</button>

   </div>
  
  <div>
      <button type="button" onClick={leave_room} className="block border-1 p-3">  Leave Button</button>
   </div>   

   <form >
    <input type="text" value={messages} onChange={(e)=>setMessages(e.target.value)} className="p-2 outline-none border-1" />
   <button onClick={SubmitHandler}>Send</button>
   </form>
    


   <div>

  
   </div>
      </div>
      <Routes>
        <Route path="/chatroom" element={<ChatRoom/>}/>
      </Routes>

    </>
  )
}

export default App
