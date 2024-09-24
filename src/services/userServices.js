import axios from "axios";

const baseURL = "http://localhost:3000";

export const login = (data) => {
    delete data.confirmPassword;
    const body = {
        ...data,
        username: generateUsername(data.name) ,
        avatar: "https://i.imgur.com/w3UEu8o.jpeg",
        background: "https://i.imgur.com/UMr5rWj.png"
    }
    const response = axios.post(`${baseURL}/user/created`, body);

    return response;
};

function generateUsername(name) {
    const nameWithoutSpaces = name.replace(/\s/g, "").toLowerCase();
    const randonNumber = Math.floor(Math.random() * 1000);

    return `${nameWithoutSpaces}_${randonNumber}`
};
