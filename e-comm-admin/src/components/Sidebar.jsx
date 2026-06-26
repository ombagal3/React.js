import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">

      <h1 className="text-2xl font-bold mb-6">
        Admin Panel
      </h1>

      <div className="flex flex-col gap-4">

        <Link to="/">Dashboard</Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/orders">
          Orders
        </Link>

        <Link to="/users">
          Users
        </Link>

      </div>
    </div>
  );
}