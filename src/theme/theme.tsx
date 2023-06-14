import {
  ComponentStyleConfig,
  ThemeConfig,
  extendTheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { cardTheme } from "./Card";
import Link from "./Link";
import Text from "./Text";
import Heading from "./Heading";
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'inter'`,
    body: `'inter'`,
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "light" ? "white" : "#141414",
      },
    }),
  },
  components: {
    Card: cardTheme,
    Link,
    Text,
    Heading,
  },
});

export default theme;
