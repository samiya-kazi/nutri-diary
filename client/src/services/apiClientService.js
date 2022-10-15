import axios from "axios";
const URL = 'http://localhost:3001';

axios.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("accessToken");
    if (token) req.headers.Authorization = token;
    return req;
  },
  (e) => {
    return Promise.reject(e);
  }
);

export const login = (data) => axios.post(`${URL}/login`, data);

export const signUp = (data) => axios.post(`${URL}/register`, data);

export const getMeals = (date) => axios.get(`${URL}/diary/${date}`);

export const getCurrentUserGoals = () => axios.get(`${URL}/user/current`);