import {
  ThemeConfig,
  extendTheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { cardTheme } from "./Card";
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
    itsprimary: "itsprimary.500",
    itssecondary: "itssecondary.500",
    itssuccess: "itssuccess.500",
    itsinfo: "itsinfo.500",
    itswarning: "itswarning.500",
    itsdanger: "itsdanger.500",
    itsblue: "itsblue.500",
    itspurple: "itspurple.500",
    itspink: "itspink.500",
    itsred: "itsred.500",
    itsorange: "itsorange.500",
    itsyellow: "itsyellow.500",
    itsgreen: "itsgreen.500",
    itsteal: "itsteal.500",
    itscyan: "itscyan.500",
    itsgray: "itsgray.500",
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
  },
  colors: Color, 
});

export default theme;
