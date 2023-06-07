import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Sidebar2 from "@/components/organisms/Sidebar2";
import { AppSettingProvider } from "@/providers/AppSettingProvider";
import "@/styles/globals.css";
import { Box, ChakraProvider, Flex, Stack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import theme from "./theme";

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
                    <AnimatePresence
                      mode="wait"
                      initial={false}
                      onExitComplete={() => {}}
                    >
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
