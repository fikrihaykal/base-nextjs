import axios from "axios";
import { getCookie } from "./CookieParser";

const fetcherGetBackend = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:8080"
})

const fetcherPostBackend = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:8080",
})

export { fetcherGetBackend, fetcherPostBackend }