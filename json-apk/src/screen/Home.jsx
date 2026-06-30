import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [users, setUser] = useState([]);
  const [data, setData] = useState({ name: "", role: "" });
  const [currentTime, setCurrentTime] = useState(new Date());
  const colors = [
    "#FFD166",
    "#FF8F70",
    "#D9F06C",
    "#A78BFA",
    "#47C6F5",
    "#F9A8D4",
  ];

  const getName = (e) => setData({ ...data, name: e.target.value });
  const getRole = (e) => setData({ ...data, role: e.target.value });

  const updateFild = (user) => setData(user);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    setUser(res.data);
    console.log(setUser);
  };


  const handleSendUser = async () => {
    await axios.post("http://localhost:3000/users", data);
    fetchUsers();
    setData({ name: "", role: "" });
  };

  const deleteUser = async (id) => {
    await axios.delete("http://localhost:3000/users/" + id);
    fetchUsers();
  };

  const handleUpdate = async () => {
    await axios.put("http://localhost:3000/users/" + data.id, data);

    fetchUsers();
    setData({ name: "", role: "" });
  };

  useEffect(() => {
    fetchUsers();

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const date = currentTime.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });



  const time = currentTime.toLocaleTimeString("en-IN");

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>Notes</h2>

        <button className="plus" onClick={handleSendUser}>
          <i className="bi bi-plus-lg"></i>
        </button>
      </aside>

      <div className="main">
        <h1>Notes</h1>

        <div className="formBox">
          <input value={data.name} onChange={getName} placeholder="Title" />

          <input
            value={data.role}
            onChange={getRole}
            placeholder="Description"
          />

          <button onClick={handleSendUser}>Add</button>

          <button className="updateBtn" onClick={handleUpdate}>
            Update
          </button>
        </div>
 
        <div className="cards">
          {users.map((user, index) => (
            <div
              key={user.id}
              className="card"
              style={{
                background: colors[index % colors.length],
              }}
            >
              <h3>{user.name}</h3>

              <p>{user.role}</p>

              <div className="iconBox d-flex justify-content-around ">
                <div className="timeBox ">
                  <p>{date}</p>
                </div>

                <div className="">
                  <button className="" onClick={() => updateFild(user)}>
                    <i className="bi bi-pencil-fill"></i>
                  </button>

                  <button onClick={() => deleteUser(user.id)}>
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
