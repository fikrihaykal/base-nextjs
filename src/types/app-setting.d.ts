type LanguagePreference = "en" | "id"
type LogoMyIts = "/images/app/logo-myits-blue.svg" | "/images/app/logo-myits-white.svg"
type LogoAdvHum = "/images/app/advhum-blue.png" | "/images/app/advhum-white.png"

interface AppSettingContextType {
    langPref: LanguagePreference,
    isNavbarOpen?: boolean,
    // isNavbarRightOpen?: boolean,
    markerActive: number,
    markerTemp: number,
    parentActive: number,
    parentTemp: number,
    isLoading: boolean,
    cardWidth: string,
    cardWidthWidget: string,

    navbarToggler?: MouseEventHandler<T> | undefined;
    navbarTogglerRight?: MouseEventHandler<T> | undefined;
    setMarkerActive?: any;
    setMarkerTemp?: any;
    setParentActive?: any;
    setParentTemp?: any;
    setCardWidth?: any;
    setCardWidthWidget?: any;
}

export {
    LanguagePreference,
    ThemePreference,
    LogoMyIts,
    LogoAdvHum,
    AppSettingContextType
}