import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.117:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;