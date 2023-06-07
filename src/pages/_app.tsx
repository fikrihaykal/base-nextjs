import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, Flex, Heading, Stack } from "@chakra-ui/react";
import { AppSettingProvider } from "@/providers/AppSettingProvider";
import theme from "./theme";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Sidebar2 from "@/components/organisms/Sidebar2";
// import AppTheme from './theme'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageKey = router.asPath;
  return (
    <>
      <AppSettingProvider>
        <ChakraProvider theme={theme}>
          <Flex flexDir="column" minH="100vh">
            <Header />
            <Box
              h="100vh"
              pos="relative"
              px={{ base: "20px", md: "20px", lg: "25px", xl: "150px" }}
            >
              <Flex flexDir="column" minH="calc(100vh - 80px)">
                <Flex justifyContent="start" minH="100vh" pos="relative">
                  <Sidebar2 />
                  <Stack
                    as={motion.div}
                    w="full"
                    mt={{ base: "80px", xl: "100px" }}
                    mr={{ xl: "30px" }}
                    ml={{ xl: "5px" }}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                   
                        <Component key={router.route} {...pageProps} />
                   
                    </AnimatePresence>
                  </Stack>
                </Flex>
              </Flex>
              <Footer />
            </Box>
          </Flex>
        </ChakraProvider>
      </AppSettingProvider>
    </>
  );
}
