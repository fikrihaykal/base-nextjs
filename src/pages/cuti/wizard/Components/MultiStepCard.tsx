import { Box, BoxProps, Flex, Text, useColorMode } from "@chakra-ui/react";

import "react-datepicker/dist/react-datepicker.css";

interface MultistepCardInterface extends BoxProps {
  id: string;
  title: string;
  subtitle: string;
  choice?: string;
  boxProps?: BoxProps;
  disabled?: boolean;
}

export const MultistepCard = ({
  id,
  title,
  subtitle,
  choice,
  disabled,
  ...boxProps
}: MultistepCardInterface) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        w="100%"
        id={id}
        flex="1"
        borderRadius="16px"
        bg={
          colorMode == "light"
            ? disabled
              ? "#f4f4f4"
              : "white"
            : disabled
            ? "#333333"
            : "#222222"
        }
        boxShadow={
          disabled
            ? "none"
            : choice == id
            ? "inset 0 0 0 2.6px #008ffa"
            : colorMode == "light"
            ? "inset 0 0 0 1.6px #e4e4e4"
            : "inset 0 0 0 1.6px #333333"
        }
        _hover={{
          boxShadow: disabled
            ? "none"
            : choice == id
            ? colorMode == "light"
              ? "inset 0 0 0 2.6px #008ffa"
              : "inset 0 0 0 2.6px #0071ca"
            : colorMode == "light"
            ? "inset 0 0 0 1.6px #008ffa"
            : "inset 0 0 0 1.6px #0071ca",
        }}
        transition="all .18s"
        cursor={disabled ? "not-allowed" : "pointer"}
        p="24px"
        pointerEvents={disabled ? "none" : "all"}
        {...boxProps}
        onClick={disabled ? null : boxProps.onClick}
      >
        <Flex alignItems="center" h="fit-content">
          <Box>
            <Text
              fontWeight="500"
              fontSize="16px"
              mb="2px"
              color={disabled ? "#b4b4b4" : "unset"}
            >
              {title}
            </Text>
            <Text
              fontWeight="400"
              fontSize="14px"
              color={!disabled ? "#808080" : "#b4b4b4"}
              lineHeight="1.35"
            >
              {subtitle}
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
