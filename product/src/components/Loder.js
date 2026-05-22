import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(
        loginUser({ email, password })
      ).unwrap();

      navigate("/dashboard");
    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}