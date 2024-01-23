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
  
  export const DangerBadge = ({ children, ...boxProps }: BadgeStatusInterface) => {
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
          bg={colorMode == "light" ? "red.500" : "redDim.500"}
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
  
  export const DangerSubtleBadge = ({ children, ...boxProps }: BadgeStatusInterface) => {
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
          bg={colorMode == "light" ? "red.50" : "redDim.800"}
          fontSize="14px"
          fontWeight="600"
          color={colorMode == "light" ? "red.500" : "redDim.500"}
          gap={1.5}
        >
          {children}
        </Box>
      </>
    );
  };
  
  export const DangerOutlineBadge = ({ children, ...boxProps }: BadgeStatusInterface) => {
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
          borderColor={colorMode == "light" ? "red.500" : "redDim.500"}
          bg="transparent"
          fontSize="14px"
          fontWeight="600"
          color={colorMode == "light" ? "red.500" : "redDim.500"}
          gap={1.5}
        >
          {children}
        </Box>
      </>
    );
  };
  
  export const DangerTextBadge = ({ children, ...boxProps }: BadgeStatusInterface) => {
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
          color={colorMode == "light" ? "red.500" : "redDim.500"}
          gap={1.5}
        >
          {children}
        </Box>
      </>
    );
  };