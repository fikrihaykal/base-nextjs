import { useCallback, useEffect, useMemo } from "react"
import { useRouter } from "next/router"
import { isAxiosError, CanceledError } from "axios"
import { fetcherCsrfCookie } from "@/utils/common/Fetcher"

const CSRF_COOKIE_ENDPOINT = 'csrf-cookie'

const signInAction = () => {
    const router = useRouter()
    const controller = useMemo(() => new AbortController(), [])

    const getCsrfToken = useCallback(
        async () => {
            fetcherCsrfCookie
                .get(CSRF_COOKIE_ENDPOINT, { signal: controller.signal })
                .catch((e) => {
                    if (!isAxiosError(e) && !(e instanceof CanceledError)) throw e
                })

        }, [router, controller.signal]
    )

    useEffect(() => {
        return () => controller.abort()
    }, [controller])

    return { getCsrfToken }
}

export { signInAction }