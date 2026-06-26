import { useState } from "react";

import api from "../services/api";

import { useDispatch } from "react-redux";

import { loginSuccess } from "../features/auth/authSlice";

import { useNavigate } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = async () => {

    try {

      const res = await api.get("/users");

      const user = res.data.find(
        (u) =>
          u.email === email &&
          u.password === password
      );

      console.log(user);

      if (user) {

        dispatch(loginSuccess(user));

        if (user.role === "admin") {

          navigate("/");

        } else {

          navigate("/shop");
        }

      } else {

        alert("Invalid Credentials");
      }

    } catch (error) {

      console.log(error);

      alert("Server Error");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      <div className="bg-white p-8 rounded shadow w-96">

        <h1 className="text-3xl font-bold mb-5">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="border p-3 w-full mb-4"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="border p-3 w-full mb-4"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white w-full py-3 rounded"
        >
          Login
        </button>

      </div>
    </div>
  );
}