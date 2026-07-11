import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth_service";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const data = await login(email, password);

    if (data?.token) {
      localStorage.setItem("token", data.token);
      window.dispatchEvent(new Event("auth-change"));// Notify other components about the auth change 
      alert("Login successful!");
      navigate("/");

    } else {
      alert("Login failed: No token received.");
    }
  } catch (err) {
    alert(err.response?.data?.error || "Login failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="">
      <div className=" flex justify-center">
      <div className="w-100 max-w-lg bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h1>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 "
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />

        <div>
          <p className="text-gray-600 mt-2 text-sm">
            <a href="/forgot-password" className="text-blue-600 hover:underline"> 
              Forgot Password?
            </a>
          </p>
          <p className="text-gray-600 mt-2 text-sm"> 
            test user: <br />
            inohsusano08@gmail.com <br />
            inoh08
          </p>
        </div>

        <br />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg cursor-pointer disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div>
          <p>
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Register here
            </a>
          </p>
        </div>

      </form>

      </div>
      </div>
    </div>
    
  );
}

export default Login;