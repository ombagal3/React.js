import axios from "axios";

const API = "http://localhost:3001/users";

export const registerUserAPI = async (userData) => {
  const res = await axios.get(`${API}?email=${userData.email}`);

  if (res.data.length > 0) {
    throw new Error("Email already exists");
  }

  const response = await axios.post(API, userData);
  return response.data;
};

export const loginUserAPI = async (userData) => {
  const res = await axios.get(
    `${API}?email=${userData.email}&password=${userData.password}`
  );

  if (res.data.length === 0) {
    throw new Error("Invalid Email or Password");
  }

  return res.data[0];
};