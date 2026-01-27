import axios from "axios";


const API_URL = "http://localhost:4000/api/v1/auth";

const register = async (email, password) => {
    const response = await axios.post(`${API_URL}/signup`, {
        email,
        password,
    });
    return response.data;
};

const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/signin`, {
        email,
        password,
    });
    if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const verifyEmail = async (email) => {
    const response = await axios.post(`${API_URL}/verify/email`, {
        email,
    });
    return response.data;
};

const verifyEmailCode = async (email, emailCode) => {
    const response = await axios.post(`${API_URL}/verify/code`, {
        email,
        emailCode,
    });
    return response.data;
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
    verifyEmail,
    verifyEmailCode,
};

export default AuthService;
