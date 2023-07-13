import { Box, useColorMode } from "@chakra-ui/react";

const PageBanner = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box
        className="page__banner"
        pos="relative"
        w="full"
        h="320px"
        borderRadius="1.6rem"
        bg={colorMode == "light" ? "#008fff" : "#0071ca"}
        _before={{
          content: '""',
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "95%",
          h: "100%",
          zIndex: "-1",
          borderRadius: "24px",
          background: colorMode == "light" ? "#008fff30" : "#003967",
        }}
      >
        {/* <Box
          className="page__banner second"
          pos="absolute"
          top="2px"
          left="16px"
          w="95%"
          zIndex="9"
          h="330px"
          borderRadius="24px"
          bg="#008fff33"
        ></Box> */}
      </Box>
    </>
  );
};

export default PageBanner;
