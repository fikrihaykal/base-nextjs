import { AuthProfileType } from "@/types/auth"
import axios from "axios"

const getAuthService = async () => {
    const endpoint = (process.env.NEXT_PUBLIC_BACKEND_URL || "https://localhost:8080") + "/auth/user"
    const auth = await axios.get(
        endpoint,
        {
            withCredentials: true
        }
    ).then(
        res => {
            const userInfo = res.data

            let profile: AuthProfileType = {
                status: "authenticated",
                name: userInfo?.name,
                nickname: userInfo?.nickname,
                picture: userInfo?.picture,
                preferred_username: userInfo?.preferred_username,
                group: userInfo?.group,
                role: userInfo?.role,
                active_role: userInfo?.active_role,
                alternate_email: userInfo?.alternate_email,
                alternate_email_verified: userInfo?.alternate_email_verified,
                email: userInfo?.email,
                email_verified: userInfo?.email_verified,
                phone: userInfo?.phone,
                phone_verified: userInfo?.phone_verified,
                birthdate: userInfo?.birthdate
            }

            return profile
        }
    ).catch(
        err => {
            let profile: AuthProfileType = { status: "authenticated" }

            return profile
        }
    )

    return auth
}

export { getAuthService }