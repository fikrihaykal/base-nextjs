type AuthStatus = 'validating' | 'authenticated' | 'unauthenticated'

interface AuthContextType {
    status: AuthStatus
    hasAccess: boolean
}

interface Role {
    id: string
    name: string
    is_default: boolean
    permissions: string[]
}

interface AuthProfileType {
    status: AuthStatus
    name?: string
    nickname?: string
    picture?: string
    birthdate?: string
    preferred_username?: string

    email?: string
    email_verified?: boolean
    alternate_email?: string
    alternate_email_verified?: boolean
    phone?: string
    phone_verified?: boolean

    group?: string[]
    role?: Role[]
    active_role?: string
}

interface AccountInfoType {
    name?: string
    nickname?: string
    profPicture?: string
    birthdate?: string
    prefUsername?: string
    email?: string
    role?: Role[]
    activeRole?: string
    userInfoError?: boolean
    userInfoValidating?: boolean
}

export { AuthStatus, AuthContextType, AuthProfileType, AccountInfoType }
