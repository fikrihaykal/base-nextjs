import {
    Box,
    BoxProps,
    useColorMode,
  } from "@chakra-ui/react";
  import { ReactNode } from "react";
  
  interface BadgeStatusInterface extends BoxProps {
    children: ReactNode;
    boxProps?: BoxProps;
  }
  
  export const BlueBadge = ({ children, ...boxProps }: BadgeStatusInterface) => {
    const { colorMode } = useColorMode();
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
          bg={colorMode == "light" ? "blue.500" : "blueDim.500"}
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
  
  export const BlueSubtleBadge = ({ children, ...boxProps }: BadgeStatusInterface) => {
    const { colorMode } = useColorMode();
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
          bg={colorMode == "light" ? "blue.50" : "blue.800"}
          fontSize="14px"
          fontWeight="600"
          color={colorMode == "light" ? "blue.500" : "blueDim.500"}
          gap={1.5}
        >
          {children}
        </Box>
      </>
    );
  };
  
  export const BlueOutlineBadge = ({ children, ...boxProps }: BadgeStatusInterface) => {
    const { colorMode } = useColorMode();
    return (
      <>
        <Box
          {...boxProps}
          display="inline-flex"
          alignItems="center"
          p="6px 12px"
          borderRadius="full"
          border="1px solid"
          borderColor={colorMode == "light" ? "blue.500" : "blueDim.500"}
          bg="transparent"
          fontSize="14px"
          fontWeight="600"
          color={colorMode == "light" ? "blue.500" : "blueDim.500"}
          gap={1.5}
        >
          {children}
        </Box>
      </>
    );
  };
  
  export const BlueTextBadge = ({ children, ...boxProps }: BadgeStatusInterface) => {
    const { colorMode } = useColorMode();
    return (
      <>
        <Box
          {...boxProps}
          display="inline-flex"
          alignItems="center"
          fontSize="14px"
          fontWeight="600"
          color={colorMode == "light" ? "blue.500" : "blueDim.500"}
          gap={1.5}
        >
          {children}
        </Box>
      </>
    );
  };