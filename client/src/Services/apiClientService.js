import axios from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

export async function login (email, password) {
  try {
    const res = await axios.post(baseUrl + '/login', {email, password});
    return res.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
}


export async function signUp (firstName, lastName, email, password, gender, age) {
  try {
    const res = await axios.post(baseUrl + '/register', {firstName, lastName, email, password, gender, age});
    return res.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
}