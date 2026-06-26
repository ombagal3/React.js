import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../features/products/productSlice";

import { addToCart } from "../features/cart/cartSlice";

import Navbar from "../components/Navbar";

export default function Shop() {

  const dispatch = useDispatch();

  const { user } = useSelector(
    (state) => state.auth
  );

  const { products } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-6 bg-gray-100 min-h-screen">

        <h1 className="text-4xl font-bold mb-8">
          Shopping Page
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {products.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300"
            >

              <div className="h-72 w-full bg-gray-100 overflow-hidden">

                <img
                  src={item.image}
                  alt="product"

                  className="w-full h-full object-cover"

                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/300";
                  }}
                />

              </div>

              <div className="p-5">

                <h2 className="text-2xl font-bold">
                  {item.name}
                </h2>

                <p className="text-gray-500 mt-1">
                  {item.category}
                </p>

                <p className="text-3xl font-bold text-blue-600 mt-3">
                  ₹{item.price}
                </p>

                <button
                  onClick={() => {

                    if (!user) {
                      alert("Please Login First");
                      return;
                    }

                    dispatch(addToCart(item));
                  }}

                  className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl w-full mt-5 transition"
                >
                  Add To Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </>
  );
}