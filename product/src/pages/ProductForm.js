import { useEffect, useState } from "react";

import {
  addProduct,
  updateProduct,
} from "../features/products/productSlice";

import { useDispatch } from "react-redux";

export default function ProductForm({
  editData,
  setEditData,
}) {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    quantity: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editData) {
      dispatch(updateProduct(form));
      setEditData(null);
    } else {
      dispatch(addProduct(form));
    }

    setForm({
      name: "",
      quantity: "",
      price: "",
      category: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">

        <div className="col-md-3">
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
        </div>

        <div className="col-md-2">
          <input
            type="number"
            placeholder="Quantity"
            className="form-control"
            value={form.quantity}
            onChange={(e) =>
              setForm({
                ...form,
                quantity: e.target.value,
              })
            }
          />
        </div>

        <div className="col-md-2">
          <input
            type="number"
            placeholder="Price"
            className="form-control"
            value={form.price}
            onChange={(e) =>
              setForm({
                ...form,
                price: e.target.value,
              })
            }
          />
        </div>

        <div className="col-md-3">
          <input
            type="text"
            placeholder="Category"
            className="form-control"
            value={form.category}
            onChange={(e) =>
              setForm({
                ...form,
                category: e.target.value,
              })
            }
          />
        </div>

        <div className="col-md-2">
          <button className="btn btn-success w-100">
            {editData ? "Update" : "Add"}
          </button>
        </div>

      </div>
    </form>
  );
}