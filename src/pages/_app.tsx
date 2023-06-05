import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AppSettingProvider } from "@/providers/AppSettingProvider";
import theme from "./theme";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
// import AppTheme from './theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppSettingProvider>
        <ChakraProvider theme={theme}>
          <AnimatePresence
            mode="wait"
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} />
          </AnimatePresence>
        </ChakraProvider>
      </AppSettingProvider>
    </>
  );
}
