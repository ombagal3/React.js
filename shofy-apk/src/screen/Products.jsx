
import React, { Component, useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [dummy, setDummy] = useState("");

  
  const handleProduct = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setProducts(res.data.products); 
    setDummy(res.data.products);
  };

  const getSearch = (e) => {
    setSearch(e.target.value);

  };

  const handleSearch = () => {
    setProducts(
      products.filter(
        (product) =>
          product.title.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase()),
      ),
    );

  };
  const handleCategoryFilter = async (e) => {
    if (e.target.value == "all") {
      await handleProduct();
    } else {
      setProducts(
        products.filter((product) => product.category == e.target.value),
      );
    }
  };

  const handlePriceFilter = (e) => {
    console.log(e.target.value);
    setProducts(
      products.filter((product) => product.price <= Number(e.target.value)),
    );
  };

  useEffect(() => {
    handleProduct();
  }, []);


  return (
    <>
      <div className="container ">
     
        <div className="mt-4 d-flex justify-content-center  gap-2">
          <input
            onChange={getSearch}
            type="text"
            className="border-2 border-primary py-1 rounded-3 w-25 "
          />
          <button
            onClick={handleSearch}
            className=" btn rounded-2 btn-md btn-primary "
          >
            Search
          </button>
          <select
            className="btn btn-primary btn-sm"
            onChange={handleCategoryFilter}
          >
            <option value={"all"}>All</option>
            <option value={"beauty"}>Beauty</option>
            <option value={"fragrances"}>Fragrances</option>
            <option value={"furniture"}>Furniture</option>
            <option value={"groceries"}>Groceries</option>
          </select>
          <button onChange={handlePriceFilter} className="btn btn-primary ">
            <input type="range" min={1} max={2500} />
          </button>
          <button
            onClick={() => {
              handleProduct();
            }}
            className=" btn rounded-2 btn-md btn-primary "
          >
            Clear Filter
          </button>
        </div>
      
        <div className="container row justify-content-evenly gap-3 mt-5">
          {products.map((product, i) => {
            return (
              <div
                className="card text-start "
                key={i}
                style={{ width: "18rem" }}
              >
                <img
                  src={product.images[0]}
                  className="card-img-top"
                  alt="..."
                />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{product.title}</li>
                  <li className="list-group-item">{product.category}</li>
              <div className="d-flex justify-content-between"> 
                      <li className="list-group-item">${product.price}/-</li>
                      <button className="btn btn-success">Add</button>
              </div>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;