import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
    baseURL: "https://be-intern.bccdev.id/alex/api",
    headers: {
        "Content-Type": "application/json",
        //"ngrok-skip-browser-warning": "69420",
    }, 
});

// axiosInstance.interceptors.request.use((config) => {
//     const token = Cookies.get("token");
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     (error) => Promise.reject(error)
//     return config;
// });

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export default axiosInstance;