import {
  foundationsSrc,
  komponenSrc,
  patternSrc,
  stylesSrc,
} from "@/data/image";
import { AppSettingProvider } from "@/providers/AppSettingProvider";
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
import AppSettingContext from "@/providers/AppSettingProvider";

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
import Page from "@/components/atoms/Page";
import PageWrapper from "@/components/atoms/PageWrapper";
import PageCenter from "@/components/atoms/PageCenter";

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
        <div style={{}}>
          <div
            id="globalLoader"
            style={{
              display: "flex",
              zIndex: "99",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                zIndex: "99",
                overflow: "hidden",
              }}
            >
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
        </div>
      ) : null}

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
              <Page>
                <Sidebar3 />
                <PageWrapper>
                  <PageCenter>
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
                  </PageCenter>
                </PageWrapper>
              </Page>
            </AppWrapper>
          </ChakraProvider>
        </QueryClientProvider>
      </AppSettingProvider>
    </>
  );
}

export { getServerSideProps } from "@/Chakra";
