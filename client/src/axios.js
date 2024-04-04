import axios from "axios";
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
});
instance.interceptors.request.use(
  function (config) {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const { tokens } = JSON.parse(loggedInUser);
      if (tokens && tokens.accessToken) {
        config.headers.Authorization = `Bearer ${tokens.accessToken}`;
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

export default instance;
