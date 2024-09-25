import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000";

export const registerUser = (data) => {
    delete data.confirmPassword;
    const body = {
        ...data,
        username: generateUsername(data.name),
        avatar: "https://i.imgur.com/w3UEu8o.jpeg",
        background: "https://i.imgur.com/UMr5rWj.png"
    }
    const response = axios.post(`${baseURL}/user/created`, body);

    return response;
};

export const loggedUser = () => {
    const response = axios.get(`${baseURL}/user/findById`, {
        headers:
            { Authorization: `Bearer ${Cookies.get("token")}` }
    });

    return response;
};

function generateUsername(name) {
    const nameWithoutSpaces = name.replace(/\s/g, "").toLowerCase();
    const randonNumber = Math.floor(Math.random() * 1000);

    return `${nameWithoutSpaces}_${randonNumber}`
};
