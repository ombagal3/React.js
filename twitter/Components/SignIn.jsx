import {useState} from 'react'
import axios from 'axios'
import { user_api } from '../utils/api.js'
import{useNavigate} from 'react-router'
import SignUp from './SignUp.jsx'




export default function SignIn() {
  const navigate = useNavigate()

    const [user, setUser] = useState ({});

 const handleLogin = async () => {
const res =  await axios.get(user_api);
 const loginUser =  res.data.find((e) => e.email == user.email && e.password == user.password)
 if(loginUser){
localStorage.setItem("cu_user", JSON.stringify(loginUer));
alert("sign In succesfully")
navigate("/Home");
 }else{
  alert("sign In faild")

 }



}





  return (
   <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      
      <div
        className="p-4 shadow rounded-4 bg-white"
        style={{ width: "350px" }}
      >
        <h3 className="text-center mb-4 fw-bold">Sign in to your account</h3>

        <div className="d-flex flex-column gap-3">

          <input
            type="email"
            placeholder="Email"
            className="form-control rounded-pill px-3 py-2"
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="form-control rounded-pill px-3 py-2"
            onChange={(e) =>
              setUser({ ...user, password: e.target.value })
            }
          />

          <button
            className="btn btn-dark rounded-pill py-2 fw-bold"
            onClick={handleLogin}
          >
            Log in
          </button>

          <p className="text-center mt-2" style={{ fontSize: "14px" }}>
            Don't have an account?{" "}
            <a  style={{ color: "#1DA1F2", cursor: "pointer" }}>
              Sign up
            </a>
          </p>

        </div>
      </div>
    </div>
  )
}
