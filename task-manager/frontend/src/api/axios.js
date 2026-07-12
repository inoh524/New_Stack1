import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  // baseURL: "http://localhost:3000/api",
  // baseURL: "http://192.168.1.49:3000/api", //danielle's house IP address
  //  baseURL: "http://10.0.7.117:3000/api", //Jeonsoft house IP address
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;