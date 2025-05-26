import React, { useState } from 'react'
import { findPrime } from '../utils/helper'

export const Demo = () => {
    const [text, setText] = useState(0)
    console.log('Rendering...')
    const prime = findPrime(text) 
  return (
    <div className='m-4 p-2 w-96 h-96 border border-black'>
        <div>
            <input className="border border-black w-72 px-2" type='number' value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div>
            <h1 className='mt-4 font-bold text-xl'>nth prime: {prime}</h1>
        </div>
    </div>
  )
}

export default Demo