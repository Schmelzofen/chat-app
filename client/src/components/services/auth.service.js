import axios from "axios";

const API_URL = "http://localhost:8000/api/";

class AuthService {
    async login(email, password) {
        const response = await axios
            .post(API_URL + "login", {
                email,
                password
            })
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify({ token: response.data.accessToken, user: response.data.user }));
        }
        return response.data;
    }
    logout() {
        localStorage.removeItem("user");
    }
    register(username, email, password) {
        return axios.post(API_URL + "register", {
            username,
            email,
            password
        })
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();