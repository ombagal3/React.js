import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

export default function App() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        Redux Toolkit CRUD App
      </h2>

      <AddUser />

      <UserList />
    </div>
  );
}