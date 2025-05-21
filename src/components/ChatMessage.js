import React from 'react'

export const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center'>
         <img className="h-12"
      alt="user" 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoB4l1vBNqbEpwil6Jsrpr6gE8wLY5_23geyqPK0QyhVo9x24z31MDvpC1WvDF3Gp8h6o&usqp=CAU"/>
      <span className='font-bold px-4'>{name}</span>  
      <span>{message}</span>
    </div>
  )
}



