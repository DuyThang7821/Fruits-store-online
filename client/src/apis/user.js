import axios from '../axios';

export const apiLogin = (data) => axios.post('/api/v1/auth/sign-in',data);

export const apiRegister = (data) => axios.post('/api/v1/auth/sign-up',data);

export const apiGetAccount = (data) => axios.get('api/v1/accounts', data)
