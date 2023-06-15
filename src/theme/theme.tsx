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
  initialColorMode: 'system',
  useSystemColorMode: false,
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
      'its-gray-dark': '#2c3f50'
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
      'its-gray-dark': '#34495e'
    }
  }
};

const semanticTokens = {
  colors: {
    'its-primary': {
      default: tokens.colors.light['its-primary'],
      _dark: tokens.colors.dark['its-primary'],
    },
    'its-secondary': {
      default: tokens.colors.light['its-secondary'],
      _dark: tokens.colors.dark['its-secondary'],
    },
    'its-success': {
      default: tokens.colors.light['its-success'],
      _dark: tokens.colors.dark['its-success'],
    },
    'its-info': {
      default: tokens.colors.light['its-info'],
      _dark: tokens.colors.dark['its-info'],
    },
    'its-warning': {
      default: tokens.colors.light['its-warning'],
      _dark: tokens.colors.dark['its-warning'],
    },
    'its-danger': {
      default: tokens.colors.light['its-danger'],
      _dark: tokens.colors.dark['its-danger'],
    },
    'its-light': {
      default: tokens.colors.light['its-light'],
      _dark: tokens.colors.dark['its-light'],
    },
    'its-dark': {
      default: tokens.colors.light['its-dark'],
      _dark: tokens.colors.dark['its-dark'],
    },
    'its-black': {
      default: tokens.colors.light['its-black'],
      _dark: tokens.colors.dark['its-black'],
    },
    'its-blue': {
      default: tokens.colors.light['its-blue'],
      _dark: tokens.colors.dark['its-blue'],
    },
    'its-indigo': {
      default: tokens.colors.light['its-indigo'],
      _dark: tokens.colors.dark['its-indigo'],
    },
    'its-purple': {
      default: tokens.colors.light['its-purple'],
      _dark: tokens.colors.dark['its-purple'],
    },
    'its-pink': {
      default: tokens.colors.light['its-pink'],
      _dark: tokens.colors.dark['its-pink'],
    },
    'its-red': {
      default: tokens.colors.light['its-red'],
      _dark: tokens.colors.dark['its-red'],
    },
    'its-orange': {
      default: tokens.colors.light['its-orange'],
      _dark: tokens.colors.dark['its-orange'],
    },
    'its-yellow': {
      default: tokens.colors.light['its-yellow'],
      _dark: tokens.colors.dark['its-yellow'],
    },
    'its-green': {
      default: tokens.colors.light['its-green'],
      _dark: tokens.colors.dark['its-green'],
    },
    'its-teal': {
      default: tokens.colors.light['its-teal'],
      _dark: tokens.colors.dark['its-teal'],
    },
    'its-cyan': {
      default: tokens.colors.light['its-cyan'],
      _dark: tokens.colors.dark['its-cyan'],
    },
    'its-white': {
      default: tokens.colors.light['its-white'],
      _dark: tokens.colors.dark['its-white'],
    },
    'its-gray': {
      default: tokens.colors.light['its-gray'],
      _dark: tokens.colors.dark['its-gray'],
    },
    'its-gray-dark': {
      default: tokens.colors.light['its-gray-dark'],
      _dark: tokens.colors.dark['its-gray-dark'],
    }
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
});

export default theme;
