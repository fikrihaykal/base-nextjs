import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Sidebar2 from "@/components/organisms/Sidebar2";
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
  ChakraProvider,
  Flex,
  Stack,
  useColorMode,
  Text,
  Spacer,
  Button,
} from "@chakra-ui/react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Inter } from "next/font/google";

import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ReactNode, useContext, useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });
import { BiSearch, BiPlus } from "react-icons/bi";
import { LuSettings2 } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import Sidebar3 from "@/components/organisms/Sidebar3";



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
              
              <Flex
              className="page"
              flexDirection="column"
              minH="100vh"
              >
             
                <Sidebar3/>
                <Box
                className="page__wrapper"
                flexGrow="1"
                pl="256px"
                transition="all .25s"
                >
                  <Box
                  className="page__center"
                  maxW="1200px"
                  m="0 auto"
                  >
                    <Flex
                    className="page_row"
                    >
                      <Box
                      className="page__col"
                      p="0 64px 44px"
                      pt="48px"
                      _first={{
                        flex: "0 0 calc(100% - 426px)",
                        maxWidth: "calc(100% - 426px)",
                      }}
                      >
                        Hello
                      </Box>
                    </Flex>

                  </Box>

                </Box>
              
                 
                
                    {/* <Hydrate state={pageProps.dehydratedState}>
                      <AnimatePresence
                        mode="wait"
                        initial={false}
                        onExitComplete={() => {
                          document.getElementById("top")?.scrollIntoView();
                        }}
                      >
                        <Component key={router.route} {...pageProps} />
                      </AnimatePresence>
                    </Hydrate> */}
                   
              </Flex>
            
            </AppWrapper>
          </ChakraProvider>
        </QueryClientProvider>
      </AppSettingProvider>
    </>
  );
}

export { getServerSideProps } from "@/Chakra";
