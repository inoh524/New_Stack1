import api from "./axios";

export const createUser = async (user) => {
  const response = await api.post("/users", user);

  return response.data;
};

// GET
export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};