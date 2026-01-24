"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import React, { useEffect } from "react";
import { addOne, subtractOne, resetCount, initCounterState } from "@/store/counter/counterSlice";

interface Props {
  value?: number;
}

export interface CounterResponse{
  method: string;
  count: number;
}

const getApiCounter = async(): Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then(res => res.json());
  console.log(data)

  return data;
}

export const CartCounter = ({ value = 0 }: Props) => {
  // const [count, setCount] = useState(value);

  
  const count = useAppSelector(state => state.counter.count)
  const dispatch = useAppDispatch();
  // useEffect(() =>{
  //   dispatch(initCounterState(value))
  // }, [dispatch, value])

    useEffect(() =>{
      getApiCounter()
      .then(({count}) => dispatch(initCounterState(count)))
  }, [dispatch])


  const Increment = () => {
    dispatch( addOne() )
  };
  const Decrement = () => {
    dispatch( subtractOne() )
  };

  return (
    <div className="flex justify-center items-center">
      <div>
        <button
        onClick={Decrement}
        className="bg-gray-300  text-gray-600 py-1 px-5 font-light  cursor-pointer hover:bg-gray-400 text-8xl"
      >
        -
      </button>
      </div>
      <div className="flex items-center text-6xl text-center font-semibold bg-gray-300 text-gray-600 h-full px-11">
        {count}
      </div>
  <div>
        <button
        onClick={Increment}
        className="bg-gray-300 text-gray-600 py-1 px-5 font-light  cursor-pointer hover:bg-gray-400 text-8xl"
      >
        +
      </button>
  </div>
    </div>
  );
};
