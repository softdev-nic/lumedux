import React from 'react'
import MessageList from '../component/MessageList'
function ChatRoom() {
  return (
    <div className="flex flex-col gap-2 p-4 justify-center items-center h-full w-full">
        <div className='w-[80%] h-full bg-grey-500 rounded-lg'>
        <MessageList/>
        </div>
    </div>
  )
}

export default ChatRoom