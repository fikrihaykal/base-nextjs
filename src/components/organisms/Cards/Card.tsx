import { Box, BoxProps, ChakraComponent, useColorMode } from "@chakra-ui/react";

type DivComponent = ChakraComponent<"div", {}>;

const PlainCard = ((props: BoxProps) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      className="card__big"
      pos="relative"
      p="32px"
      borderRadius="24px"
      bg={colorMode == "light" ? "#fff" : "#222222"}
      boxShadow="rgba(17, 12, 46, 0.085) 0px 18px 160px 10px"
      {...props}
    ></Box>
  );
}) as DivComponent;

export default PlainCard;
