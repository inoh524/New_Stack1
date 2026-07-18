import axios from "axios";

const api = axios.create({
  baseURL: "https://new-stack1.onrender.com/api", // Replace with your render API URL
  // baseURL: "http://localhost:3000/api", // Replace with your local API URL
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;