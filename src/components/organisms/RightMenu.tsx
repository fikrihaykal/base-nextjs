import { Box } from "@chakra-ui/react";

const RightMenu = () => {
  return (
    <>
      <Box
        className="page__col"
        p="0 64px 0 44px"
        sx={{
          ":only-of-type": {
            flex: "0 0 calc(100%)",
            maxWidth: "calc(100%)",
          },
        }}
        _first={{
          flex: "0 0 calc(100% - 426px)",
          maxWidth: "calc(100% - 426px)",
        }}
        _even={{
          flexShrink: "0",
          width: "426px",
        }}
      >
        <Box
          className="test"
          pos="relative"
          w="full"
          h="330px"
          borderRadius="24px"
          bg="white"
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
        ></Box>
      </Box>
    </>
  );
};

export default RightMenu;
