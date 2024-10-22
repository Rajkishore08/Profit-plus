// src/services/api.js
import axios from 'axios';

// Set your base URL here
const API_URL = 'http://localhost:5000/api/auth'; // Adjust based on your server setup

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data; // Adjust based on your backend response
  } catch (error) {
    throw error.response.data; // Propagate the error for error handling in UI
  }
};

export const loginSalesperson = (username, password) => {
    return axios.post(`${API_URL}/login/salesperson`, { username, password });
};

export const registerOwner = (ownerData) => {
    return axios.post(`${API_URL}/register`, ownerData);
};
