import axios from '../axios';

export const apiLogin = (data) => axios.post('/api/v1/auth/sign-in',data);
