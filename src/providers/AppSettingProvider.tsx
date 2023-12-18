import {
  AppSettingContextType,
  LanguagePreference,
  LogoAdvHum,
  LogoMyIts,
  ThemePreference,
} from "@/types/app-setting";
import { useDisclosure } from "@chakra-ui/react";
import { ReactNode, createContext, useEffect, useState } from "react";
import useSWRImmutable from "swr/immutable";

const appSettingContextDefault: AppSettingContextType = {
  langPref: "id",
  isNavbarOpen: true,
  markerActive: 0,
  markerTemp: -1,
  parentActive: 0,
  parentTemp: 0,
  isLoading: true,
  cardWidth: "50%",
  cardWidthWidget: "50%",
};

const fetcherLocal = (key: string) => localStorage?.getItem(key);

const AppSettingContext = createContext<AppSettingContextType>(
  appSettingContextDefault
);

export function AppSettingProvider({ children }: { children: ReactNode }) {
  const { data: isNavbarOpenLocal } = useSWRImmutable(
    "is_navbar_open",
    fetcherLocal
  );
  const {
    isOpen: isNavbarOpen,
    onToggle: toggleNavbar,
    onOpen,
    onClose,
  } = useDisclosure();

  const [cardWidth, setCardWidth] = useState("50%");
  const [cardWidthWidget, setCardWidthWidget] = useState("50%");

  const [langPref, setLangPref] = useState<LanguagePreference>("id");

  const [markerActive, setMarkerActive] = useState<number>(0);
  const [markerTemp, setMarkerTemp] = useState<number>(-1);
  const [parentActive, setParentActive] = useState<number>(0);
  const [parentTemp, setParentTemp] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // ********** EFFECTS ********** //
  // Get Preferences from Local Storage
  useEffect(() => {
    if (isNavbarOpenLocal) {
      isNavbarOpenLocal == "true" ? onOpen() : onClose();
      setTimeout(() => setIsLoading(false), 400);
    } else {
      setTimeout(() => setIsLoading(false), 400);
    }
  }, [isNavbarOpenLocal, onOpen, onClose]);

  // ********** FUNCTIONS ********** //
  // Set Browser Settings in Local Storage
  const navbarToggler = () => {
    if (isNavbarOpen) {
      localStorage.setItem("is_navbar_open", "false");
    } else {
      localStorage.setItem("is_navbar_open", "true");
    }
    toggleNavbar();
  };

  return (
    <AppSettingContext.Provider
      value={{
        langPref,
        isNavbarOpen,
        markerActive,
        markerTemp,
        isLoading,
        cardWidth,
        cardWidthWidget,
        parentActive,
        parentTemp,

        navbarToggler,
        setMarkerActive,
        setMarkerTemp,
        setParentActive,
        setParentTemp,
        setCardWidth,
        setCardWidthWidget,
      }}
    >
      {children}
    </AppSettingContext.Provider>
  );
}

export default AppSettingContext;
