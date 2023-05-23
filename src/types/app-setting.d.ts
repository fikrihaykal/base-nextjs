type LanguagePreference = "en" | "id"
type ThemePreference = "light" | "dark"
type LogoMyIts = "/images/app/logo-myits-blue.svg" | "/images/app/logo-myits-white.svg"
type LogoAdvHum = "/images/app/advhum-blue.png" | "/images/app/advhum-white.svg"

interface AppSettingContextType {
    langPref: LanguagePreference,
    themePref: ThemePreference,
    logoMyIts: LogoMyIts,
    logoAdvHum: LogoAdvHum,
    isNavbarOpen: boolean,

    toggleNavbar?: MouseEventHandler<T> | undefined;
}

export {
    LanguagePreference,
    ThemePreference,
    LogoMyIts,
    LogoAdvHum,
    AppSettingContextType
}