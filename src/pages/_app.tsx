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
              
              <Flex w="100vw" pos="relative">
                {/* Sidebar */}
                <Flex
                  w="70px"
                  minW="70px"
                  bg="#ffffff"
                  h="100vh"
                  flexDirection="column"
                  justifyContent="start"
                  alignItems="center"
                  borderRight="1px solid #eeeeee"
                  py="12px"
                >
                  <CgMenuGridO
                    style={{ fontSize: "34px", color: "#bebebe" }}
                  ></CgMenuGridO>
                </Flex>
                {/* Mainscreen */}
                <Flex
                  data-scroll-container
                  minH="100vh"
                  h="100vh"
                  flexDirection="column"
                  flexGrow="1"
                  pos="relative"
                >
                  {/* Header */}
                  <Flex
                    backgroundColor="rgba(255,255,255,0.8)"
                    height="58px"
                    width="calc(100vw - 70px)"
                    backdropFilter={"blur(30px)"}
                    position="fixed"
                    backdropBlur="30px"
                    borderBottom="1px solid #eeeeee"
                    // boxShadow="0 0 4px 0px rgba(0,38,97,.05), 0 0 0 1px rgba(0,38,97,.07)"
                    zIndex="200"
                    justifyContent="center"
                    alignItems="center"
                    px="16px"
                  >
                    {/* <Button
                      size="sm"
                      bg="#0663e5"
                      color="white"
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#064dff",
                      }}
                    >
                      New entry
                    </Button> */}
                    <Box
                      mr="172px"
                      w="640px"
                      h="40px"
                      px="12px"
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      borderRadius="8px"
                      border="1px solid #eeeeee"
                      // boxShadow="0 0 4px 0px rgba(0,38,97,.05), 0 0 0 1px rgba(0,38,97,.07)"

                      bg="#ffffff"
                      color="#8b8b8b"
                      transition="all 120ms ease-in-out"
                      _hover={{
                        boxShadow: "0 0 0px 4px rgba(0,38,97,.05)",
                      }}
                    >
                      <BiSearch
                        style={{
                          fontSize: "20px",
                        }}
                      />
                      <Text fontSize="14px">
                        Search
                      </Text>
                      <Flex gap="4px">
                        <IoClose
                          style={{
                            fontSize: "20px",
                          }}
                        />
                        <LuSettings2
                          style={{
                            fontSize: "20px",
                          }}
                        />
                      </Flex>
                    </Box>
                    <Flex></Flex>
                  </Flex>
                  {/* Content */}
                  <Flex
                    // bg="#fafafa"
                    flexGrow="1"
                    overflow="auto"
                    w="full"
                    pt="78px"
                    px="24px"
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
                    {/*                     
                    <Flex
                      mt="180px"
                      w="full"
                      bg="#ffffff"
                      p="32px"
                      gap="32px"
                      wrap="wrap"
                    >
                    
                    </Flex> */}
                  </Flex>
                </Flex>
              </Flex>
            
            </AppWrapper>
          </ChakraProvider>
        </QueryClientProvider>
      </AppSettingProvider>
    </>
  );
}

export { getServerSideProps } from "@/Chakra";
