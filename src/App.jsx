 import socket from "./Services/Socket"
  import React from "react"

function App() {
  let RoomId;
  
  React.useEffect(()=>{
    
    socket.emit("message","hello")
    socket.on("room-created",(roomId)=>{
      console.log("room created",roomId)
      RoomId = roomId
    })
  },[]

)
const join_room = (e)=>{
  e.preventDefault()
  socket.emit("join_room")
}
const leave_room = (e)=>{
  e.preventDefault()
  socket.emit("leave_room",'GTBBUldXiNvhAJz-AAAD')
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
      </div>

    </>
  )
}

export default App
