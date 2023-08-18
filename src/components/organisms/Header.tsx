import AppSettingContext from "@/providers/AppSettingProvider";
import {
  Box,
  Button,
  Collapse,
  Flex,
  Image,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useContext, useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { MotionBox } from "../motion/Motion";
import MainMenu from "./MainMenu";

const Header = () => {
  const { isNavbarOpen, navbarToggler } = useContext(AppSettingContext);
  const { colorMode, toggleColorMode } = useColorMode();

  const logoMyItsLight = "/images/app/logo-myits-blue.svg";
  const logoMyItsDark = "/images/app/logo-myits-white.svg";

  return (
    <>
      <Box
        as="header"
        backgroundColor={
          colorMode == "light" ? "rgba(255,255,255,0.6)" : "rgba(29,29,29,0.6)"
        }
        pos="fixed"
        justifyContent="center"
        alignItems="center"
        w="full"
        maxH="100vh"
        zIndex="9000"
        px={{ base: "20px", md: "20px", lg: "25px", xl: "165px" }}
        boxShadow="rgba(17, 12, 46, 0.04) 0px 1px 16px 0px;"
        backdropFilter={"blur(30px)"}
      >
        <Flex
          justifyContent="space-between"
          w="full"
          // maxW="1540px"
          py="15px"
          pr={{ base: "20px", md: "20px", lg: "25px", xl: "50px" }}
        >
          <Flex>
            <Link
              as={NextLink}
              href="/"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src={colorMode === "light" ? logoMyItsLight : logoMyItsDark}
                w="55px"
                mt="5px"
                alt="logo its"
              />
              <Text ml="2" fontSize="20px">
                {process.env.NEXT_PUBLIC_APP_NAME}
              </Text>
            </Link>
          </Flex>
          <Flex display={{ lg: "none" }}>
            <Button onClick={navbarToggler}>
              {isNavbarOpen ? <IoChevronUp /> : <IoChevronDown />}
            </Button>
          </Flex>
          <MotionBox
            layoutRoot
            display="flex"
            alignItems="center"
            borderRadius="10px"
            bg={colorMode == "light" ? "#f5f5f5" : "#313131"}
            w="106px"
            pl="5px"
            pr="5px"
            justifyContent={colorMode == "light" ? "start" : "end"}
          >
            <MotionBox
              layout
              display="block"
              pt="3px"
              pb="5px"
              // @ts-ignore
              transition={{
                duration: 0.187,
                ease: "easeOut",
                delay: 0.1,
              }}
              onClick={toggleColorMode}
            >
              <Button
                size="xs"
                width={50}
                _hover={{
                  boxShadow:
                    colorMode == "light"
                      ? "rgba(17, 12, 46, 0.09) 0px 0px 7px 0px;"
                      : "none",
                }}
                bg={colorMode == "light" ? "white" : "#444444"}
                boxShadow={
                  colorMode == "light"
                    ? "rgba(17, 12, 46, 0.05) 0px 0px 4px 0px;"
                    : "none"
                }
                _active={{
                  backgroundColor: colorMode == "light" ? "#f5f5f5" : "#595959",
                }}
              >
                {colorMode == "light" ? "Light" : "Dark"}
              </Button>
            </MotionBox>
          </MotionBox>
        </Flex>
        <Collapse dir="up" in={isNavbarOpen}>
          <Box display={{ lg: "none" }} w="full" borderBottom="1px">
            <MainMenu />
          </Box>
        </Collapse>
      </Box>
    </>
  );
};

export default Header;
