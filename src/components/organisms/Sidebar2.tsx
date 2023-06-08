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

  return (
    <>
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
        // onClick={() => navbarToggler}
        initial={{ width: 300 }}
        animate={{ width: isNavbarOpen ? 300 : 88 }}
        transition={{ ease: [0.7, 0.193, 0.25, 0.958], duration: 0.2 }}
        onAnimationComplete={() => navbarToggler}
      >
        <Flex
          // bg="blue"
          w="full"
          h="60px"
          minH="60px"
          px="4px"
          borderRadius="12px"
          pos="relative"
          display="flex"
          justifyContent="between"
          alignItems="center"
          gap="10px"
          paddingLeft="15px"
          paddingRight="20px"
        >
          <Box minW="42px" w="42px" h="42px" minH="42px" ml={{ lg: "4px" }}>
            <Image src="/images/app/profile-default.jpg" borderRadius="full" />
          </Box>

          <Box
            mx="5px"
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            <Text
              lineHeight="1.1"
              color="#8392a5"
              fontWeight="medium"
              fontSize="14px"
        
            >
              Administrator
            </Text>
            <Text
              lineHeight="1.2"
              color="#232323"
              fontWeight="medium"
              fontSize="16px"
            >
              Sulthon Nashir
            </Text>
          </Box>
        </Flex>

        <Box
          display={{ base: "none", lg: "block" }}
          w="full"
          pos="relative"
          sx={{
            'overflow': "overlay",
            'scrollbar-gutter': isNavbarOpen ? "stable": "unset",
          }}
        >
          <MainMenu2 />
        </Box>
        <Button
          as={motion.button}
          display="flex"
          borderRadius="full"
          pos="absolute"
          right= {isNavbarOpen ? "10px": "-2px"}
          top="11px"
          onClick={navbarToggler}
          bg="none"
          whileTap={{
            scale: 0.8,
            transition: { duration: 0.3 },
          }}
        >
          {isNavbarOpen ? <IoChevronBack /> : <IoChevronForward />}
        </Button>
      </motion.div>
    </>
  );
};

export default Sidebar;
