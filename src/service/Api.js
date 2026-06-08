import axios from "axios";

const config = axios.create({
    baseURL: import.meta.env.baseURL,
});

config.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

return config;

export default config;
