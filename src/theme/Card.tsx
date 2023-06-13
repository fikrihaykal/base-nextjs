import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  transitionProperty: "all",
  
  // define the part you're going to style
  container: {
    baseStyle: {
      transitionProperty: "all",
      
    },
    transitionProperty: "all",
    
    _light: {
      transitionProperty: "all",
      
      bg: "#ffffff",
    },
    _dark: {
      transitionProperty: "all",
      
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
