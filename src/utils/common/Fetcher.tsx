import axios from "axios";

const fetcherCsrfCookie = axios.create({
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://localhost:8080"
})

const fetcherCsrfCookieNew = async (key: string) => axios.create({
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://localhost:8080"
})

export { fetcherCsrfCookie }