import axios from "axios";

const baseURL = "http://localhost:3000";

export const loginUser = (data) => {
    const response = axios.post(`${baseURL}/auth/login`, data);
    return response;
};
