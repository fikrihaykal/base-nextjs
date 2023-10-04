import AppSettingContext, { AppSettingProvider } from "@/providers/AppSettingProvider";
import "@/styles/globals.css";
import theme from "@/theme/theme";
import {
  ChakraProvider,
  useColorMode
} from "@chakra-ui/react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Inter } from "next/font/google";

import Page from "@/components/atoms/Page";
import PageCenter from "@/components/atoms/PageCenter";
import PageWrapper from "@/components/atoms/PageWrapper";
import Sidebar from "@/components/organisms/Sidebar";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ReactNode, useContext, useState } from "react";
const inter = Inter({ subsets: ["latin"] });


const AppWrapper = ({ children }: { children: ReactNode }) => {
  const { isLoading } = useContext(AppSettingContext);
  const { colorMode } = useColorMode();
  // Initial loader
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

  // error routing
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
                <Sidebar />
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

