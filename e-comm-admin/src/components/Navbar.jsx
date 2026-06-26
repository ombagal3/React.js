import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { logout } from "../features/auth/authSlice";

export default function Navbar() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { cartItems } = useSelector(
    (state) => state.cart
  );

  const { user } = useSelector(
    (state) => state.auth
  );

  const handleLogout = () => {
    dispatch(logout());

    navigate("/login");
  };

  return (
    <div className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">

      <Link to="/shop">
        <h1 className="text-2xl font-bold">
          E-Commerce
        </h1>
      </Link>

      <div className="flex gap-5 items-center">

        <Link to="/shop">
          Shop
        </Link>

        <Link to="/cart" className="relative">

          🛒 Cart

          <span className="bg-red-500 px-2 rounded-full text-sm absolute -top-3 -right-4">
            {cartItems.length}
          </span>

        </Link>

        {user ? (

          <>
            <p>
              👤 {user.name}
            </p>

            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-1 rounded"
            >
              Logout
            </button>
          </>

        ) : (

          <Link to="/login">
            Login
          </Link>

        )}

      </div>
    </div>
  );
}