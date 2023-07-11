import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import useDimensions from "react-cool-dimensions";

const DashboardMenu = () => {
  const [cardWidth, setCardWidth] = useState("100%");
  const { observe, currentBreakpoint, width, height, entry } = useDimensions({
    breakpoints: { XS: 0, SM: 320, MD: 480, LG: 640, XL: 1080 },
    updateOnBreakpointChange: true,
    onResize: ({
      observe,
      unobserve,
      width,
      height,
      entry,
      currentBreakpoint,
    }) => {
      if (currentBreakpoint == "XL") {
        setCardWidth("33%");
      } else if (currentBreakpoint == "LG") {
        setCardWidth("50%");
      } else if (currentBreakpoint == "MD") {
        setCardWidth("100%");
      }
    },
  });

  return (
    <>
      <Box
        ref={observe}
        className="page__col"
        p="0 0 0 64px"
        sx={{
          ":only-of-type": {
            flex: "0 0 calc(100%)",
            maxWidth: "calc(100%)",
            borderRight: "none",
          },
        }}
        _first={{
          flex: "0 0 calc(100% - 426px)",
          maxWidth: "calc(100% - 426px)",
        }}
        // borderRight="1px solid #e4e4e4"
        _even={{
          flexShrink: "0",
          width: "426px",
        }}
      >
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
        <Flex className="page__mainmenu" m="0 -16px" wrap="wrap" pt="24px">
          <Box
            className="card__menu_shadow"
            flex={`0 0 calc(${cardWidth} - 32px)`}
            w={`calc(${cardWidth} - 32px)`}
            h="200px"
            m="32px 16px 0px 16px"
            pos="relative"
            p="32px"
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
          <Box
            className="card__menu_shadow"
            flex={`0 0 calc(${cardWidth} - 32px)`}
            w={`calc(${cardWidth} - 32px)`}
            h="200px"
            m="32px 16px 0px 16px"
            pos="relative"
            p="32px"
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
          <Box
            className="card__menu_shadow"
            flex={`0 0 calc(${cardWidth} - 32px)`}
            w={`calc(${cardWidth} - 32px)`}
            h="200px"
            m="32px 16px 0px 16px"
            pos="relative"
            p="32px"
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
          <Box
            className="card__menu_shadow"
            flex={`0 0 calc(${cardWidth} - 32px)`}
            w={`calc(${cardWidth} - 32px)`}
            h="200px"
            m="32px 16px 0px 16px"
            pos="relative"
            p="32px"
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
          <Box
            className="card__menu_shadow"
            flex={`0 0 calc(${cardWidth} - 32px)`}
            w={`calc(${cardWidth} - 32px)`}
            h="200px"
            m="32px 16px 0px 16px"
            pos="relative"
            p="32px"
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
          <Box
            className="card__menu_shadow"
            flex={`0 0 calc(${cardWidth} - 32px)`}
            w={`calc(${cardWidth} - 32px)`}
            h="200px"
            m="32px 16px 0px 16px"
            pos="relative"
            p="32px"
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
        </Flex>
      </Box>
    </>
  );
};

export default DashboardMenu;
