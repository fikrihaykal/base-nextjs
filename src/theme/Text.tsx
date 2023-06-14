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
      fontWeight: "500",
    },
    subtitle: {
      fontWeight: "400",
      letterSpacing: "-0.2px",
      _dark: {
        color: "#d9d9d9",
      },
    },
  },
};

export default Text;
