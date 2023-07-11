import { Box } from "@chakra-ui/react";

const PageBanner = () => {
  return (
    <>
      <Box
        className="page__banner"
        pos="relative"
        w="full"
        h="320px"
        borderRadius="1.6rem"
        zIndex="10"
        bg="#008fff"
      >
        <Box
          className="page__banner second"
          pos="absolute"
          top="2px"
          left="16px"
          w="95%"
          zIndex="9"
          h="330px"
          borderRadius="24px"
          bg="#008fff33"
        ></Box>
      </Box>
    </>
  );
};

export default PageBanner;
