import { ComponentStyleConfig } from "@chakra-ui/react";

const Heading: ComponentStyleConfig = {
  baseStyle: {
    transitionProperty: "all",
    
    fontWeight: "500",
    letterSpacing: "-0.7px",
    _light: {
      transitionProperty: "all",
      
      color: "text.dark",
    },
    _dark: {
      transitionProperty: "all",
      
      color: "text.light",
    },
  },
  variants: {
    "page-heading": {
      transitionProperty: "all",
      
      fontWeight: "600",
    },
  },
};

export default Heading;
