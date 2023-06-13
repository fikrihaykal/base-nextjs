import { ComponentStyleConfig, defineStyle } from "@chakra-ui/react";

const Text: ComponentStyleConfig = {
  baseStyle: defineStyle({
    "--color": "text.dark",
    color: "var(--color)",
    _dark: {
      "--color": "text.light",
    },
  }),

  variants: {
    "sidebar-item": {
      transitionProperty: "all",

      fontWeight: "500",
    },
    subtitle: {
      transitionProperty: "all",

      fontWeight: "400",
      letterSpacing: "0px",
      _dark: {
        color: "#d9d9d9",
      },
    },
  },
};

export default Text;
