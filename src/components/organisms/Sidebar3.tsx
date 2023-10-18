import { menuItem, menuItemInsights } from "@/data/dummy";
import AppSettingContext from "@/providers/AppSettingProvider";
import {
  Box,
  Button,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CloseIconMade, MyITSLogo } from "../atoms/IconsMade";
import SidebarItem from "../molecules/SidebarItem";

const Sidebar = () => {
  const { isNavbarOpen, navbarToggler } = useContext(AppSettingContext);

  const { colorMode } = useColorMode();
  const stylelogo = useColorModeValue("#013880", "white");

  return (
    <>
      <Flex
        className="sidebar"
        w={{ base: "300px", m: "96px", t: "96px", d: "256px" }}
        minW={{ base: "300x", m: "96px", t: "96px", d: "256px" }}
        pos="fixed"
        flexShrink="0"
        zIndex="20"
        display="flex"
        h="100vh"
        padding={{ base: "116px 0 0px", m: "140px 0 0px" }}
        bg={colorMode == "light" ? "#fff" : "#141414"}
        borderRight={
          colorMode == "light"
            ? "1px solid #e4e4e4"
            : "1px solid rgba(228, 228, 228, 0.1)"
        }
        transform={{
          base: isNavbarOpen ? "translateX(0%)" : "translateX(-100%)",
          m: "unset",
        }}
        transition="transform .25s, width .25s"
      >
        <Box
          className="sidebar__top"
          pos="absolute"
          top="0"
          left="0"
          right="0"
          display="flex"
          justifyContent="center"
          alignContent="center"
          h={{ base: "96px", m: "140px" }}
          borderBottom={{
            base:
              colorMode == "light"
                ? "1px solid #e4e4e4"
                : "1px solid rgba(228, 228, 228, 0.1)",
            m: "unset",
          }}
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            bg="none"
            mt="5px"
            visibility={{ base: "visible", m: "hidden", d: "visible" }}
          >
            <Button
              className="sidebar__close"
              display={{ base: "inline-block", m: "none" }}
              top="1px"
              mr="0px"
              pos="relative"
              fontSize="0"
              ml="-60px"
              onClick={navbarToggler}
              bg="none"
              _hover={{
                background: "none",
              }}
            >
              <CloseIconMade
                fontSize="16px"
                color={colorMode == "light" ? "#141414" : "#fff"}
              ></CloseIconMade>
            </Button>
          </Flex>

          <Flex
            justifyContent="center"
            alignItems="center"
            bg="none"
            mt="5px"
            visibility={{ base: "visible", m: "hidden", d: "visible" }}
          >
            <Box color={stylelogo}>
              <MyITSLogo
                w="auto"
                h={{ base: "22px", m: "26px" }}
                mt="4px"
                mr="6px"
              />
            </Box>
            <Text fontWeight="500" fontSize={{ base: "22px", m: "26px" }}>
              Dessy
            </Text>
          </Flex>
        </Box>
        <Box
          className="sidebar__wrapper"
          maxH="100%"
          padding={{ base: "0 20px 30px", m: "0 16px 30px", d: "0 20px 30px" }}
          overflowY="auto"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Box
            className="sidebar__inner"
            width={{ base: "256px", m: "60px", d: "215px" }}
            overflow="hidden"
            transition="width .25s"
          >
            <Box className="sidebar__list" mb="20px">
              <Box
                className="sidebar__group"
                _notLast={{
                  position: "relative",
                  marginBottom: "40px",
                  paddingBottom: "30px",
                  _before: {
                    content: '""',
                    position: "absolute",
                    left: "20px",
                    right: "20px",
                    bottom: 0,
                    height: "1px",
                    background: colorMode == "light" ? "#f0f3f6" : "#292929",
                  },
                }}
              >
                <Box
                  display={{ base: "flex", d: "box" }}
                  className="sidebar__caption"
                  fontSize="12px"
                  fontWeight="500"
                  lineHeight="1.33333333"
                  mb="16px"
                  justifyContent={{
                    base: "start",
                    m: "center",
                    d: "flex-start",
                  }}
                  alignItems={{ base: "start", m: "center", d: "start" }}
                  pl={{ base: "20px", m: "0px", d: "20px" }}
                  color="#808191"
                >
                  Menu
                </Box>
                <Box className="sidebar__menu">
                  {menuItem.map((item, index) => (
                    <SidebarItem
                      menuItem={item}
                      menuIndex={index}
                      key={"main-menu-item-" + index}
                    />
                  ))}
                </Box>
              </Box>
              <Box
                className="sidebar__group"
                _notLast={{
                  position: "relative",
                  marginBottom: "40px",
                  paddingBottom: "30px",
                  _before: {
                    content: '""',
                    position: "absolute",
                    left: "20px",
                    right: "20px",
                    bottom: 0,
                    height: "1px",
                    background: colorMode == "light" ? "#f0f3f6" : "#292929",
                  },
                }}
              >
                <Box
                  display={{ base: "flex", d: "box" }}
                  className="sidebar__caption"
                  fontSize="12px"
                  fontWeight="500"
                  lineHeight="1.33333333"
                  mb="16px"
                  justifyContent={{
                    base: "start",
                    m: "center",
                    d: "flex-start",
                  }}
                  alignItems={{ base: "start", m: "center", d: "start" }}
                  pl={{ base: "20px", m: "0px", d: "20px" }}
                  color="#808191"
                >
                  Insights
                </Box>
                <Box className="sidebar__menu">
                  {menuItemInsights.map((item, index) => (
                    <SidebarItem
                      menuItem={item}
                      menuIndex={index}
                      key={"main-menu-item-" + index}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
            <Box
              className="sidebar__banner"
              _before={{
                content: '""',
                position: "absolute",
                top: "8px",
                left: "8px",
                right: "8px",
                bottom: "-8px",
                zIndex: "-1",
                borderRadius: "12px",
                background: colorMode == "light" ? "#cce8fd" : "#1d1d1d",
              }}
              mb="40px"
              pos="relative"
              mt="50px"
              p="8px 8px 20px"
              borderRadius="16px"
              bg={colorMode == "light" ? "#aadaff" : "#242424"}
              textAlign="center"
            >
              <Box className="banner_img" w="100%" h="180px"></Box>
              <Button
                minW="171px"
                color={colorMode == "light" ? "#00bfff" : "#e2e2e2"}
                bg={colorMode == "light" ? "#fff" : "#444444"}
                h="56px"
                p="0 20px"
                borderRadius="16px/16px"
                fontSize="14px"
                lineHeight="1.42857"
                fontWeight="700"
                transition="all .25s"
                _hover={{
                  background: colorMode == "light" ? "#fff" : "#383838",
                  color: colorMode == "light" ? "#008fff" : "#fff",
                }}
              >
                Check All
              </Button>
            </Box>
          </Box>
        </Box>
        {/* <Flex
          className="sidebar__bottom"
          bg="white"
          pos="absolute"
          bottom="0"
          left="0"
          right="0"
          alignItems="center"
          height="84px"
          p="0 30px"
          boxShadow="inset 0px 1px 0px rgba(0, 0, 0, 0.05)"
        >
          <Box className="sidebar__profile">
            <Flex
              className="sidebar__user"
              pos="relative"
              z-index="2"
              alignItems="center"
              h="62px"
              borderRadius="12px"
              color="#11142D"
              bg="transparent"
              transition="background .25s"
            >
              <Box
                className="profile__ava"
                flexShrink="0"
                w="40px"
                h="40px"
                borderRadius="50%"
                fontSize="0"
                bgImage="/pp.jpg"
                backgroundSize="contain"
              ></Box>
              <Box
                className="profile__desc"
                flex="0 0 calc(100% - 48px)"
                w="calc(100% - 48px)"
                p="0 5px 0 16px"
              >
                <Box
                  className="profile__name"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  fontSize="14px"
                  lineHeight="1.42857"
                  fontWeight="600"
                >
                  Sulthon Nashir
                </Box>
                <Box
                  className="profile__access"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  fontSize="13px"
                  lineHeight="1.38462"
                  fontWeight="600"
                  color="#808191"
                >
                  Administrator
                </Box>
              </Box>
              <Flex
                className="profile__arrows"
                flexShrink="0"
                justifyContent="center"
                alignItems="center"
                w="24px"
                h="24px"
                fontSize="0"
              >
                <ArrowsIconMade
                  fontSize="16px"
                  fill="#11142D"
                  w="0.63rem"
                  h="1em"
                />
              </Flex>
            </Flex>
          </Box>
        </Flex> */}
      </Flex>
      <Box
        display={{ base: isNavbarOpen ? "flex" : "none", m: "none" }}
        pos="absolute"
        h="full"
        w="100%"
        bg="none"
        zIndex="15"
        onClick={navbarToggler}
      ></Box>
    </>
  );
};

export default Sidebar;
