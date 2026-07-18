import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getMe } from "../api/user_api";

function ProtectedRoute() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const verifySession = async () => {
      const token = sessionStorage.getItem("token");

      if (!token) {
        setStatus("unauthorized");
        return;
      }

      try {
        await getMe();
        setStatus("authorized");
      } catch (error) {
        console.error("Session verification failed:", error);

        sessionStorage.removeItem("token");
        setStatus("unauthorized");

        window.dispatchEvent(new Event("auth-change"));
      }
    };

    verifySession();
  }, []);

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Checking session...</p>
      </div>
    );
  }

  return status === "authorized" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
}

export default ProtectedRoute;