type LanguagePreference = "en" | "id"
type LogoMyIts = "/images/app/logo-myits-blue.svg" | "/images/app/logo-myits-white.svg"
type LogoAdvHum = "/images/app/advhum-blue.png" | "/images/app/advhum-white.png"

const options = ['orange', 'green', 'cyan', 'blue', 'purple', 'pink', 'teal'] as const
type ColorPreference = typeof options[number]

interface AppSettingContextType {
    langPref: LanguagePreference,
    colorPref: ColorPreference,
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
    setLangPref?: Dispatch<SetStateAction<LanguagePreference>>
    setColorPref?: Dispatch<SetStateAction<ColorPreference>>
}

export {
    ColorPreference,
    LanguagePreference,
    ThemePreference,
    LogoMyIts,
    LogoAdvHum,
    AppSettingContextType
}