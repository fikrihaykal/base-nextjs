import AppSettingContext from "@/providers/AppSettingProvider";
import { Box, useColorMode } from "@chakra-ui/react";
import { useContext } from "react";

const CardIconShadow = () => {
  const { cardWidth } = useContext(AppSettingContext);
  const { colorMode } = useColorMode();
  
  return (
    <Box
      className="card__menu_shadow"
      flex={`0 0 calc(${cardWidth} - 32px)`}
      w={`calc(${cardWidth} - 32px)`}
      h="200px"
      m="32px 16px 0px 16px"
      pos="relative"
      p="24px"
      borderRadius="24px"
      opacity="1"
      bg={colorMode == "light" ? "#fff" : "#242424"}
      _before={{
        content: '""',
        pos: "absolute",
        top: "22px",
        left: "18px",
        right: "18px",
        bottom: "-40px",
        zIndex: "-2",
        bg: colorMode == "light" ? "#e3e6ec" : "#000",
        opacity: colorMode == "light" ? "0.81" : "0.51",
        filter: "blur(86.985px)",
        borderRadius: "24px",
      }}
    >
      <Box
        className="card__icon"
        bg={colorMode == "light" ? "#aadaff" : "#444444"}
        w="48px"
        h="48px"
        borderRadius="12px"
      ></Box>
    </Box>
  );
};

export default CardIconShadow;
