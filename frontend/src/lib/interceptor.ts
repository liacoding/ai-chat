import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
});

export const setupAxiosInterceptor = ( getToken: () => Promise<string | null> ) => {
    axiosInstance.interceptors.request.use(
        async (config) => {
            const token = await getToken();
            if(token){
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );
};