import axiosService from '../commons/axiosService';
import { API_AUTHEN } from '../constants';

// https://sell-old-items.herokuapp.com METHOD: POST
export const signin = data => {
  return axiosService.post(`${API_AUTHEN}/signin`, data);
};
