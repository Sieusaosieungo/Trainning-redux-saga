import qs from 'query-string';
import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

// http://localhost:3000/tasks
const url = 'tasks';

export const getList = (params = {}) => {
  let queryParams = '';
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};

// http://localhost:3000/tasks METHOD: POST
export const addTask = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};
