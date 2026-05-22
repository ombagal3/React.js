import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <h3 className="text-white">
        Inventory Management
      </h3>

      <button
        className="btn btn-danger"
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
}