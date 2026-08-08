import React from 'react'
import { useSelector,  useDispatch } from 'react-redux'
import { increment, decrement } from '../features/Counter.Slice.js';

export default function Home() {


    const dispatch = useDispatch();
    const { count } = useSelector((state) => state.counter);
 
  return (
    <div><h1>{count}</h1>


    <div>
   <button onClick={()=> dispatch(increment())}>++</button>
   <button onClick={()=> dispatch(decrement())}>--</button>
    </div>
    </div>
  )
}
