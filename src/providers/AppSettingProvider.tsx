import { AppSettingContextType, LanguagePreference, LogoAdvHum, LogoMyIts, ThemePreference } from "@/types/app-setting";
import { useDisclosure } from "@chakra-ui/react";
import { ReactNode, createContext, useEffect, useState } from "react";
import useSWRImmutable from "swr/immutable";
import { mutate } from "swr";

const appSettingContextDefault: AppSettingContextType = {
    langPref: "id",
    logoMyIts: "/images/app/logo-myits-blue.svg",
    logoAdvHum: "/images/app/advhum-blue.png",
    isNavbarOpen: true,
    markerActive: 0,
    markerTemp: -1,
}

const fetcherLocal = (key: string) => localStorage?.getItem(key)

const AppSettingContext = createContext<AppSettingContextType>(appSettingContextDefault)

export function AppSettingProvider({ children }: { children: ReactNode }) {

    const { data: isNavbarOpenLocal } = useSWRImmutable('is_navbar_open', fetcherLocal)
    const { data: themeLocal } = useSWRImmutable('chakra-ui-color-mode', fetcherLocal)
    const { isOpen: isNavbarOpen, onToggle: toggleNavbar, onOpen, onClose } = useDisclosure()

    const [langPref, setLangPref] = useState<LanguagePreference>("id")
    const [themePref, setThemePref] = useState<ThemePreference>("light")

    const [logoMyIts, setLogoMyIts] = useState<LogoMyIts>("/images/app/logo-myits-blue.svg")
    const [logoAdvHum, setLogoAdvHum] = useState<LogoAdvHum>("/images/app/advhum-blue.png")
    const [markerActive, setMarkerActive] = useState<number>(0)
    const [markerTemp, setMarkerTemp] = useState<number>(-1)

    // ********** EFFECTS ********** //
    // Get Preferences from Local Storage
    useEffect(() => {
        if (isNavbarOpenLocal) {
            isNavbarOpenLocal == "true" ? onOpen() : onClose()
        }
    }, [isNavbarOpenLocal])

    useEffect(() => {
        if (themeLocal) {
            setThemePref(themeLocal === "dark" ? "dark" : "light")
        }
    }, [themeLocal])

    // Preference Changes
    useEffect(() => {
        if (themePref === "light") {
            setLogoMyIts("/images/app/logo-myits-blue.svg")
            setLogoAdvHum("/images/app/advhum-blue.png")
        } else {
            setLogoMyIts("/images/app/logo-myits-white.svg")
            setLogoAdvHum("/images/app/advhum-white.png")
        }
    }, [themePref])

    // ********** FUNCTIONS ********** //
    // Set Browser Settings in Local Storage
    const navbarToggler = () => {
        if (isNavbarOpen) {
            localStorage.setItem('is_navbar_open', "false")
        } else {
            localStorage.setItem('is_navbar_open', "true")
        }
        toggleNavbar()
    }

    return (
        <AppSettingContext.Provider value={{
            langPref,
            logoMyIts,
            logoAdvHum,
            isNavbarOpen,
            markerActive,
            markerTemp,

            navbarToggler,
            setMarkerActive,
            setMarkerTemp,
        }}>
            {children}
        </AppSettingContext.Provider>
    )
}

export default AppSettingContext