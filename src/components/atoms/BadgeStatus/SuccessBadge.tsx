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
  
  export const SuccessBadge = ({ children, ...boxProps }: BadgeStatusInterface) => {
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
          bg={colorMode == "light" ? "green.500" : "greenDim.500"}
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
  
  export const SuccessSubtleBadge = ({ children, ...boxProps }: BadgeStatusInterface) => {
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
          bg={colorMode == "light" ? "green.50" : "greenDim.800"}
          fontSize="14px"
          fontWeight="600"
          color={colorMode == "light" ? "green.500" : "greenDim.500"}
          gap={1.5}
        >
          {children}
        </Box>
      </>
    );
  };
  
  export const SuccessOutlineBadge = ({ children, ...boxProps }: BadgeStatusInterface) => {
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
          borderColor={colorMode == "light" ? "green.500" : "greenDim.500"}
          bg="transparent"
          fontSize="14px"
          fontWeight="600"
          color={colorMode == "light" ? "green.500" : "greenDim.500"}
          gap={1.5}
        >
          {children}
        </Box>
      </>
    );
  };
  
  export const SuccessTextBadge = ({ children, ...boxProps }: BadgeStatusInterface) => {
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
          color={colorMode == "light" ? "green.500" : "greenDim.500"}
          gap={1.5}
        >
          {children}
        </Box>
      </>
    );
  };