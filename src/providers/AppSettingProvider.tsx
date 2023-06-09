import { AppSettingContextType, LanguagePreference, LogoAdvHum, LogoMyIts, ThemePreference } from "@/types/app-setting";
import { useDisclosure } from "@chakra-ui/react";
import { ReactNode, createContext, useEffect, useState } from "react";
import useSWRImmutable from "swr/immutable";
import { mutate } from "swr";

const appSettingContextDefault: AppSettingContextType = {
    langPref: "id",
    themePref: "light",
    logoMyIts: "/images/app/logo-myits-blue.svg",
    logoAdvHum: "/images/app/advhum-blue.png",
    isNavbarOpen: true,
    isNavbarRightOpen: true,
    markerActive: 0,
    markerTemp: -1,
}

const fetcherLocal = (key: string) => localStorage?.getItem(key)

const AppSettingContext = createContext<AppSettingContextType>(appSettingContextDefault)

export function AppSettingProvider({ children }: { children: ReactNode }) {

    const { data: isNavbarOpenLocal } = useSWRImmutable('is_navbar_open', fetcherLocal)
    const { data: isNavbarRightOpenLocal } = useSWRImmutable('is_navbar_right_open', fetcherLocal)
    const { isOpen: isNavbarOpen, onToggle: toggleNavbar, onOpen, onClose } = useDisclosure()
    const { isOpen: isNavbarRightOpen } = useDisclosure()

    const [langPref, setLangPref] = useState<LanguagePreference>("id")
    const [themePref, setThemePref] = useState<ThemePreference>("light")

    const [logoMyIts, setLogoMyIts] = useState<LogoMyIts>("/images/app/logo-myits-blue.svg")
    const [logoAdvHum, setLogoAdvHum] = useState<LogoAdvHum>("/images/app/advhum-blue.png")
    const [markerActive, setMarkerActive] = useState<number>(0)
    const [markerTemp, setMarkerTemp] = useState<number>(-1)

    // Set Browser Settings in Local Storage
    const navbarToggler = () => {
        if (isNavbarOpen) {
            localStorage.setItem('is_navbar_open', "false")
        } else {
            localStorage.setItem('is_navbar_open', "true")
        }
        toggleNavbar()
    }

    const navbarTogglerRight = () => {
        if (isNavbarRightOpen) {
            localStorage.setItem('is_navbar_right_open', "false")
        } else {
            localStorage.setItem('is_navbar_right_open', "true")
        }
        toggleNavbar()
    }


    // Get Browser Settings from Local Storage
    useEffect(() => {
        if (isNavbarOpenLocal) {
            isNavbarOpenLocal == "true" ? onOpen() : onClose()
        }
    }, [isNavbarOpenLocal])

    useEffect(() => {
        if (isNavbarRightOpenLocal) {
            isNavbarRightOpenLocal == "true" ? onOpen() : onClose()
        }
    }, [isNavbarRightOpenLocal])

    return (
        <AppSettingContext.Provider value={{
            langPref,
            themePref,
            logoMyIts,
            logoAdvHum,
            isNavbarOpen,
            markerActive,
            markerTemp,

            navbarToggler,
            navbarTogglerRight,
            setMarkerActive,
            setMarkerTemp,
        }}>
            {children}
        </AppSettingContext.Provider>
    )
}

export default AppSettingContext