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
    const response = axios.get(`${baseURL}/game?limit=10`);
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

export function getGameById(id) {
    const response = axios.get(`${baseURL}/game/findGameById/${id}`,
        {
            headers:
                { Authorization: `Bearer ${Cookies.get("token")}` }
        }
    );

    return response;
};

export function updateGame(body, id) {
    const response = axios.patch(`${baseURL}/game/updated/${id}`, body,
        {
            headers:
                { Authorization: `Bearer ${Cookies.get("token")}` }
        }
    );

    return response;
};

export function deleteGame(id) {
    const response = axios.delete(`${baseURL}/game/deleted/${id}`,
        {
            headers:
                { Authorization: `Bearer ${Cookies.get("token")}` }
        }
    );

    return response;
};

export function likeGame(body, id) {
    const response = axios.patch(`${baseURL}/game/like/${id}`, body,
        {
            headers:
                { Authorization: `Bearer ${Cookies.get("token")}` }
        }
    );

    return response;
};

export function addCommentGame(body, id) {
    const response = axios.patch(`${baseURL}/game/comment/${id}`, body,
        {
            headers:
                { Authorization: `Bearer ${Cookies.get("token")}` }
        }
    );

    return response;
};

export function deleteCommentGame(id, idComment, body) {
    const response = axios.patch(`${baseURL}/game/${id}/${idComment}/delete_comment`, body,
        {
            headers:
                { Authorization: `Bearer ${Cookies.get("token")}` }
        }
    );

    return response;
};
