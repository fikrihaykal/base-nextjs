import { ComponentStyleConfig } from "@chakra-ui/react";

const Heading: ComponentStyleConfig = {
  baseStyle: {
    transitionProperty: "all",
    transitionDuration: "600ms",
    fontWeight: "500",
    letterSpacing: "-0.7px",
    _light: {
      transitionProperty: "all",
      transitionDuration: "600ms",
      color: "text.dark",
    },
    _dark: {
      transitionProperty: "all",
      transitionDuration: "600ms",
      color: "text.light",
    },
  },
  variants: {
    "page-heading": {
      transitionProperty: "all",
      transitionDuration: "600ms",
      fontWeight: "600",
    },
  },
};

export default Heading;
