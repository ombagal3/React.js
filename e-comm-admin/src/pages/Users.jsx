import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  fetchUsers,
  deleteUser,
  blockUser,
} from "../features/users/userSlice";

import Sidebar from "../components/Sidebar";

export default function Users() {
  const dispatch = useDispatch();

  const { users } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="p-6 w-full">
        <h1 className="text-3xl font-bold mb-5">
          Users
        </h1>

        <table className="w-full bg-white shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {users.map((item) => (
              <tr key={item.id}>
                <td className="p-3">{item.name}</td>

                <td className="p-3">{item.email}</td>

                <td className="p-3">
                  {item.blocked
                    ? "Blocked"
                    : "Active"}
                </td>

                <td className="p-3 flex gap-2 text-center">

                  <button
                    onClick={() =>
                      dispatch(deleteUser(item.id))
                    }
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() =>
                      dispatch(
                        blockUser({
                          id: item.id,
                          blocked: !item.blocked,
                        })
                      )
                    }
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    {item.blocked
                      ? "Unblock"
                      : "Block"}
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}