
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
  const [search, setSearch] = useState("");

  return (
    <>
    <div className="container d-flex p-3">

<div className="">
    <input onChange={(e)=> setSearch(e.target.value)} className="text-center me-3 p-1 " type="search"  placeholder="Search"/>
  <button className='btn me-2 btn-outline-primary'
  onClick={()=>{
   setUsers( users.filter((user)=>user.name.toLowerCase() == search.toLocaleLowerCase() || user.email.toLocaleLowerCase() == search.toLocaleLowerCase() || user.contact == search));
  }}
  > search</button>
</div>
</div>
      <div className="container justify-content-center mt-3 d-flex flex-wrap">

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