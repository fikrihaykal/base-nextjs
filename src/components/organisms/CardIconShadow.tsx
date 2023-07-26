import AppSettingContext from "@/providers/AppSettingProvider";
import { Box, useColorMode } from "@chakra-ui/react";
import { useContext } from "react";

const CardIconShadow = () => {
  const { cardWidth } = useContext(AppSettingContext);
  const { colorMode } = useColorMode();
  
  return (
    <>
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
      bg={colorMode == "light" ? "#fff" : "#222222"}
      _before={{
        content: '""',
        pos: "absolute",
        top: "0px",
        left: "0px",
        right: "0px",
        bottom: "0px",
        width: "100%",
        height: "100%",
        zIndex: "-2",
        // bg: colorMode == "light" ? "#e3e6ec" : "#000",
        // opacity: colorMode == "light" ? "0.81" : "0.51",
        boxShadow: "rgba(17, 12, 46, 0.05) 0px 10px 160px 10px",
        // filter: "blur(50px)",
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
    </>
  );
};

export default CardIconShadow;
