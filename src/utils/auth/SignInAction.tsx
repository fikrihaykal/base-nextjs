import axios, { isAxiosError, CanceledError } from "axios"
import { useRouter } from "next/router"
import { getCookie } from "../common/CookieParser"

const SIGN_IN_ENDPOINT = (process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:8080") + "/auth/login"
const CSRF_COOKIE_ENDPOINT = (process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:8080") + '/csrf-cookie'

const signInAction = () => {
    const router = useRouter()

    const getCsrfToken = async () => {
        axios.get(CSRF_COOKIE_ENDPOINT)
            .catch((e) => {
                if (!isAxiosError(e) && !(e instanceof CanceledError)) throw e
            })
    }

    const signIn = async () => {
        const signInUrl = await axios
            .post(SIGN_IN_ENDPOINT, {}, {
                headers: { 'X-CSRF-TOKEN': getCookie('CSRF-TOKEN') },
                withCredentials: true
            })
            .then((res) => res.data)
            .catch((e) => {
                if (!isAxiosError(e) && !(e instanceof CanceledError)) throw e
            })

        router.push(signInUrl.data)
    }

    return { getCsrfToken, signIn }
}

export { signInAction }