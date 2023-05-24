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
import { motion } from "framer-motion";

const Sidebar = () => {
  const { isNavbarOpen, toggleNavbar } = useContext(AppSettingContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hidden, setHidden] = useState(!isNavbarOpen);
  const { getButtonProps, getDisclosureProps } = useDisclosure();

  return (
    <>
      <Flex
        flexDir="column"
        pos="relative"
        justifyContent="start"
        style={{ position: "sticky" }}
        top="95px"
        h="calc(100vh - 120px)"
        zIndex="0"
      >
        <Box as={motion.div}
        height=''>

        </Box>
      </Flex>
    </>
  );
};

export default Sidebar;
