"use client"


import {useState} from 'react'
import axios from 'axios'

export default function page() {

  const [data, setData] = useState({});

  const fetch = async () =>{
    const res = await axios.get("/api/blog");
    try {
      console.log(res.data)
      setData(res.data)
    } catch (error) {
      console.log(error)
      alert(error)
    }

    
  }
  return (
    <div className=' flex-column'>

      <h1>hello users to read the messages for you</h1>
      <div className='flex justify-center'>
        <button onClick={fetch}>
          click heir
        </button>
      </div>

    
      <div>

        <p>{data.message}</p>
       <h1>{data.user}</h1>
      </div> 
  

    </div>
  )
}
