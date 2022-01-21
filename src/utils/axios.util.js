import axios from 'axios';
import {API_KEY, BASE_URL} from '../constants';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export const configureAxios = () => {
  axiosInstance.interceptors.response.use(function (resp) {
    if (resp?.data) {
      return resp.data;
    }

    return resp;
  });
};
