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

  const stateVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <>
      <motion.div
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "start",
          top: "95px",
          height: "calc(100vh - 120px)",
          zIndex: "0",
          borderRadius: "full",
        }}
        animate={{ width: isNavbarOpen ? 260 : 68 }}
        transition={{ ease: [0.7, 0.193, 0.25, 0.958], duration: 0.3 }}
        onAnimationComplete={() => setHidden(!isNavbarOpen)}
      >
        <Flex
          w="full"
          h="60px"
          px="10px"
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
            variants={stateVariants}
            initial="visible"
            animate="hidden"
            transition={{}}
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
          as={motion.button}
          display="flex"
          borderRadius="full"
          pos="absolute"
          right="-10px"
          top="12px"
          onClick={toggleNavbar}
          whileTap={{
            scale: 0.8,
            transition: { duration: 0.3 },
          }}
        >
          {/* {isNavbarOpen ? <IoChevronBack /> : <IoChevronForward />} */}
          <IoChevronBack />
        </Button>
      </motion.div>
    </>
  );
};

export default Sidebar;
