import axios from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

axios.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem('access-token');
    if (token) req.headers.Authorization = token;
    return req;
  },
  (e) => {
    return Promise.reject(e);
  }
);


export async function login (email, password) {
  try {
    const res = await axios.post(baseUrl + '/login', {email, password});
    return res;
  } catch (error) {
    throw new Error(error.response.data);
  }
}


export async function signUp (firstName, lastName, email, password, gender, age) {
  try {
    const res = await axios.post(baseUrl + '/register', {firstName, lastName, email, password, gender, age});
    return res;
  } catch (error) {
    throw new Error(error.response.data);
  }
}


export async function getUserCurrentInfo () {
  try {
    const res = await axios.get(baseUrl + '/user/current');
    return res;
  } catch (error) {
    throw new Error(error.response.data);
  }
}


export async function getUserLogs () {
  try {
    const res = await axios.get(baseUrl + '/user/log');
    return res;
  } catch (error) {
    throw new Error(error.response.data);
  }
}