import { AppSettingProvider } from "@/providers/AppSettingProvider";
import "@/styles/globals.css";
import theme from "@/theme/theme";
import {
  ChakraProvider,
} from "@chakra-ui/react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import {  useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "@/providers/AuthProvider";
import { AuthSSO } from "@/utils/auth/AuthSSO";

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
      <AuthProvider>
        <AppSettingProvider>
          <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
              <AuthSSO>
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
              </AuthSSO>
              {/* <AppWrapper>
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
                    </Box>
                  </Box>
                </Flex>
              </AppWrapper> */}
            </ChakraProvider>
          </QueryClientProvider>
        </AppSettingProvider>
      </AuthProvider>
    </>
  );
}

export { getServerSideProps } from "@/Chakra";
