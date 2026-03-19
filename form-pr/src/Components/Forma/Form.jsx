import React, { useState } from "react"   // hanme ye rect State import krna padega funcation banane ke liyee
import {useNavigate} from 'react-router'

const Form = () => {
  
   const navigate = useNavigate();

    const [user, setUser] = useState ({});             // Ye function state kiya usme defult object pass kiyaa 
    const [check, setCheck] = useState(false);        // or check wala fun create kiyaa jab user check box click krega tab submit button applyble ho ga


    const handleSubmit = (e) => {    // or ye handle submit hai isme e pass kiyaa jab brwser pe bar bar relod hota hai page  to e.preventDefualt function pass kiya to relod nai hoga
      e.preventDefault();

     const passregex  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;  // ye pass regex hai 

     if(user.email == undefined || user.email == "" ){        // or isme user email nai dali to email wal kam hai
        alert("Email is required !");
      }
      else if(user.name == undefined || user.name == ""){
           alert("Name is required")
      }
      else if
        (!passregex.test(user.password)|| user.password == "" ){
          alert("password is invalid")
      }
     else{
      const users = JSON.parse(localStorage.getItem("users")) || [];  // or isme 
      users.push(user)

     
  
       localStorage.setItem("users", JSON.stringify(users));
       
       alert("Form Submitted !!")
    navigate("/Feed")

     }

    }

return <>
    <div className="container mt-5 d-flex justify-content-center align-items-center" >
        <form onSubmit={handleSubmit} >
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Full Name
    </label>
    <input 
    onChange={(e) => setUser({...user, name: e.target.value })}
      type="text"
      className="form-control"
      id="name"
      aria-describedby="emailHelp"
    />
    
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
        onChange={(e) => setUser({...user, email: e.target.value })}
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="number" className="form-label">
      Contact
    </label>
    <input
        onChange={(e) => setUser({...user, contact: e.target.value })}
      type="number"
      className="form-control"
      id="number"
      aria-describedby="emailHelp"
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
        onChange={(e) => setUser({...user, password: e.target.value })}
      type="password"
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" checked={ check } onChange={() => setCheck(!check)} className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Check me out
    </label>
  </div>
  <button   type="submit" className={`btn btn-primary ${check ? "" : "disabled"}`}>
    Submit
  </button>
</form>

    </div>
    
    </>
}
export default Form;

