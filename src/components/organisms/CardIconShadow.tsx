import AppSettingContext from "@/providers/AppSettingProvider";
import { Box } from "@chakra-ui/react";
import { useContext } from "react";

const CardIconShadow = () => {
  const { cardWidth } = useContext(AppSettingContext);
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
      bg="#fff"
      _before={{
        content: '""',
        pos: "absolute",
        top: "22px",
        left: "18px",
        right: "18px",
        bottom: "-40px",
        zIndex: "-2",
        bg: "#e3e6ec",
        opacity: "0.81",
        filter: "blur(86.985px)",
        borderRadius: "24px",
      }}
    >
      <Box
        className="card__icon"
        bg="#aadaff"
        w="48px"
        h="48px"
        borderRadius="12px"
      ></Box>
    </Box>
  );
};

export default CardIconShadow;
