import AppSettingContext from "@/providers/AppSettingProvider";
import { Box, Flex } from "@chakra-ui/react";
import { NextComponentType, NextPageContext } from "next";
import {
  Component,
  ReactNode,
  createContext,
  useState,
  useContext,
} from "react";
import useDimensions from "react-cool-dimensions";

const PageCol = ({ children }: { children: ReactNode }) => {
  const { setCardWidth } = useContext(AppSettingContext);
  const { observe } = useDimensions({
    breakpoints: { XS: 0, SM: 320, MD: 480, LG: 640, XL: 1080 },
    updateOnBreakpointChange: true,
    onResize: ({ currentBreakpoint }) => {
      if (currentBreakpoint == "XL") {
        setCardWidth("33%");
      } else if (currentBreakpoint == "LG") {
        setCardWidth("50%");
      } else if (
        currentBreakpoint == "MD" ||
        currentBreakpoint == "SM" ||
        currentBreakpoint == "XS"
      ) {
        setCardWidth("100%");
      }
    },
  });

  return (
    <>
      <Box
        ref={observe}
        className="page__col"
        sx={{
          ":only-of-type": {
            flex: "0 0 calc(100%)",
            maxWidth: "calc(100%)",
            borderRight: "none",
            // paddingRight: { base: "0", w: "64px" },
          },
        }}
        // p={{ base: "0", x: "0px 24px 44px 64px" }}
        pt="0"
        _first={{
          flex: { base: "100%", w: "calc(100% - 426px)" },
          maxWidth: { base: "100%", w: "calc(100% - 426px)" },
          padding: {
            base: "0",
            x: "0 64px 44px 64px",
          },
        }}
        _even={{
          flexShrink: "0",
          width: { base: "100%", w: "426px" },
          padding: {
            base: "36px 0 0 0",
            x: "0 24px 44px 24px",
          },
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default PageCol;
