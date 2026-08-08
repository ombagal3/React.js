"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"




export default function page() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
      const data = JSON.parse( localStorage.getItem("logUsers")) || [];
      // console.log(JSON.parse( localStorage.getItem("user")))

  setUsers(data);
  

  }, []);

  return (

    <div >
     
      <div className="flex justify-center gap-3 p-5">

      <Link href={"/profile"}>Profile</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>Contact</Link>


</div>

  <div className="flex justify-center mt-5 p-5">
        <h2 className="flex justify-center">This list of  users are Registers</h2>

 </div>

     <div className="flex justify-center gap-3 p-5 flex-col">

{users.map((user) => (
  <div  key={(user.id)}>

    <div className="">
   <h4>{user.name}</h4>
    <p>{user.email}</p>
</div>
  </div>
))}



     </div>    
     
    </div>

    
  )
};






