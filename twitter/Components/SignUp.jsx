import { useState } from "react";
import axios from "axios";
import { user_api } from "../utils/api";
import { useNavigate } from "react-router";

export default function SignUp() {
  const navi = useNavigate()
  const [user, setUser] = useState({});
  
  const handleSingUp = async () => {
    const res = await axios.post(user_api, user);

    if (res.status == 201) {
      alert("user sign up succesfull");
      navi("/SingIn")
    }if(user. name == "" || user.email == "" || user.phone == "" || user.password == ""){
    alert("plz fill form")

  }
   else if (!emailregx.test(user.email)) {
            alert("email is invalid !!")
        }
        else if(user.contact ==""){
            alert("please Enter your phone number")
        }
       
       else if (!passregex.test(user.password)) {
            alert(" password is week !!")
       }
     else {
      alert("cant singup user");
    }
    console.log(user);
  }



  return (
   
   <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      
      <div
        className="p-4 shadow rounded-4 bg-white"
        style={{ width: "350px" }}
      >
        <h3 className="text-center mb-4 fw-bold">Create your account</h3>

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

          <p className="text-center mt-2" style={{ fontSize: "14px" }}>
            Already have an account?{" "}
            <span style={{ color: "#1DA1F2", cursor: "pointer" }}>
              Login
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}
