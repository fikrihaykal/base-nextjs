import AppSettingContext from "@/providers/AppSettingProvider";
import { Box, BoxProps, ChakraComponent, Flex } from "@chakra-ui/react";
import { NextComponentType, NextPageContext } from "next";
import {
  Component,
  ReactNode,
  createContext,
  useState,
  useContext,
} from "react";

type DivComponent = ChakraComponent<"div", {}>;

const Wrapper = ((props: BoxProps) => {
  return (
    <Flex className="page__mainmenu" m="0 -16px" wrap="wrap" {...props}></Flex>
  );
}) as DivComponent;

export default Wrapper;
