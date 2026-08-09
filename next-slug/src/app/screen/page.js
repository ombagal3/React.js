"use client";

import { useState } from "react";
import axios from "axios";

export default function page() {
  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get("/api/home");
    try {
      setData(res.data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Heloo every one</h1>

      <div>
        <button className="py-4 bg-lime-700 " onClick={fetch}>
         
          Joint
        </button>
      </div>

      <div className="flex-col">
        {
        data.map((d, i) => (
          <div key={i}>
            <p>{d.body}</p>
            <p>{d.postId}</p>
            <h1>{d.username}</h1>
          </div>
        ))
        }
      </div>
    </div>
  );
}
