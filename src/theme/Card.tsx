import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    baseStyle: {},

    _light: {
      bg: "#ffffff",
    },
    _dark: {
      bg: "#212121",
    },
  },
  header: {
    paddingBottom: "2px",
  },
  body: {
    paddingTop: "2px",
  },
  footer: {
    paddingTop: "4px",
  },
});

// export the component theme
export const cardTheme = defineMultiStyleConfig({
  baseStyle,
});
