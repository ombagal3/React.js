"use client";
import { useState } from "react";
import axios from "axios";

export default function User() {
  const [users, setUser] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get("/api/services/id");

    try {
      console.log(res.data);
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="  flex-col mt-5">
      <h1>Hellow Liknkden user</h1>

      <div className="gap-5">
        <button className="py-0.5 bg-amber-700" onClick={fetchUsers}>Show</button>

        {users.map((user, i) => (
          <div  className="flex justify-center flex-col" key={i}>
            <h5> {user.like} </h5>
            <p>{user.commented}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
