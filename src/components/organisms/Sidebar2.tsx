import {
  Box,
  Button,
  Flex,
  Menu,
  Collapse,
  Fade,
  Image,
  Link,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import {
  IoChevronBack,
  IoChevronDown,
  IoChevronForward,
  IoFingerPrint,
  IoLogOut,
  IoPersonCircle,
} from "react-icons/io5";
import MainMenu from "./MainMenu";
import AccountMenu from "./AccountMenu";
import { useContext, useState } from "react";
import AppSettingContext from "@/providers/AppSettingProvider";
import AccountMenu2 from "./AccountMenu2";
import NextLink from "next/link";
import MainMenuItem from "../molecules/MainMenuItem";
import { menuItem } from "@/data/dummy";
import { delay, motion } from "framer-motion";
import { wrap } from "module";
import MainMenu2 from "./MainMenu2";

const Sidebar = () => {
  const { isNavbarOpen, navbarToggler } = useContext(AppSettingContext);
  const { colorMode } = useColorMode();

  return (
    <>
      <Box display={{ base: "none", lg: "block" }}>
        <motion.div
          style={{
            display: "flex",
            position: "sticky",
            justifyContent: "start",
            top: "95px",
            height: "calc(100vh - 120px)",
            zIndex: "0",
            borderRadius: "full",
            backgroundColor: "",
            flexDirection: "column",
          }}
          animate={{ width: isNavbarOpen ? 260 : 88 }}
          transition={{ ease: [0.7, 0.193, 0.25, 0.958], duration: 0.2 }}
        >
          <Flex
            w={isNavbarOpen ? 220 : 58}
            // backgroundColor={colorMode == "light" ? "white" : "#212121"}
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

            // paddingRight="22px"
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
              overflow: "overlay",
              scrollbarGutter: isNavbarOpen ? "stable" : "unset",
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
          <motion.button
            style={{
              display: "flex",
              borderRadius: "full",
              top: "19px",
              position: "absolute",
            }}
            onClick={navbarToggler}
            whileTap={{
              scale: 0.8,
              transition: { duration: 0.3 },
            }}
            initial={{ right: "20px" }}
            animate={{ right: isNavbarOpen ? "24px" : "16px" }}
            transition={{ ease: [0.7, 0.193, 0.25, 0.958], duration: 0.2 }}
          >
            <motion.div
              animate={{
                rotate: isNavbarOpen ? 0 : 180,
              }}
              transition={{
                ease: "easeOut",
              }}
            >
              <Image
                src="/images/icon/chevback.png"
                borderRadius="full"
                w="23px"
              ></Image>
            </motion.div>
          </motion.button>
        </motion.div>
      </Box>
    </>
  );
};

export default Sidebar;
