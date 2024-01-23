import AppSettingContext from "@/providers/AppSettingProvider";
import {
    Box,
    BoxProps,
    useColorMode,
  } from "@chakra-ui/react";
  import { ReactNode, useContext } from "react";
  
  interface BadgeStatusInterface extends BoxProps {
    children: ReactNode;
    boxProps?: BoxProps;
  }
  
  export const PrimaryBadge = ({ children, ...boxProps }: BadgeStatusInterface) => {
    const { colorMode } = useColorMode();
    const { colorPref } = useContext(AppSettingContext);
    return (
      <>
        <Box
          {...boxProps}
          display="inline-flex"
          alignItems="center"
          p="6px 12px"
          borderRadius="full"
          border="1px solid"
          borderColor="transparent"
          bg={colorMode == "light" ? `${colorPref}.500` : `${colorPref}Dim.500`}
          fontSize="14px"
          fontWeight="600"
          color="white"
          gap={1.5}
        >
          {children}
        </Box>
      </>
    );
  };
  
  export const PrimarySubtleBadge = ({ children, ...boxProps }: BadgeStatusInterface) => {
    const { colorMode } = useColorMode();
    const { colorPref } = useContext(AppSettingContext);
    return (
      <>
        <Box
          {...boxProps}
          display="inline-flex"
          alignItems="center"
          p="6px 12px"
          borderRadius="full"
          border="1px solid"
          borderColor="transparent"
          bg={colorMode == "light" ? `${colorPref}.50` : `${colorPref}Dim.800`}
          fontSize="14px"
          fontWeight="600"
          color={colorMode == "light" ? `${colorPref}.500` : `${colorPref}Dim.500`}
          gap={1.5}
        >
          {children}
        </Box>
      </>
    );
  };
  
  export const PrimaryOutlineBadge = ({ children, ...boxProps }: BadgeStatusInterface) => {
    const { colorMode } = useColorMode();
    const { colorPref } = useContext(AppSettingContext);
    return (
      <>
        <Box
          {...boxProps}
          display="inline-flex"
          alignItems="center"
          p="6px 12px"
          borderRadius="full"
          border="1px solid"
          borderColor={colorMode == "light" ? `${colorPref}.500` : `${colorPref}Dim.500`}
          bg="transparent"
          fontSize="14px"
          fontWeight="600"
          color={colorMode == "light" ? `${colorPref}.500` : `${colorPref}Dim.500`}
          gap={1.5}
        >
          {children}
        </Box>
      </>
    );
  };
  
  export const PrimaryTextBadge = ({ children, ...boxProps }: BadgeStatusInterface) => {
    const { colorMode } = useColorMode();
    const { colorPref } = useContext(AppSettingContext);
    return (
      <>
        <Box
          {...boxProps}
          display="inline-flex"
          alignItems="center"
          fontSize="14px"
          fontWeight="600"
          color={colorMode == "light" ? `${colorPref}.500` : `${colorPref}Dim.500`}
          gap={1.5}
        >
          {children}
        </Box>
      </>
    );
  };