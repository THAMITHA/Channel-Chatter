import React from 'react'
import { Button } from './Button'

const buttonNames = ["All", "Gaming", "Songs", "Live", "Songs", "Live", "Socker", "Cricket", "Cookies", "Valentines", "All", "Gaming", "Songs", "Live", "Songs", "Live" ]
export const ButtonList = () => {
  return (
    <div className='flex'>
      {buttonNames.map((name, idx)=>(
        <Button key={idx}>{name={name}}</Button>
      ))}
    </div>
  )
}

