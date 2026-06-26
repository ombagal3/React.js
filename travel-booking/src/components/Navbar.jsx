import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import logo from "../assets/logos.png";

function Navbar() {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg premium-navbar sticky-top">
      <div className="container">

        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} className="logo-img" alt="logo" />

          <div className="ms-3">
            <h3 className="brand-title mb-0">
              Travel Booking
            </h3>

            <small className="brand-subtitle">
              Explore • Discover • Journey
            </small>
          </div>
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">

          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="bi bi-house-door me-2"></i>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/packages">
                <i className="bi bi-airplane me-2"></i>
                Packages
              </Link>
            </li>

            {user && (
              <li className="nav-item">
                <Link className="nav-link" to="/my-bookings">
                  <i className="bi bi-calendar-check me-2"></i>
                  My Bookings
                </Link>
              </li>
            )}

            {user?.role === "admin" && (
              <li className="nav-item">
                <Link className="nav-link admin-link" to="/admin">
                  <i className="bi bi-speedometer2 me-2"></i>
                  Dashboard
                </Link>
              </li>
            )}

            {!user ? (
              <>
                <li className="nav-item ms-3">
                  <Link className="btn btn-light rounded-pill px-4" to="/login">
                    Login
                  </Link>
                </li>

                <li className="nav-item ms-2">
                  <Link
                    className="btn btn-warning rounded-pill px-4"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item ms-4">

                  <div className="user-box">

                    <div className="avatar">

                      {user.name.charAt(0).toUpperCase()}

                    </div>

                    <span>{user.name}</span>

                  </div>

                </li>

                <li className="nav-item ms-3">

                  <button
                    className="btn logout-btn"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right me-2"></i>

                    Logout

                  </button>

                </li>
              </>
            )}

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;