import { Box, BoxProps, ChakraComponent, useColorMode } from "@chakra-ui/react";

type DivComponent = ChakraComponent<"div", {}>;

const PlainCard = ((props: BoxProps) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      className="card__big"
      pos="relative"
      p="32px"
      mb="24px"
      borderRadius="24px"
      bg={colorMode == "light" ? "#fff" : "#222222"}
      _before={{
        content: '""',
        pos: "absolute",
        top: "43px",
        left: "32px",
        right: "32px",
        bottom: "-43px",
        zIndex: "-1",
        background: colorMode == "light" ? "#e3e6ec" : "#000",
        opacity: colorMode == "light" ? "0.91" : "0.51",
        filter: "blur(86.985px)",
        borderRadius: "24px",
      }}
      {...props}
    ></Box>
  );
}) as DivComponent;

export default PlainCard;
