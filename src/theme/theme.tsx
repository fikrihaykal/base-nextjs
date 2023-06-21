import {
  ComponentStyleConfig,
  ThemeConfig,
  extendTheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { cardTheme } from "./Card";
import { buttonTheme } from "./Button";
import Link from "./Link";
import Text from "./Text";
import Heading from "./Heading";
import Color from "./Color";
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
  initialColorMode: 'system',
  useSystemColorMode: false,
}

const semanticTokens = {
  colors: {
    'its-blue': {
      default: "itsblue.500",
      _dark: "itsblue.400"
    },
    'its-purple': {
      default: "itspurple.500",
      _dark: "itspurple.300"
    },
    'its-pink': {
      default: "itspink.400",
      _dark: "itspink.300"
    },
    'its-red': {
      default: "itsred.600",
      _dark: "itsred.300"
    },
    'its-orange': {
      default: "itsorange.500",
      _dark: "itsorange.400"
    },
    'its-yellow': {
      default: "itsyellow.500",
      _dark: "itsyellow.300"
    },
    'its-green': {
      default: "itsgreen.500",
      _dark: "itsgreen.300"
    },
    'its-teal': {
      default: "itsteal.400",
      _dark: "itsteal.200"
    },
    'its-cyan': {
      default: "itscyan.600",
      _dark: "itscyan.500"
    },
    'its-gray': {
      default: "itsgray.300",
      _dark: "itsgray.200"
    },
  }
};

const theme = extendTheme({
  semanticTokens,
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
    Button: buttonTheme,
  },
  colors: Color
});

export default theme;
