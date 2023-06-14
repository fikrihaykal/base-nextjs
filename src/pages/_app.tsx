import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Sidebar2 from "@/components/organisms/Sidebar2";
import AppSettingContext, {
  AppSettingProvider,
} from "@/providers/AppSettingProvider";
import "@/styles/globals.css";
import {
  Box,
  ChakraProvider,
  Flex,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import theme from "@/theme/theme";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { Chakra } from "@/Chakra";

const AppWrapper = ({ children }: { children: ReactNode }) => {
  const { isLoading } = useContext(AppSettingContext);
  const { colorMode } = useColorMode();

  return (
    <>
      {isLoading && colorMode !== undefined ? (
        <div id="globalLoader">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
            alt=""
          />
        </div>
      ) : null}
      {children}
    </>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [queryClient] = useState(() => new QueryClient());

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const loader = document.getElementById("globalLoader");
  //     if (loader) loader.remove();
  //   }
  // }, []);

  return (
    <>
      {/* Permanent */}
      <AppSettingProvider>
        {/* Permanent */}

        {/* {loader logic} */}

        {/* <Chakra cookies={pageProps.cookies}> */}

        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            <AppWrapper>
              <Flex flexDir="column" minH="100vh">
                <Header />
                {/* page transisi back to top */}
                <Box id="top"></Box>
                <Box
                  h="100vh"
                  pos="relative"
                  pl={{ base: "20px", md: "20px", lg: "25px", xl: "140px" }}
                  pr={{ base: "0px", md: "20px", lg: "25px", xl: "140px" }}
                >
                  <Flex flexDir="column" minH="calc(100vh - 80px)">
                    <Flex justifyContent="start" minH="100vh" pos="relative">
                      <Sidebar2 />
                      <Stack
                        w="full"
                        mt={{ base: "80px", xl: "100px" }}
                        mr={{ base: "0px", xl: "50px" }}
                        ml={{ xl: "5px" }}
                        mb={60}
                      >
                        {/* <Hydrate state={pageProps.dehydratedState}> */}
                        <AnimatePresence
                          mode="wait"
                          initial={false}
                          onExitComplete={() => {
                            document.getElementById("top")?.scrollIntoView();
                          }}
                        >
                          <Component key={router.route} {...pageProps} />
                        </AnimatePresence>
                        {/* </Hydrate> */}
                      </Stack>
                    </Flex>
                  </Flex>
                  <Footer />
                </Box>
              </Flex>
            </AppWrapper>
            {/* </Chakra> */}
          </ChakraProvider>
        </QueryClientProvider>
      </AppSettingProvider>
    </>
  );
}

export { getServerSideProps } from "@/Chakra";
