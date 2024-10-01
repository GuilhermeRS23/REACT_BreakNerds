import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000";

export function registerNewGame(body) {
    const response = axios.post(`${baseURL}/game/created`, body,
        {
            headers:
                { Authorization: `Bearer ${Cookies.get("token")}` }
        }
    );

    return response;
};

export function getAllGames() {
    const response = axios.get(`${baseURL}/game`);
    return response;
};

export function getTopGame() {
    const response = axios.get(`${baseURL}/game/top`);
    return response;
};

export function searchGames(title) {
    const response = axios.get(`${baseURL}/game/search?title=${title}`);
    return response;
};

export function getAllGamesByUser() {
    const response = axios.get(`${baseURL}/game/user/games`,
        {
            headers:
                { Authorization: `Bearer ${Cookies.get("token")}` }
        }
    );

    return response;
};