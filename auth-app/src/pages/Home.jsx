
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logout } from '../features/auth/authSlice';

export default function Home() {
  const user = useSelector((s) => s.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    toast.info('Logged out successfully');
    navigate('/login');
  };

return (
  <div className="home">
    <div className="home-card">

      <div className="avatar">
        {user?.name?.charAt(0).toUpperCase()}
      </div>

      <h1>Welcome Back </h1>

      <div className="user-info">
        <p>
          <span>Name:</span> {user.name}
        </p>

        <p>
          <span>Email:</span> {user.email}
        </p>
      </div>

      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>

    </div>
  </div>
);
}