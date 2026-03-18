
import React, { useState } from "react";

const Feed = () => {

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const Remove = (index) => {
    const NewUsers = users.filter((_, i) => i !== index);

    setUsers(NewUsers);
    localStorage.setItem("users", JSON.stringify(NewUsers));
  };

  return (
    <>
      <div className="container d-flex flex-wrap">

        { (
          users.map((user, i) => (
            <div className="card m-2 p-3" key={i} style={{ width: "200px" }}>
              <h5>{user.name}</h5>
              <p>{user.email}</p>
              <p>{user.contact}</p>
              <p>{user.password}</p>

              <button
                onClick={() => Remove(i)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          ))
        )}

      </div>
    </>
  );
};

export default Feed;