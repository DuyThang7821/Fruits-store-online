import axios from "../axios";

export const apiLogin = (data) => axios.post("/api/v1/auth/sign-in", data);

export const apiRegister = (data) => axios.post("/api/v1/auth/sign-up", data);

export const apiLogout = () => axios.get("/api/v1/auth/sign-out");

export const apiGetCartById = (accountId) => axios.get(`/api/v1/carts/get-by-account-id/${accountId}/account-id`);

export const apiAddCart = (data) => axios.post('/api/v1/carts', data);

export const apiUpdateCart = (data) => axios.put('/api/v1/carts/update-cart', data);

