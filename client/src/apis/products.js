import axios from "../axios";

export const apigetProducts = () => axios.get("/api/v1/products");