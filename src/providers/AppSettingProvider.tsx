import { AppSettingContextType, LanguagePreference, LogoAdvHum, LogoMyIts, ThemePreference } from "@/types/app-setting";
import { useDisclosure } from "@chakra-ui/react";
import { ReactNode, createContext, useState } from "react";

const appSettingContextDefault: AppSettingContextType = {
    langPref: "id",
    themePref: "light",
    logoMyIts: "/images/app/logo-myits-blue.svg",
    logoAdvHum: "/images/app/advhum-blue.png",
    isNavbarOpen: false
}

const AppSettingContext = createContext<AppSettingContextType>(appSettingContextDefault)

export function AppSettingProvider({ children }: { children: ReactNode }) {

    const [langPref, setLangPref] = useState<LanguagePreference>("id")
    const [themePref, setThemePref] = useState<ThemePreference>("light")

    const [logoMyIts, setLogoMyIts] = useState<LogoMyIts>("/images/app/logo-myits-blue.svg")
    const [logoAdvHum, setLogoAdvHum] = useState<LogoAdvHum>("/images/app/advhum-blue.png")

    const { isOpen: isNavbarOpen, onToggle: toggleNavbar } = useDisclosure()

    return (
        <AppSettingContext.Provider value={{
            langPref,
            themePref,
            logoMyIts,
            logoAdvHum,
            isNavbarOpen,

            toggleNavbar
        }}>
            {children}
        </AppSettingContext.Provider>
    )
}

export default AppSettingContext