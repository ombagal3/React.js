import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/users/userSlice";

export default function AddUser() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addUser(user));

    setUser({
      name: "",
      email: "",
      role: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Name"
        className="form-control mb-2"
        value={user.name}
        onChange={(e) =>
          setUser({ ...user, name: e.target.value })
        }
      />

      <input
        type="email"
        placeholder="Email"
        className="form-control mb-2"
        value={user.email}
        onChange={(e) =>
          setUser({ ...user, email: e.target.value })
        }
      />

      <select
        className="form-control mb-2"
        value={user.role}
        onChange={(e) =>
          setUser({ ...user, role: e.target.value })
        }
      >
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
      </select>

      <button className="btn btn-primary">
        Add User
      </button>
    </form>
  );
}