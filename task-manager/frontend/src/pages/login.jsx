import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth_service";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const data = await login(email, password);

    if (data?.token) {
      localStorage.setItem("token", data.token);

      alert("Login successful!");

      navigate("/dashboard");
    } else {
      alert("Login failed: No token received.");
    }
  } catch (err) {
    alert(err.response?.data?.error || "Login failed");
  }
};

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;