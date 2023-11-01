import AppSettingContext from "@/providers/AppSettingProvider";
import { Box, BoxProps, ChakraComponent, useColorMode } from "@chakra-ui/react";
import { useContext } from "react";

type DivComponent = ChakraComponent<"div", {}>;

const WidgetCard = ((props: BoxProps) => {
  const { cardWidthWidget } = useContext(AppSettingContext);
  const { colorMode } = useColorMode();
  return (
    <Box
      className="card__widget"
      pos="relative"
      p="24px"
      flex={`0 0 calc(${cardWidthWidget} - 32px)`}
      w={`calc(${cardWidthWidget} - 32px)`}
      minH="200px"
      m={{ base: "32px 16px 0px 16px", w: "32px 16px 0px 16px" }}
      _first={{
        marginTop: { base: "32px", w: "0px" },
      }}
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

export default WidgetCard;
