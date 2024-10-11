import axios from "axios";

//const baseURL = "http://localhost:3000";
const baseURL = "https://api-breakinnerdsv2-0.onrender.com";

export const loginUser = (data) => {
    const response = axios.post(`${baseURL}/auth/login`, data);
    return response;
};
