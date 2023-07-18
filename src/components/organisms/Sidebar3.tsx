import AppSettingContext from "@/providers/AppSettingProvider";
import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import MainMenu2 from "./MainMenu2";
import { MotionBox, MotionButton } from "../motion/Motion";
import NextLink from "next/link";
import { CiViewBoard, CiViewList } from "react-icons/ci";
import NextImage from "next/image";
import {
  ArrowsIcon,
  BellIcon,
  ChartIcon,
  CommentIcon,
  DiscoveryIcon,
  DocumentIcon,
  FolderIcon,
  MessageIcon,
  OverviewIcon,
  WalletIcon,
} from "../atoms/IconParams";
import SidebarItem from "../molecules/SidebarItem";
import { menuItem } from "@/data/dummy";
import {
  ArrowsIconMade,
  BellIconMade,
  CommentIconMade,
  MessageIconMade,
  MyITSLogo,
} from "../atoms/IconsMade";

const Sidebar = () => {
  const { isNavbarOpen, navbarToggler } = useContext(AppSettingContext);
  const { colorMode } = useColorMode();
  const stylelogo = useColorModeValue("#013880", "white");

  return (
    <>
      <Flex
        className="sidebar"
        w={{ base: "96px", t: "96px", d: "256px" }}
        minW={{ base: "96px", t: "96px", d: "256px" }}
        pos="fixed"
        flexShrink="0"
        h="100vh"
        padding="140px 0 0px"
        // bg="white"
        borderRight={
          colorMode == "light"
            ? "1px solid #e4e4e4"
            : "1px solid rgba(228, 228, 228, 0.1)"
        }
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
          h="140px"
        >
          <Flex justifyContent="center" alignItems="center" mt="5px">
            <Box color={stylelogo}>
              <MyITSLogo w="auto" h="26px" mt="4px" mr="6px" />
            </Box>
            <Text fontWeight="500" fontSize="26px">
              Design
            </Text>
          </Flex>
        </Box>
        <Box
          className="sidebar__wrapper"
          maxH="100%"
          padding={{base: "0 16px 30px", d:"0 20px 30px"}}
          overflowY="auto"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Box
            className="sidebar__inner"
            width={{ base: "60px", d: "215px" }}
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
                  className="sidebar__caption"
                  fontSize="12px"
                  fontWeight="500"
                  lineHeight="1.33333333"
                  mb="16px"
                  pl="20px"
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
                  className="sidebar__caption"
                  fontSize="12px"
                  fontWeight="500"
                  lineHeight="1.33333333"
                  mb="16px"
                  pl="20px"
                  color="#808191"
                >
                  Insights
                </Box>
                <Flex
                  className="sidebar__item"
                  _hover={{
                    color: "#008fff",
                  }}
                  alignItems="center"
                  h="56px"
                  p="0 20px"
                  borderRadius="12px"
                  fontSize="14px"
                  fontWeight="600"
                  color="#808191"
                  bg="transparent"
                  transition="all .25s"
                >
                  <Flex
                    className="sidebar__icon"
                    justifyContent="center"
                    alignItems="center"
                    w="24px"
                    h="24px"
                    mr="16px"
                  >
                    <MessageIconMade fontSize="21px" opacity="0.4" />
                  </Flex>
                  <Text mr="auto">Inbox</Text>
                  <Box
                    className="sidebar__counter"
                    flexShrink="0"
                    minW="24px"
                    ml="10px"
                    p="0 3px"
                    borderRadius="12px"
                    bg={colorMode == "light" ? "#fac43a" : "#db6e2b"}
                    textAlign="center"
                    fontSize="12px"
                    lineHeight="24px"
                    fontWeight="500"
                    color="white"
                  >
                    18
                  </Box>
                </Flex>
                <Flex
                  className="sidebar__item"
                  _hover={{
                    color: "#008fff",
                  }}
                  alignItems="center"
                  h="56px"
                  p="0 20px"
                  borderRadius="12px"
                  fontSize="14px"
                  fontWeight="600"
                  color="#808191"
                  bg="transparent"
                  transition="all .25s"
                >
                  <Flex
                    className="sidebar__icon"
                    justifyContent="center"
                    alignItems="center"
                    w="24px"
                    h="24px"
                    mr="16px"
                  >
                    <BellIconMade fontSize="21px" opacity="0.4" />
                  </Flex>
                  <Text mr="auto">Notifications</Text>
                  <Box
                    className="sidebar__counter"
                    flexShrink="0"
                    minW="24px"
                    ml="10px"
                    p="0 3px"
                    borderRadius="12px"
                    bg={colorMode == "light" ? "#fac43a" : "#db6e2b"}
                    textAlign="center"
                    fontSize="12px"
                    lineHeight="24px"
                    fontWeight="500"
                    color="white"
                  >
                    5
                  </Box>
                </Flex>
                <Flex
                  className="sidebar__item"
                  _hover={{
                    color: "#008fff",
                  }}
                  alignItems="center"
                  h="56px"
                  p="0 20px"
                  borderRadius="12px"
                  fontSize="14px"
                  fontWeight="600"
                  color="#808191"
                  bg="transparent"
                  transition="all .25s"
                >
                  <Flex
                    className="sidebar__icon"
                    justifyContent="center"
                    alignItems="center"
                    w="24px"
                    h="24px"
                    mr="16px"
                  >
                    <CommentIconMade fontSize="21px" opacity="0.4" />
                  </Flex>
                  <Text mr="auto">Comments</Text>
                  <Box
                    className="sidebar__counter"
                    flexShrink="0"
                    minW="24px"
                    ml="10px"
                    p="0 3px"
                    borderRadius="12px"
                    bg={colorMode == "light" ? "#fac43a" : "#db6e2b"}
                    textAlign="center"
                    fontSize="12px"
                    lineHeight="24px"
                    fontWeight="500"
                    color="white"
                  >
                    7
                  </Box>
                </Flex>
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
    </>
  );
};

export default Sidebar;
