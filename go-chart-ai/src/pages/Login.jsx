export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-80">
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
        />

        <button className="bg-black text-white w-full p-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}