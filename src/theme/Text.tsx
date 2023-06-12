import { ComponentStyleConfig } from "@chakra-ui/react";

const Text: ComponentStyleConfig = {
  baseStyle: {
    _light: {
      color: "text.dark",
    },
    _dark: {  
      color: "text.light",
    }
  },
  variants: {
    "sidebar-item": {
      transitionProperty: "all",
      transitionDuration: "600ms",
      fontWeight: "500",
    },
    "subtitle": {
      transitionProperty: "all",
      transitionDuration: "600ms",
      fontWeight: "400",
      letterSpacing: "0px",
      _dark: {  
        color: "#d9d9d9",
      }
    },
  },
};

export default Text;
