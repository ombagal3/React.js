import { useSelector } from "react-redux";

export default function Dashboard() {
  const { products } = useSelector(
    (state) => state.products
  );

  const totalProducts = products.length;

  const totalQuantity = products.reduce(
    (acc, item) => acc + Number(item.quantity),
    0
  );

  const outOfStock = products.filter(
    (item) => item.quantity == 0
  ).length;

  return (
    <div className="container mt-4">
      <div className="row">

        <div className="col-md-4">
          <div className="card p-4 bg-primary text-white">
            <h4>Total Products</h4>
            <h2>{totalProducts}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-4 bg-success text-white">
            <h4>Total Quantity</h4>
            <h2>{totalQuantity}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-4 bg-danger text-white">
            <h4>Out Of Stock</h4>
            <h2>{outOfStock}</h2>
          </div>
        </div>

      </div>
    </div>
  );
}