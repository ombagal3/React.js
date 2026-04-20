import { useState } from "react";
import axios from "axios";
import { user_api } from "../utils/api";
import { useNavigate } from "react-router";

export default function SignUp() {
  const navi = useNavigate()
  const [user, setUser] = useState({});
  
  const handleSingUp = async () => {
  
        const nameRegex = /^[A-Za-z ]{3,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@#$%^&*!]{6,}$/;
  

    if  (!nameRegex.test(user. name == "" )) {
      alert("invalid Name");
      return;
     
    }  if (!emailRegex.test(user.email || "")) {
            alert("Invalid Email");
            return;
        }

        if (!passwordRegex.test(user.password || "")) {
            alert("Invalid Password");
            return;
        }

        const checkUser = await axios.get(`${user_api}?email=${user.email}`);
        if(checkUser.data.length > 0){
           alert("Email already exists!");
            return;
        } 
           const res = await axios.post(user_api, user);
          if( res.status == 20){
             alert("Sign Up Sussfully")
            navi("/SingIn")
        

          } else{
            alert("can't sign user")
          }

        
      
  } 

  
   
 



  return (
   
   <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      
      <div
        className="p-4 shadow rounded-4 bg-white"
        style={{ width: "350px" }}
      >
        <h3 className="text-center mb-4 fw-bold" style={ {color:"black"}}>Create your account</h3>

        <div className="d-flex flex-column gap-3">
          
          <input
            onChange={(e) =>
              setUser({ ...user, name: e.target.value })
            }
            type="text"
            placeholder="Full Name"
            className="form-control rounded-pill px-3 py-2"
          />

          <input
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            }
            type="email"
            placeholder="Email"
            className="form-control rounded-pill px-3 py-2"
          />

          <input
            onChange={(e) =>
              setUser({ ...user, phone: e.target.value })
            }
            type="text"
            placeholder="Phone"
            className="form-control rounded-pill px-3 py-2"
          />

          <input
            onChange={(e) =>
              setUser({ ...user, password: e.target.value })
            }
            type="password"
            placeholder="Password"
            className="form-control rounded-pill px-3 py-2"
          />

          <button
            className="btn btn-dark rounded-pill py-2 fw-bold"
            onClick={handleSingUp}
          >
            Sign up
          </button>

          <p className="text-center mt-2" style={{ fontSize: "14px", color:"black" }}>
            Already have an account?{" "}
            <span onClick={() =>   navi("/SingIn")} style={{ color: "#1DA1F2", cursor: "pointer" }}>
              Login 
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}
