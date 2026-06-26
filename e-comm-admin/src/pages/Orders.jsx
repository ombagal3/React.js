import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  fetchOrders,
  updateOrderStatus,
} from "../features/orders/orderSlice";

import Sidebar from "../components/Sidebar";

export default function Orders() {
  const dispatch = useDispatch();

  const { orders } = useSelector(
    (state) => state.orders
  );

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="p-6 w-full">
        <h1 className="text-3xl font-bold mb-5">
          Orders
        </h1>

        <table className="w-full bg-white shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Customer</th>
              <th className="p-3">Total</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {orders.map((item) => (
              <tr key={item.id}>
                <td className="p-3">
                  {item.customer}
                </td>

                <td className="p-3">
                  ₹{item.total}
                </td>

                <td className="p-3">
                  <select
                    value={item.status}
                    onChange={(e) =>
                      dispatch(
                        updateOrderStatus({
                          id: item.id,
                          status: e.target.value,
                        })
                      )
                    }
                    className="border p-2"
                  >
                    <option>Pending</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}