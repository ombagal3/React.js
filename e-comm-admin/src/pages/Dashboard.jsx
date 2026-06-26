import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Sidebar from "../components/Sidebar";

import { fetchProducts } from "../features/products/productSlice";

import { fetchOrders } from "../features/orders/orderSlice";

import { fetchUsers } from "../features/users/userSlice";

export default function Dashboard() {

  const dispatch = useDispatch();

  const { products } = useSelector(
    (state) => state.products
  );

  const { orders } = useSelector(
    (state) => state.orders
  );

  const { users } = useSelector(
    (state) => state.users
  );

  useEffect(() => {

    dispatch(fetchProducts());

    dispatch(fetchOrders());

    dispatch(fetchUsers());

  }, []);

  return (
    <div className="flex">

      <Sidebar />

      <div className="p-8 w-full bg-gray-100 min-h-screen">

        <h1 className="text-5xl font-bold mb-10">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Products */}

          <div className="bg-blue-500 text-white p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-semibold">
              Total Products
            </h2>

            <p className="text-5xl font-bold mt-4">
              {products.length}
            </p>

          </div>

          {/* Orders */}

          <div className="bg-green-500 text-white p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-semibold">
              Total Orders
            </h2>

            <p className="text-5xl font-bold mt-4">
              {orders.length}
            </p>

          </div>

          {/* Users */}

          <div className="bg-purple-500 text-white p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-semibold">
              Total Users
            </h2>

            <p className="text-5xl font-bold mt-4">
              {users.length}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}