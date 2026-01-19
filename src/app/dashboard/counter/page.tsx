'use client'

import { useState } from "react"


export default function CounterPage(){
    const [ count, setCount ] = useState(0);

    const Increment = () => {
            setCount(count + 1)
    }
 const Decrement = () => {
            setCount(count - 1)
    }


    
    return(
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span>Productos en el carrito</span>
            <span className="text-8xl">{count}</span>
        <div className="flex justify-center space-x-2">
            <button onClick={Decrement} className="bg-slate-600 text-white py-1 px-5 rounded-md cursor-pointer hover:bg-black/10">-</button>
                <button onClick={Increment} className="bg-slate-600 text-white py-1 px-5 rounded-md cursor-pointer">+</button>
        </div>
        </div>
    )
}