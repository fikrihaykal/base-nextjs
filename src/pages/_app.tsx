import {
  foundationsSrc,
  komponenSrc,
  patternSrc,
  stylesSrc,
} from "@/data/image";
import AppSettingContext, {
  AppSettingProvider,
} from "@/providers/AppSettingProvider";
import "@/styles/globals.css";
import theme from "@/theme/theme";
import { preloadImages } from "@/utils/image_preload";
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Inter } from "next/font/google";

import { BellIcon, SearchIcon } from "@/components/atoms/IconParams";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ReactNode, useContext, useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });
import useDimensions from "react-cool-dimensions";
import Sidebar3 from "@/components/organisms/Sidebar3";
import RightMenu from "@/components/organisms/RightMenu";
import Header from "@/components/organisms/Header2";
import { AnimatePresence } from "framer-motion";

const AppWrapper = ({ children }: { children: ReactNode }) => {
  const { isLoading } = useContext(AppSettingContext);
  const { colorMode } = useColorMode();
  const [imgLoad, setImgLoad] = useState(Array<ReactNode>);

  useEffect(() => {
    const sources = preloadImages(
      komponenSrc,
      stylesSrc,
      foundationsSrc,
      patternSrc
    );
    setImgLoad(sources);
  }, []);

  return (
    <>
      {isLoading && colorMode !== undefined ? (
        <div id="globalLoader">
          <div style={{ display: "flex" }}>
            <div
              className={inter.className}
              id="text-loading"
              style={{
                fontSize: "2rem",
                marginLeft: "10px",
                fontWeight: "600",
              }}
            >
              Design System
            </div>
          </div>
          <div className="dot-flashing" style={{ marginTop: "14px" }}></div>
        </div>
      ) : null}

      {imgLoad?.map((img, i) => (
        <div key={i} style={{ position: "absolute" }}>
          {img}
        </div>
      ))}

      {children}
    </>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [queryClient] = useState(() => new QueryClient());

  if (router.pathname === "/_error")
    return (
      <>
        <AppSettingProvider>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />;
          </ChakraProvider>
        </AppSettingProvider>
      </>
    );

  return (
    <>
      <AppSettingProvider>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            <AppWrapper>
              <Flex className="page" flexDirection="column" minH="100vh">
                <Sidebar3 />
                <Box
                  className="page__wrapper"
                  flexGrow="1"
                  pl={{ base: "0px", m: "96px", d: "240px" }}
                  transition="all .25s"
                  overflow="hidden"
                >
                  <Box
                    className="page__center"
                    w={{ base: "100%", x: "unset" }}
                    maxW={{ base: "930px", x: "1360px" }}
                    m="0 auto"
                    p={{
                      base: "0 16px 32px",
                      m: "0 32px 40px",
                      t: "0 70px 40px",
                      x: "unset",
                    }}
                  >
                    <Hydrate state={pageProps.dehydratedState}>
                      <AnimatePresence
                        mode="wait"
                        initial={false}
                        onExitComplete={() => {
                          document.getElementById("top")?.scrollIntoView();
                        }}
                      >
                        <Component key={router.route} {...pageProps} />
                      </AnimatePresence>
                    </Hydrate>
                  </Box>
                </Box>
              </Flex>
            </AppWrapper>
          </ChakraProvider>
        </QueryClientProvider>
      </AppSettingProvider>
    </>
  );
}

export { getServerSideProps } from "@/Chakra";
