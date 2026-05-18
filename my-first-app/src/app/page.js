"use client";
import React, {useState} from 'react'

export default function Home() {
  const [count,setCount] = useState(0);
  return (
    <div className='h-screen bg-amber-950 flex justify-center items-center col flex-col'> <h1 className='text-3xl'>Counter Apk</h1>
    <h3 className='text-amber-300 font-extrabold text-4xl mt-5'>{count}</h3>
    <div className=' flex mt-3 gap-2'>
      <button
      onClick={()=> {
      setCount(count + 1);  
      }}
      
      className='bg-pink-100 text-pink-500 px-4 rounded font-semibold py-2'>Increment</button>
       <button
      onClick={()=> {
      setCount(count - 1);  
      }}
      
      className='bg-pink-100 text-pink-500 px-4 rounded font-semibold py-2'>Decrement</button>
       <button
      onClick={()=> {
      setCount(count * 2);  
      }}
      
      className='bg-pink-100 text-pink-500 px-4 rounded font-semibold py-2'>Multiplication</button>
       <button
      onClick={()=> {
      setCount(count / 2);  
      }}
      
      className='bg-pink-100 text-pink-500 px-4 rounded font-semibold py-2'>Division</button>
    </div>
    </div>
  )
}
