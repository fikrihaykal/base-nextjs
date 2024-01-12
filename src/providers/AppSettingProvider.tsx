import { fetchDataBeranda } from "@/services/beranda/fetcher_data_beranda";
import {
  AppSettingContextType,
  LanguagePreference,
  LogoAdvHum,
  LogoMyIts,
  ThemePreference,
} from "@/types/app-setting";
import { useDisclosure } from "@chakra-ui/react";
import { ReactNode, createContext, useEffect, useState } from "react";
import { start } from "repl";
import useSWR from "swr";
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
  diffS: 0,
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
  const [startTime, setStartTime] = useState<Date | undefined>();
  const [endTime, setEndTime] = useState<Date | undefined>();
  const [diffS, setDiffS] = useState<number>(0);
  const [running, setRunning] = useState(false);
  const [worldTime, setWorldTime] = useState<Date | undefined>();

  const {
    data: dataBeranda,
    error,
    isValidating,
  } = useSWR("data_beranda", fetchDataBeranda);

  useEffect(() => {
    if (dataBeranda) {
      setStartTime(new Date((dataBeranda.data.waktu_masuk).slice(0,-1)));
    }
  }, [dataBeranda]);

  useEffect(() => {
    if (isNavbarOpenLocal) {
      isNavbarOpenLocal == "true" ? onOpen() : onClose();
      setTimeout(() => setIsLoading(false), 400);
    } else {
      setTimeout(() => setIsLoading(false), 400);
    }
  }, [isNavbarOpenLocal, onOpen, onClose]);

  let utc_datetime;

  async function fetchTime() {
    try {
      const response = await fetch("https://worldtimeapi.org/api/ip");
      const data = await response.json();
      utc_datetime = new Date(data.utc_datetime);
      setWorldTime(utc_datetime);
    } catch (error) {
      setWorldTime(new Date());
      // throw error notice
    }
  }

  useEffect(() => {
    if (startTime !== undefined && worldTime !== undefined && running) {
      setDiffS(worldTime.getTime() - startTime.getTime());
      console.log(diffS);
    }
  }, [worldTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchTime();
    }, 60000);
    return () => clearInterval(interval);
  });

  const navbarToggler = () => {
    if (isNavbarOpen) {
      localStorage.setItem("is_navbar_open", "false");
    } else {
      localStorage.setItem("is_navbar_open", "true");
    }
    toggleNavbar();
  };

  const hours = Math.floor(diffS / 1000 / 60 / 60);
  const minutes = Math.floor((diffS / 1000 / 60 / 60 - hours) * 60);
  const seconds = Math.floor((diffS % 6000) / 100);

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
        startTime,
        endTime,
        running,
        diffS,
        hours,
        minutes,
        seconds,

        navbarToggler,
        setMarkerActive,
        setMarkerTemp,
        setParentActive,
        setParentTemp,
        setCardWidth,
        setCardWidthWidget,
        setStartTime,
        setEndTime,
        setRunning,
        setDiffS,
      }}
    >
      {children}
    </AppSettingContext.Provider>
  );
}

export default AppSettingContext;
