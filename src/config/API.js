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

export const addNewFaq = async (data) => {
  const response = await axios.post(`${BASE_URL}/addNewFaq`, data);
  return response;
};

export const getAllFaqs = async () => {
  const response = await axios.get(`${BASE_URL}/getAllFaqs`);
  return response;
};

export const addNewStartup = async (data) => {
  const response = await axios.post(`${BASE_URL}/addNewStartup`, data);
  return response;
};

export const getAllStartups = async () => {
  const response = await axios.get(`${BASE_URL}/getAllStartups`);
  return response;
};

export const addNewContact = async (data) => {
  const response = await axios.post(`${BASE_URL}/addNewContact`, data);
  return response;
};

export const getAllContacts = async () => {
  const response = await axios.get(`${BASE_URL}/getAllContacts`);
  return response;
};

export const addNewAbout = async (data) => {
  const response = await axios.post(`${BASE_URL}/addNewAbout`, data);
  return response;
};

export const getAllAbouts = async () => {
  const response = await axios.get(`${BASE_URL}/getAllAbouts`);
  return response;
};

export const register = async (data) => {
  const response = await axios.post(`${BASE_URL}/register`, data);
  return response;
};

export const sendGoogleToken = async (data) => {
  const response = await axios.post(`${BASE_URL}/sendGoogleToken`, data);
  return response;
};

export const loginFacebook = async (data) => {
  const response = await axios.post(`${BASE_URL}/facebookLogin`, data);
  return response;
};

export const whoAmI = async (data) => {
  const response = await axios.post(`${BASE_URL}/whoAmI`, data);
  return response;
};
