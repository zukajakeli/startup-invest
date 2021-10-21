import axios from 'axios';
import BASE_URL from './BaseUrl';

axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export const signUpRequest = async (data) => {
  console.log('data', BASE_URL);
  const response = await axios.post(`${BASE_URL}/user/signup`, data);
  return response;
};
