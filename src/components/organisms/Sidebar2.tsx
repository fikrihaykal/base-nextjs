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

const Sidebar = () => {
  const { isNavbarOpen, toggleNavbar } = useContext(AppSettingContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hidden, setHidden] = useState(!isNavbarOpen);
  const { getButtonProps, getDisclosureProps } = useDisclosure();

  return (
    <>
      <motion.div
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "start",
          top: "95px",
          height: "calc(100vh - 120px)",
          width: "220px",
          zIndex: "0",
        }}
        animate={{ width: isNavbarOpen ? 220 : 80 }}
        transition={{ type: "easeOut" }}
      >
        <Flex
          w="full"
          h="60px"
          px="10px"
          boxShadow="base"
          borderRadius="12px"
          pos="relative"
          display="flex"
          justifyContent="between"
          alignItems="center"
          gap="10px"
        >
          <Box minW="42px" w="42px" h="42px" minH="42px" ml={{ lg: "4px" }}>
            <Image src="/images/app/profile-default.jpg" borderRadius="full" />
          </Box>

          <motion.div
            animate={{ display: isNavbarOpen ? "block" : "none" }}
            transition={{ delay: 0.01 }}
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            <Text>Administrator</Text>
            <Text>Sulthon Nashir</Text>
          </motion.div>
        </Flex>

        <Button
          display="flex"
          pos="absolute"
          right="-10px"
          top="14px"
          onClick={toggleNavbar}
        >
          {isNavbarOpen ? <IoChevronBack /> : <IoChevronForward />}
        </Button>
      </motion.div>
    </>
  );
};

export default Sidebar;
