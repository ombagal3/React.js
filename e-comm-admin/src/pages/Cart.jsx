import { useDispatch, useSelector } from "react-redux";

import {
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";

import api from "../services/api";
import Navbar from "../components/Navbar";

export default function Cart() {
 
  const dispatch = useDispatch();
  const { user } = useSelector(
  (state) => state.auth
);

  const { cartItems } = useSelector(
    (state) => state.cart
  );

const placeOrder = async () => {
const order = {
  customer: user.name,

  userId: user.id,

  total: cartItems.reduce(
    (acc, item) => acc + Number(item.price),
    0
  ),

  status: "Pending",

  items: cartItems,
};

  await api.post("/orders", order);

  alert("Order Placed Successfully");

  dispatch(clearCart());
};

  return (
    
 <>
 <Navbar/>

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-5">
        Cart
      </h1>

      {cartItems.map((item) => (

        <div
          key={item.id}
          className="flex justify-between bg-white p-4 shadow mb-3"
        >

          <div>
            <h2 className="font-bold">
              {item.name}
            </h2>

            <p>₹{item.price}</p>
          </div>

          <button
            onClick={() =>
              dispatch(removeFromCart(item.id))
            }
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove
          </button>

        </div>
      ))}

      {cartItems.length > 0 && (

        <button
          onClick={placeOrder}
          className="bg-green-500 text-white px-5 py-3 rounded mt-4"
        >
          Place Order
        </button>

      )}

    </div> </>
  );
}