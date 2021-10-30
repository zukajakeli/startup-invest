import axios from 'axios';
import BASE_URL from './BaseUrl';

axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export const signUpRequest = async (data) => {
  console.log('data', BASE_URL);
  const response = await axios.post(`${BASE_URL}/login`, data);
  return response;
};

export const getAllUsers = async () => {
  const response = await axios.get(`${BASE_URL}/allUsers`);
  return response;
};

export const addNewUser = async (data) => {
  const response = await axios.post(`${BASE_URL}/addNewUser`, data);
  return response;
};

export const addNewStory = async (data) => {
  const response = await axios.post(`${BASE_URL}/addNewStory`, data);
  return response;
};

export const getAllStories = async () => {
  const response = await axios.get(`${BASE_URL}/getAllStories`);
  return response;
};
