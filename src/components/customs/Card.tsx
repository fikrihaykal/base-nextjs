import { Box, BoxProps, ChakraComponent, useColorMode } from "@chakra-ui/react";

type DivComponent = ChakraComponent<"div", {}>;

const CleanPlainCard = ((props: BoxProps) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      className="card__big"
      pos="relative"
      p="32px"
      mb="24px"
      borderRadius="24px"
      bg={colorMode == "light" ? "#fff" : "#222222"}
      {...props}
    ></Box>
  );
}) as DivComponent;

export default CleanPlainCard;
