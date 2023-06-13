type LanguagePreference = "en" | "id"
type ThemePreference = "light" | "dark"
type LogoMyIts = "/images/app/logo-myits-blue.svg" | "/images/app/logo-myits-white.svg"
type LogoAdvHum = "/images/app/advhum-blue.png" | "/images/app/advhum-white.png"

interface AppSettingContextType {
    langPref: LanguagePreference,
    themePref: ThemePreference,
    logoMyIts: LogoMyIts,
    logoAdvHum: LogoAdvHum,
    isNavbarOpen?: boolean,
    isNavbarRightOpen?: boolean,
    markerActive: number,
    markerTemp: number,

    navbarToggler?: MouseEventHandler<T> | undefined;
    navbarTogglerRight?: MouseEventHandler<T> | undefined;
    setMarkerActive?: any;
    setMarkerTemp?: any;
}

export {
    LanguagePreference,
    ThemePreference,
    LogoMyIts,
    LogoAdvHum,
    AppSettingContextType
}