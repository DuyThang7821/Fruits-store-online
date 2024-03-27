import axios from '../axios';

export const apiLogin = (email, password) => axios({
    url: 'https://ogani-be.onrender.com/api/v1/auth/sign-in',
    method: 'POST',
    data: { email, password } 
});
