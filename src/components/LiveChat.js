import React from 'react'
import { ChatMessage } from './ChatMessage'

const LiveChat = () => {
  return (
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg'>
      <ChatMessage name="Thamitha" message="This is Namasate React live! 🙏" />
      <ChatMessage name="Thamitha" message="This is Namasate React live! 🙏" />
      <ChatMessage name="Thamitha" message="This is Namasate React live! 🙏" />
      <ChatMessage name="Thamitha" message="This is Namasate React live! 🙏" />
    </div>
  )
}

export default LiveChat