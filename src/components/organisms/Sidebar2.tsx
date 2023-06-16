import AppSettingContext from "@/providers/AppSettingProvider";
import { Box, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import { useContext } from "react";
import MainMenu2 from "./MainMenu2";
import { MotionBox, MotionButton } from "../motion/Motion";

const Sidebar = () => {
  const { isNavbarOpen, navbarToggler } = useContext(AppSettingContext);
  const { colorMode } = useColorMode();

  return (
    <>
      <Box display={{ base: "none", lg: "block" }}>
        <MotionBox
          display="flex"
          pos="sticky"
          justifyContent="start"
          top="95px"
          zIndex="0"
          h="calc(100vh - 120px)"
          borderRadius="full"
          backgroundColor="transparent"
          flexDirection="column"
          width="260px"
          animate={{ width: isNavbarOpen ? 88 : 260 }}
          // @ts-ignore
          transition={{ ease: [0.7, 0.193, 0.25, 0.958], duration: 0.2 }}
        >
          <Flex
            w={isNavbarOpen ? 58 : 220}
            h="60px"
            minH="60px"
            borderRadius="10px"
            pos="relative"
            display="flex"
            justifyContent="between"
            alignItems="center"
            gap="10px"
            marginLeft="10px"
            paddingLeft="5px"
            transition="all 200ms ease-out"
          >
            <Box minW="42px" w="42px" h="42px" minH="42px" ml={{ lg: "4px" }}>
              <Image
                src="/images/app/profile-default.jpg"
                borderRadius="full"
              />
            </Box>

            <Box
              mx="3px"
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              <Text
                lineHeight="1.1"
                variant="subtitle"
                fontWeight="medium"
                fontSize="14px"
              >
                Administrator
              </Text>
              <Text lineHeight="1.2" variant="sidebar-item" fontSize="16px">
                Sulthon Nashir
              </Text>
            </Box>
          </Flex>

          <Box
            display={{ base: "none", lg: "block" }}
            w="full"
            pos="relative"
            sx={{
              overflowX: "hidden",
              overflowY: "auto",
              scrollbarGutter: isNavbarOpen ? "unset" : "stable",
              "::-webkit-scrollbar": {
                backgroundColor: "transparent",
                width: "20px",
              },
              "::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
              },
              "::-webkit-scrollbar-thumb": {
                borderRadius: "20px",
                border: "6px solid transparent",
                backgroundColor: colorMode == "light" ? "#dadada" : "#313131",
                backgroundClip: "content-box",
              },
              "::-webkit-scrollbar-thumb:hover": {
                backgroundColor: colorMode == "light" ? "#b3b3b3" : "#393939",
              },
            }}
          >
            <MainMenu2 />
          </Box>
          <MotionButton
            display="flex"
            borderRadius="full"
            top="19px"
            pos="absolute"
            right="24px"
            onClick={navbarToggler}
            whileTap={{
              scale: 0.8,
              transition: { duration: 0.3 },
            }}
            animate={{ right: isNavbarOpen ? "16px" : "24px" }}
            // @ts-ignore
            transition={{ ease: [0.7, 0.193, 0.25, 0.958], duration: 0.2 }}
          >
            <MotionBox
              animate={{
                rotate: isNavbarOpen ? 180 : 0,
              }}
              // @ts-ignore
              transition={{
                ease: "easeOut",
                duration: 0.2,
              }}
            >
              <Image
                src="/images/icon/chevback.png"
                borderRadius="full"
                w="23px"
              ></Image>
            </MotionBox>
          </MotionButton>
        </MotionBox>
      </Box>
    </>
  );
};

export default Sidebar;
