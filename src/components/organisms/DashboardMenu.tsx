import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import useDimensions from "react-cool-dimensions";
import MenuWrapper from "../atoms/MenuWrapper";

const DashboardMenu = ({ cardWidth }: { cardWidth: string }) => {
  //

  return (
    <>
      <MenuWrapper>
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
            // flex={`0 0 calc(${cardWidth} - 32px)`}
            // w={`calc(${cardWidth} - 32px)`}
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
            // flex={`0 0 calc(${cardWidth} - 32px)`}
            // w={`calc(${cardWidth} - 32px)`}
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
            // flex={`0 0 calc(${cardWidth} - 32px)`}
            // w={`calc(${cardWidth} - 32px)`}
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
            // flex={`0 0 calc(${cardWidth} - 32px)`}
            // w={`calc(${cardWidth} - 32px)`}
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
            // flex={`0 0 calc(${cardWidth} - 32px)`}
            // w={`calc(${cardWidth} - 32px)`}
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
      </MenuWrapper>
    </>
  );
};

export default DashboardMenu;
