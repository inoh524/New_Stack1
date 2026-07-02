import api from "../api/axios";

export const login = async (email, password) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  return response.data;
};

export const register = async (userData) => {
  const response = await api.post("/users", userData);

  return response.data;
};