import { ComponentStyleConfig, defineStyle } from "@chakra-ui/react";
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['500'] })

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
    tabletitle: {
      fontWeight: "600",
      color: "#1e1e1e",
      _dark: {
        color: "#ffffff",
      },
      _hover: {
        color: "#008fff",
        _dark: {
          color: "#0071ca",
        }
      }
    },
    tabletext: {
      fontWeight: "500",
      color: "#1e1e1e",
      _dark: {
        color: "#ffffff",
      },
    },
    toptitle: {
      fontFamily: poppins.style.fontFamily,
    },
  },
};

export default Text;
