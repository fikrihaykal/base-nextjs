import {
  ThemeConfig,
  extendTheme,
} from "@chakra-ui/react";
import { cardTheme } from "./Card";
import Link from "./Link";
import Text from "./Text";
import Heading from "./Heading";
import { Inter } from 'next/font/google'
import ButtonStyles from "./Button";
import Color from "./Color";


const inter = Inter({ subsets: ['latin'] })

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const breakpoints = {
  's': "474px",
  'a': "639px",
  'm': "767px",
  't': "1023px",
  'd': "1179px",
  'x': "1339px",
  'w': "1419px",
};

const semanticTokens = {
  colors: {
    purple: "purple.500",
    orange: "orange.500",
    red: "red.500",
    gray: "gray.500",
    teal: "teal.500",
    yellow: "yellow.500",
    pink: "pink.500",
    blue: "blue.500",
    green: "green.500",
    cyan: "cyan.500",
  }
};

const theme = extendTheme({
  breakpoints,
  semanticTokens,
  config,
  fonts: {
    heading: inter.style.fontFamily,
    body: inter.style.fontFamily,
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
    ButtonStyles,
  },
  colors: Color, 
});

export default theme;
