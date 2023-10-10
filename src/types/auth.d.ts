type AuthStatus = "validating" | "authenticated" | "unauthenticated"

interface AuthContextType {
    status: AuthStatus,
    hasAccess: boolean
}

interface AuthProfileType {
    status: AuthStatus,
    name?: string,
    nickname?: string,
    picture?: string,
    birthdate?: string,
    preferred_username?: string,

    email?: string,
    email_verified?: boolean,
    alternate_email?: string,
    alternate_email_verified?: boolean,
    phone?: string,
    phone_verified?: boolean,

    group?: string[],
    role?: string[],
    active_role?: string[],
}

export {
    AuthStatus,
    AuthContextType,
    AuthProfileType
}