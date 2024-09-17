import axios from "axios";

const baseURL = "http://localhost:3000";

export function getAllGames() {
    const response = axios.get(`${baseURL}/game`);
    return response;
};

export function getTopGame() {
    const response = axios.get(`${baseURL}/game/top`);
    return response;
};
