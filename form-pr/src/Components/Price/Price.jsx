
import React, {useState} from "react";





const Price = () => {
   const  [users, setUsers] = useState (JSON.parse(localStorage.getItem("users"))) || [];
    return <>


    <div  className="container flex-wrap d-flex  gap-3 justify-content-center mt-5 align-items-center  ">
           {
        users.map((us, i) => (
        
        
        <div style={{width : "400px"}} className="card flex-column border-0 shadow rounded p-3" key={i}>
         <h5>Name : {us.name}</h5>
         <p>Phone : {us.contact}</p>
         <p>Email : {us.email}</p>

 

     </div>)
    
)
       }
    
    





    </div>
    
    </>
}
export default Price;