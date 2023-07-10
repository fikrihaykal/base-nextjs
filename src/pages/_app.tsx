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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter } from "next/font/google";

import { BellIcon, SearchIcon } from "@/components/atoms/Icons";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ReactNode, useContext, useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });
import useDimensions from "react-cool-dimensions";
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
  const [cardWidth, setCardWidth] = useState("100%");
  const router = useRouter();
  const [queryClient] = useState(() => new QueryClient());
  const { observe, currentBreakpoint, width, height, entry } = useDimensions({
    breakpoints: { XS: 0, SM: 320, MD: 480, LG: 640, XL: 1080 },
    updateOnBreakpointChange: true,
    onResize: ({
      observe,
      unobserve,
      width,
      height,
      entry,
      currentBreakpoint,
    }) => {
      if (currentBreakpoint == "XL") {
        setCardWidth("33%");
      } else if (currentBreakpoint == "LG") {
        setCardWidth("50%");
      } else if (currentBreakpoint == "MD") {
        setCardWidth("100%");
      }
    },
  });

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
                  pl="240px"
                  transition="all .25s"
                >
                  <Box className="page__center" maxW="1300px" m="0 auto">
                    <Flex className="page__row">
                      <Box
                        className="page__col"
                        p="0 64px 44px"
                        pt="48px"
                        _first={{
                          flex: "0 0 calc(100% - 426px)",
                          maxWidth: "calc(100% - 426px)",
                        }}
                        // borderRight="1px solid #e4e4e4"
                      >
                        <Text
                          className="page__toptitle"
                          fontSize="24px"
                          lineHeight="1.33333"
                          fontWeight="500"
                          variant="toptitle"
                        >
                          Hi Sulthon Nashir
                        </Text>
                        <Text
                          className="page__title"
                          fontSize="48px"
                          lineHeight="1.33333"
                          fontWeight="600"
                          variant="toptitle"
                        >
                          Welcome Back
                        </Text>
                      </Box>
                      <Box
                        className="page__col"
                        p="0 64px 44px"
                        pt="48px"
                        _first={{
                          flex: "0 0 calc(100% - 426px)",
                          maxWidth: "calc(100% - 426px)",
                        }}
                        _even={{
                          flexShrink: "0",
                          width: "426px",
                        }}
                      >
                        <Flex
                          className="header"
                          pos="relative"
                          zIndex="10"
                          alignItems="center"
                          maxW="298px"
                          ml="auto"
                        >
                          <Box
                            className="search"
                            w="214px"
                            ml="-8px"
                            mr="auto"
                            pos="relative"
                            zIndex="3"
                          >
                            <Box className="search__field" zIndex="2">
                              <Input
                                className="search__input"
                                placeholder="Search"
                                w="100%"
                                h="48px"
                                p="0 10px 0 44px"
                                borderRadius="12px"
                                bg="transparent"
                                fontSize="14px"
                                color="#11142D"
                                transition="background .25s"
                                border="none"
                                _focusVisible={{
                                  border: "none",
                                }}
                              ></Input>
                              <Flex
                                className="search__toggle"
                                pos="absolute"
                                alignItems="center"
                                justifyContent="center"
                                top="0"
                                left="0"
                                bottom="0"
                                w="42px"
                                color="#1B1D21"
                              >
                                <SearchIcon fontSize="22px" />
                              </Flex>
                            </Box>
                          </Box>
                          <Box className="notifications" pos="relative">
                            <Button
                              className="notif__button"
                              pos="relative"
                              w="48px"
                              h="48px"
                              borderRadius="50%"
                              transition="all .25s"
                              bg="white"
                              _hover={{
                                background: "white",
                                boxShadow:
                                  "rgba(17, 12, 46, 0.07) 0px 4px 12px 0px;",
                              }}
                            >
                              <BellIcon fontSize="24px" />
                              <Box
                                className="notif__counter"
                                pos="absolute"
                                top="0"
                                right="-12px"
                                display="inline-block"
                                minW="24px"
                                lineHeight="24px"
                                borderRadius="50%"
                                bg="#fac43a"
                                fontSize="12px"
                                fontWeight="600"
                                color="white"
                              >
                                2
                              </Box>
                            </Button>
                          </Box>
                        </Flex>
                      </Box>
                    </Flex>
                    <Flex className="page__row">
                      <Box
                        ref={observe}
                        className="page__col"
                        p="0 64px 44px"
                        sx={{
                          ":only-of-type": {
                            flex: "0 0 calc(100%)",
                            maxWidth: "calc(100%)",
                            borderRight: "none"
                          },
                        }}
                        _first={{
                          flex: "0 0 calc(100% - 426px)",
                          maxWidth: "calc(100% - 426px)",
                        }}
                        borderRight="1px solid #e4e4e4"
                        _even={{
                          flexShrink: "0",
                          width: "426px",
                        }}
                      >
                        <Box
                          className="page__banner"
                          pos="relative"
                          w="full"
                          h="320px"
                          borderRadius="1.6rem"
                          zIndex="10"
                          bg="#008fff"
                        >
                          <Box
                            className="page__banner second"
                            pos="absolute"
                            top="2px"
                            left="16px"
                            w="95%"
                            zIndex="9"
                            h="330px"
                            borderRadius="24px"
                            bg="#008fff33"
                          ></Box>
                        </Box>
                        <Flex
                          className="page__mainmenu"
                          m="0 -16px"
                          wrap="wrap"
                          pt="24px"
                        >
                          <Box
                            className="card__menu_shadow"
                            flex={`0 0 calc(${cardWidth} - 32px)`}
                            w={`calc(${cardWidth} - 32px)`}
                            h="200px"
                            m="32px 16px 0px 16px"
                            pos="relative"
                            p="32px"
                            borderRadius="24px"
                            opacity="1"
                            bg="#fff"
                            _before={{
                              content: '""',
                              pos: "absolute",
                              top: "22px",
                              left: "18px",
                              right: "18px",
                              bottom: "-40px",
                              zIndex: "-2",
                              bg: "#e3e6ec",
                              opacity: "0.81",
                              filter: "blur(86.985px)",
                              borderRadius: "24px",
                            }}
                          ></Box>
                          <Box
                            className="card__menu_shadow"
                            flex={`0 0 calc(${cardWidth} - 32px)`}
                            w={`calc(${cardWidth} - 32px)`}
                            h="200px"
                            m="32px 16px 0px 16px"
                            pos="relative"
                            p="32px"
                            borderRadius="24px"
                            opacity="1"
                            bg="#fff"
                            _before={{
                              content: '""',
                              pos: "absolute",
                              top: "22px",
                              left: "18px",
                              right: "18px",
                              bottom: "-40px",
                              zIndex: "-2",
                              bg: "#e3e6ec",
                              opacity: "0.81",
                              filter: "blur(86.985px)",
                              borderRadius: "24px",
                            }}
                          ></Box>
                          <Box
                            className="card__menu_shadow"
                            flex={`0 0 calc(${cardWidth} - 32px)`}
                            w={`calc(${cardWidth} - 32px)`}
                            h="200px"
                            m="32px 16px 0px 16px"
                            pos="relative"
                            p="32px"
                            borderRadius="24px"
                            opacity="1"
                            bg="#fff"
                            _before={{
                              content: '""',
                              pos: "absolute",
                              top: "22px",
                              left: "18px",
                              right: "18px",
                              bottom: "-40px",
                              zIndex: "-2",
                              bg: "#e3e6ec",
                              opacity: "0.81",
                              filter: "blur(86.985px)",
                              borderRadius: "24px",
                            }}
                          ></Box>
                          <Box
                            className="card__menu_shadow"
                            flex={`0 0 calc(${cardWidth} - 32px)`}
                            w={`calc(${cardWidth} - 32px)`}
                            h="200px"
                            m="32px 16px 0px 16px"
                            pos="relative"
                            p="32px"
                            borderRadius="24px"
                            opacity="1"
                            bg="#fff"
                            _before={{
                              content: '""',
                              pos: "absolute",
                              top: "22px",
                              left: "18px",
                              right: "18px",
                              bottom: "-40px",
                              zIndex: "-2",
                              bg: "#e3e6ec",
                              opacity: "0.81",
                              filter: "blur(86.985px)",
                              borderRadius: "24px",
                            }}
                          ></Box>
                          <Box
                            className="card__menu_shadow"
                            flex={`0 0 calc(${cardWidth} - 32px)`}
                            w={`calc(${cardWidth} - 32px)`}
                            h="200px"
                            m="32px 16px 0px 16px"
                            pos="relative"
                            p="32px"
                            borderRadius="24px"
                            opacity="1"
                            bg="#fff"
                            _before={{
                              content: '""',
                              pos: "absolute",
                              top: "22px",
                              left: "18px",
                              right: "18px",
                              bottom: "-40px",
                              zIndex: "-2",
                              bg: "#e3e6ec",
                              opacity: "0.81",
                              filter: "blur(86.985px)",
                              borderRadius: "24px",
                            }}
                          ></Box>
                          <Box
                            className="card__menu_shadow"
                            flex={`0 0 calc(${cardWidth} - 32px)`}
                            w={`calc(${cardWidth} - 32px)`}
                            h="200px"
                            m="32px 16px 0px 16px"
                            pos="relative"
                            p="32px"
                            borderRadius="24px"
                            opacity="1"
                            bg="#fff"
                            _before={{
                              content: '""',
                              pos: "absolute",
                              top: "22px",
                              left: "18px",
                              right: "18px",
                              bottom: "-40px",
                              zIndex: "-2",
                              bg: "#e3e6ec",
                              opacity: "0.81",
                              filter: "blur(86.985px)",
                              borderRadius: "24px",
                            }}
                          ></Box>
                        </Flex>
                      </Box>

                      {/* <Box
                        className="page__col"
                        p="0 64px 44px"
                        sx={{
                          ":only-of-type": {
                            flex: "0 0 calc(100%)",
                            maxWidth: "calc(100%)",
                          },
                        }}
                        _first={{
                          flex: "0 0 calc(100% - 426px)",
                          maxWidth: "calc(100% - 426px)",
                        }}
                        _even={{
                          flexShrink: "0",
                          width: "426px",
                        }}
                      >
                        <Box
                          className="test"
                          pos="relative"
                          w="full"
                          h="330px"
                          borderRadius="24px"
                          bg="white"
                          _before={{
                            content: '""',
                            pos: "absolute",
                            top: "22px",
                            left: "18px",
                            right: "18px",
                            bottom: "-40px",
                            zIndex: "-2",
                            bg: "#e3e6ec",
                            opacity: "0.81",
                            filter: "blur(86.985px)",
                            borderRadius: "24px",
                          }}
                        ></Box>
                      </Box> */}
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
