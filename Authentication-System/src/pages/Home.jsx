import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome {user?.name}</h1>

      <h3>User Details</h3>

      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}