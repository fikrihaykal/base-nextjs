import AppSettingContext from "@/providers/AppSettingProvider";
import { Box, Flex, Image, Link, Text, useColorMode } from "@chakra-ui/react";
import { useContext, useState } from "react";
import MainMenu2 from "./MainMenu2";
import { MotionBox, MotionButton } from "../motion/Motion";
import NextLink from "next/link";
import { CiViewBoard, CiViewList } from "react-icons/ci";
import { BellIcon, ChartIcon, CommentIcon, DiscoveryIcon, DocumentIcon, FolderIcon, MessageIcon, OverviewIcon, WalletIcon } from "../atoms/Icons";


const Sidebar = () => {
  const { isNavbarOpen, navbarToggler } = useContext(AppSettingContext);
  const { colorMode } = useColorMode();

  return (
    <>
      <Flex
        className="sidebar"
        w="256px"
        minW="256px"
        pos="fixed"
        flexShrink="0"
        h="100vh"
        padding="140px 0 72px"
        bg="white"
        borderRight="1px solid #e4e4e4"
     
      >
        <Box
          className="sidebar__wrapper"
          maxH="100%"
          padding="0 20px 30px"
          overflowY="auto"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
          
        >
          <Box
            className="sidebar__inner"
            width="215px"
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
                    background: "#f0f3f6",
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
                <Link as={NextLink} href="">
                  <Flex
                    className="sidebar__item"
                    _hover={{
                      color: "",
                    }}
                    alignItems="center"
                    h="56px"
                    p="0 20px"
                    borderRadius="12px"
                    fontSize="14px"
                    fontWeight="600"
                    color="white"
                    bg="#008fff"
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
                      <OverviewIcon fontSize="21px" opacity="1" />
                    </Flex>

                    <Text mr="auto">Dashboard</Text>
                  </Flex>
                  </Link>
                  <Link as={NextLink} href="">
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
                        <FolderIcon fontSize="21px" opacity="0.4"/>
                      </Flex>

                      <Text mr="auto">Berkas</Text>
                    </Flex>
                  </Link>
                  <Link as={NextLink} href="">
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
                      <DocumentIcon fontSize="21px" opacity="0.4"/>
                    </Flex>

                    <Text mr="auto">Portfolio</Text>
                  </Flex>
                  </Link>
                  <Link as={NextLink} href="">
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
                      <DiscoveryIcon fontSize="21px" opacity="0.4" />
                    </Flex>

                    <Text mr="auto">SKEM</Text>
                  </Flex>
                  </Link>
                  <Flex
                    className="sidebar__item"
                    _hover={{
                      color: "",
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
                      <ChartIcon fontSize="21px" opacity="0.4"/>
                    </Flex>

                    <Text mr="auto">Beasiswa</Text>
                  </Flex>
                  <Flex
                    className="sidebar__item"
                    _hover={{
                      color: "",
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
                      <WalletIcon fontSize="21px" opacity="0.4" />
                    </Flex>

                    <Text mr="auto">Wirausaha</Text>
                  </Flex>

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
                    background: "#f0f3f6",
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
                    <MessageIcon fontSize="21px" opacity="0.4" />
                  </Flex>
                  <Text mr="auto">Inbox</Text>
                  <Box
                    className="sidebar__counter"
                    flexShrink="0"
                    minW="24px"
                    ml="10px"
                    p="0 3px"
                    borderRadius="12px"
                    bg="#fac43a"
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
                    <BellIcon fontSize="21px" opacity="0.4" />
                  </Flex>
                  <Text mr="auto">Notifications</Text>
                  <Box
                    className="sidebar__counter"
                    flexShrink="0"
                    minW="24px"
                    ml="10px"
                    p="0 3px"
                    borderRadius="12px"
                    bg="#fac43a"
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
                    <CommentIcon fontSize="21px" opacity="0.4" />
                  </Flex>
                  <Text mr="auto">Comments</Text>
                  <Box
                    className="sidebar__counter"
                    flexShrink="0"
                    minW="24px"
                    ml="10px"
                    p="0 3px"
                    borderRadius="12px"
                    bg="#fac43a"
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
          </Box>
        </Box>
        <Flex
          className="sidebar__bottom"
          pos="absolute"
          bottom="0"
          left="0"
          right="0"
          alignItems="center"
          height="72px"
          p="0 40px"
          boxShadow="inset 0px 1px 0px rgba(0, 0, 0, 0.05)"
        ></Flex>
      </Flex>
    </>
  );
};

export default Sidebar;
