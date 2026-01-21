'use client'


import React from 'react'
import { useState } from "react"

interface Props  {
    value?: number
}

export const CartCounter = ({ value = 0 }: Props) => {
      const [ count, setCount ] = useState(value);

    const Increment = () => {
            setCount(count + 1)
    }
 const Decrement = () => {
            setCount(count - 1)
    }

  return (
    <div>
      <span className="text-8xl text-center">{count}</span>
        <div className="flex justify-center space-x-2">
            <button onClick={Decrement} className="bg-slate-600 text-white py-1 px-5 rounded-md cursor-pointer hover:bg-black/10">-</button>
                <button onClick={Increment} className="bg-slate-600 text-white py-1 px-5 rounded-md cursor-pointer">+</button>
        </div>
    </div>
  )
}


