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

export const getAllSocials = async () => {
  const response = await axios.get(`${BASE_URL}/get-socials`);
  return response;
};

export const updateSocials = async (data) => {
  const response = await axios.post(`${BASE_URL}/update-social`, data);
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

export const getRandomStories = async () => {
  const response = await axios.get(`${BASE_URL}/get-random-stories`);
  return response;
};

export const getSingleStory = async (id) => {
  const response = await axios.get(`${BASE_URL}/get-single-story/${id}`);
  return response;
};

export const getPaginatedStories = async (data) => {
  const response = await axios.post(`${BASE_URL}/get-paginated-stories`, data);
  return response;
};

export const getMainStory = async () => {
  const response = await axios.get(`${BASE_URL}/get-main-story`);
  return response;
};

export const getSecondaryStories = async () => {
  const response = await axios.get(`${BASE_URL}/get-secondary-stories`);
  return response;
};

export const deleteStory = async (id) => {
  const response = await axios.delete(`${BASE_URL}/delete-story/${id}`);
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

export const updateStartupsCount = async (data) => {
  const response = await axios.post(`${BASE_URL}/update-startup-counts`, data);
  return response;
};

export const getDisplayStartups = async (data) => {
  const response = await axios.post(`${BASE_URL}/get-display-startups`, data);
  return response;
};

export const getStartupsCount = async () => {
  const response = await axios.get(`${BASE_URL}/get-startup-counts`);
  return response;
};

export const getAllStartups = async () => {
  const response = await axios.get(`${BASE_URL}/getAllStartups`);
  return response;
};

export const getMainpageStartups = async () => {
  const response = await axios.get(`${BASE_URL}/get-mainpage-startups`);
  return response;
};

export const getSimilarStartups = async (category) => {
  const response = await axios.get(
    `${BASE_URL}/get-similar-startups/${category}`,
  );
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

export const updateStartup = async (id, data) => {
  const response = await axios.post(`${BASE_URL}/update-startup/${id}`, data);
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

export const editAbout = async (id, data) => {
  const response = await axios.post(`${BASE_URL}/edit-about/${id}`, data);
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

export const newPassword = async (id, data) => {
  const response = await axios.post(`${BASE_URL}/new-password/${id}`, data);
  return response;
};
