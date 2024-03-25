import axios from 'axios';

export const apiGetCategories = () => axios.get('https://ogani-be.onrender.com/api/v1/categories');
