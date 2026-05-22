import { useEffect, useState } from "react";
import {
  fetchUsers,
  deleteUser,
  updateUser,
  setSearch,
  setFilterRole,
} from "../features/users/userSlice";

import { useDispatch, useSelector } from "react-redux";

export default function UserList() {
  const dispatch = useDispatch();

  const { users, search, filterRole } = useSelector(
    (state) => state.users
  );

  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = users.filter((user) => {
    const matchSearch = user.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchRole =
      filterRole === "All"
        ? true
        : user.role === filterRole;

    return matchSearch && matchRole;
  });

  const handleUpdate = () => {
    dispatch(updateUser(editUser));
    setEditUser(null);
  };

  return (
    <div>
      <div className="d-flex gap-2 mb-3">
        <input
          type="text"
          placeholder="Search User"
          className="form-control"
          onChange={(e) =>
            dispatch(setSearch(e.target.value))
          }
        />

        <select
          className="form-control"
          onChange={(e) =>
            dispatch(setFilterRole(e.target.value))
          }
        >
          <option value="All">All</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>
                {editUser?.id === user.id ? (
                  <input
                    value={editUser.name}
                    onChange={(e) =>
                      setEditUser({
                        ...editUser,
                        name: e.target.value,
                      })
                    }
                  />
                ) : (
                  user.name
                )}
              </td>

              <td>
                {editUser?.id === user.id ? (
                  <input
                    value={editUser.email}
                    onChange={(e) =>
                      setEditUser({
                        ...editUser,
                        email: e.target.value,
                      })
                    }
                  />
                ) : (
                  user.email
                )}
              </td>

              <td>
                {editUser?.id === user.id ? (
                  <select
                    value={editUser.role}
                    onChange={(e) =>
                      setEditUser({
                        ...editUser,
                        role: e.target.value,
                      })
                    }
                  >
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
                ) : (
                  user.role
                )}
              </td>

              <td>
                {editUser?.id === user.id ? (
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={handleUpdate}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => setEditUser(user)}
                  >
                    Edit
                  </button>
                )}

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(deleteUser(user.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}