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

const PageCol = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Box className="page__row" display={{ base: "block", w: "flex" }}>
        {children}
      </Box>
    </>
  );
};

export default PageCol;
