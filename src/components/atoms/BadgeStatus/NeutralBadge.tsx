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
  
  export const NeutralBadge = ({ children, ...boxProps }: BadgeStatusInterface) => {
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
          bg={colorMode == "light" ? "gray.500" : "grayDim.500"}
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
  
  export const NeutralSubtleBadge = ({ children, ...boxProps }: BadgeStatusInterface) => {
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
          bg={colorMode == "light" ? "gray.50" : "grayDim.800"}
          fontSize="14px"
          fontWeight="600"
          color={colorMode == "light" ? "gray.500" : "grayDim.500"}
          gap={1.5}
        >
          {children}
        </Box>
      </>
    );
  };
  
  export const NeutralOutlineBadge = ({ children, ...boxProps }: BadgeStatusInterface) => {
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
          borderColor={colorMode == "light" ? "gray.500" : "grayDim.500"}
          bg="transparent"
          fontSize="14px"
          fontWeight="600"
          color={colorMode == "light" ? "gray.500" : "grayDim.500"}
          gap={1.5}
        >
          {children}
        </Box>
      </>
    );
  };
  
  export const NeutralTextBadge = ({ children, ...boxProps }: BadgeStatusInterface) => {
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
          color={colorMode == "light" ? "gray.500" : "grayDim.500"}
          gap={1.5}
        >
          {children}
        </Box>
      </>
    );
  };