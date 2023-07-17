import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://dummyjson.com/',
});
axiosClient.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem('userData'));
    if (token) {
      config.headers['Authorization'] = `Bearer ${token.token}`;
    }
    return config;
  },
  (error) => {
    console.log(error)
  }
);

export const get = (url, config) => axiosClient.get(url, config);
export const post = (url, data, config) => axiosClient.post(url, data, config);
export const put = (url, data, config) => axiosClient.put(url, data, config);
export const del = (url, config) => axiosClient.delete(url, config);

export default axiosClient;
