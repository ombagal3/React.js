// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Product() {
//   const [posts, setPost] = useState([]);

//   const fetchProducts = async () => {
//   const res =   await axios.get("https://dummyjson.com/products")
//     setPost(res.data.Products);
// };
//   useEffect(() => {
//     fetchProducts ();
//   }, []);
//   return (
//     <div>
//       {posts.map((post) => (
//         <div key={post.id} className="card" style={{ width: "18rem" }}>
//           <img src={post.images[0]} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">{post.title}</h5>
//             <p className="card-text"></p>
//           </div>
//           <ul className="list-group list-group-flush">
//             <li className="list-group-item">An item</li>
//             <li className="list-group-item">A second item</li>
//             <li className="list-group-item">A third item</li>
//           </ul>
//           <div className="card-body">
//             <a href="#" className="card-link">
//               Card link
//             </a>
//             <a href="#" className="card-link">
//               Another link
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Product() {
//   const [posts, setPost] = useState([]);

//   const fetchProducts = async () => {
//     const res = await axios.get("https://dummyjson.com/products");
//     setPost(res.data.products);
//   };


//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="className='d-flex justify-content-center flex-wrap align-items-center mt-3 overflow-y-scroll mb-3 gap-3">
//       {posts.map((post) => (
//         <div key={post.id} className="card" style={{ width: "18rem" }}>
//           <img src={post.images[0]} className="card-img-top" alt={post.title} />
//           <div className="card-body">
//             <h5 className="card-title">{post.title}</h5>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
import axios from "axios"; 
import React, { useState } from "react";
import { useEffect } from "react";

const DisplayPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [pagination, setPagination] = useState({
    start: 0,
    end: 9,
    page: 1,
  });
  useEffect(() => {
    HandlerFetchPhotos();
  }, []);
  const HandlerFetchPhotos = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos")
    setPhotos(res.data);
  };
  const handlePagination = (e) => {
    let page;
    if (e.target.value === "") {
      page = 1;
    } else {
      page = Number(e.target.value);
    }
    const start = (page - 1) * 10;
    const end = start + 9;
    setPagination({ ...pagination, start, end });
  };

  return (
    <>
      <div className="w-50 container mt-5 d-flex justify-content-center flex-direction-column">
        <div>
          <div>
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping">
                Enter Page
              </span>
              <input
                onChange={handlePagination}
                type="text"
                className="form-control w-100"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          {photos.map((photo, i) => {
            if (i >= pagination.start && i <= pagination.end) {
              return (
                <div key={i} className="mt-3">
                  <p>
                    {i + 1} {photo.title}
                  </p>
                </div>
              );
            }
            return;
          })}
          <button
            className="btn btn-primary w-100"
            onClick={() => {
              setPagination({
                ...pagination,
                start: pagination.start + 10,
                end: pagination.end + 10,
              });
            }}
          >
            Next++
          </button>
        </div>
      </div>
    </>
  );
};
export default DisplayPhotos;