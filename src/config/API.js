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

export const getSingleUser = async (id) => {
  const response = await axios.get(`${BASE_URL}/get-single-user/${id}`);
  return response;
};

export const updateUser = async (id, data) => {
  const response = await axios.post(`${BASE_URL}/update-user/${id}`, data);
  return response;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${BASE_URL}/delete-user/${id}`);
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

export const deleteFaq = async (id) => {
  const response = await axios.delete(`${BASE_URL}/delete-faq/${id}`);
  return response;
};

export const updateFaq = async (data, id) => {
  const response = await axios.post(`${BASE_URL}/update-faq/${id}`, data);
  return response;
};

export const getSingleFaq = async (id) => {
  const response = await axios.get(`${BASE_URL}/get-single-faq/${id}`);
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

export const getSingleStartup = async (id) => {
  const response = await axios.get(`${BASE_URL}/get-single-startup/${id}`);
  return response;
};

export const deleteStartup = async (id) => {
  const response = await axios.delete(`${BASE_URL}/delete-startup/${id}`);
  return response;
};

export const updateContact = async (data) => {
  const response = await axios.post(`${BASE_URL}/update-contact`, data);
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

export const whoAmI = async () => {
  const response = await axios.get(`${BASE_URL}/me`);
  return response;
};

export const resetPassword = async (data) => {
  const response = await axios.post(`${BASE_URL}/reset-password`, data);
  return response;
};
