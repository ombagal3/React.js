import { useEffect, useState } from "react";
import {
  fetchProducts,
  deleteProduct,
} from "../features/products/productSlice";

import { useDispatch, useSelector } from "react-redux";
import ProductForm from "./ProductForm";

export default function Products() {
  const dispatch = useDispatch();

  const { products } = useSelector(
    (state) => state.products
  );

  const [editData, setEditData] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between mb-3">
        <h2>Products</h2>

        <input
          type="text"
          placeholder="Search Product"
          className="form-control w-25"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ProductForm editData={editData} setEditData={setEditData} />

      <table className="table table-bordered mt-4">

        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {filteredProducts.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>

              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => setEditData(item)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    dispatch(deleteProduct(item.id))
                  }
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