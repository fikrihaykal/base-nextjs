import axios, { isAxiosError, CanceledError } from "axios"
import { useRouter } from "next/router"

const SIGN_OUT_ENDPOINT = (process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:8080") + "/auth/logout"

const signOutAction = () => {
    const router = useRouter()

    const signOut = async () => {
        const signOutUrl = await axios
            .delete(SIGN_OUT_ENDPOINT, {
                withCredentials: true,
                xsrfCookieName: 'CSRF-TOKEN',
                xsrfHeaderName: 'X-CSRF-TOKEN'
            })
            .then((res) => res.data)
            .catch((e) => {
                if (!isAxiosError(e) && !(e instanceof CanceledError)) throw e
            })

        router.push(signOutUrl.data)
    }

    return { signOut }
}

export { signOutAction }