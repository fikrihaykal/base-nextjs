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

const tokens = {
  colors: {
    light: {
      //dark colors
      'its-primary': '#008fff',
      'its-secondary': '#e6eaf3',
      'its-success': '#309054',
      'its-info': '#018786',
      'its-warning': '#e39801',
      'its-danger': '#b00020',
      'its-light': '#eaeaea',
      'its-dark': '#2c3f50',
      'its-black': '#000000',
      'its-blue': '#008fff',
      'its-indigo': '#5b47fb',
      'its-purple': '#6200ee',
      'its-pink': '#e054b8',
      'its-red': '#b00020',
      'its-orange': '#ff5436',
      'its-yellow': '#e39801',
      'its-green': '#309054',
      'its-teal': '#50e3c2',
      'its-cyan': '#018786',
      'its-white': '#fff',
      'its-gray': '#bec3c7',
      'its-gray-dark': '#2c3f50',
    },
    dark: {
      //light colors
      'its-primary': '#45adff',
      'its-secondary': '#f2f4f9',
      'its-success': '#44cc77',
      'its-info': '#03dac6',
      'its-warning': '#f1c40f',
      'its-danger': '#cf6679',
      'its-light': '#f0f0f0',
      'its-dark': '#34495e',
      'its-black': '#000000',
      'its-blue': '#45adff',
      'its-indigo': '#7b6bfb',
      'its-purple': '#bb86fc',
      'its-pink': '#ff74d9',
      'its-red': '#cf6679',
      'its-orange': '#ff8975',
      'its-yellow': '#f1c40f',
      'its-green': '#44cc77',
      'its-teal': '#73ffe0',
      'its-cyan': '#03dac6',
      'its-white': '#fff',
      'its-gray': '#ebf1f1',
      'its-gray-dark': '#34495e',
    }
  }
};

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
