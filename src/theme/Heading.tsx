import { ComponentStyleConfig } from "@chakra-ui/react";

const Heading: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: "500",
    letterSpacing: "-0.7px",
    _light: {
      color: "text.dark",
    },
    _dark: {
      color: "text.light",
    },
  },
  variants: {
    "page-heading": {
      fontWeight: "600",
    },
  },
};

export default Heading;
