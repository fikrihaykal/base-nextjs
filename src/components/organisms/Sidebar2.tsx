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
  const { isNavbarOpen, toggleNavbar } = useContext(AppSettingContext);
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const [hidden, setHidden] = useState(!isNavbarOpen);
  const { getButtonProps, getDisclosureProps } = useDisclosure();

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
          backgroundColor: "cyan",
          flexDirection: "column",
          marginRight: "16px",
          width: "280px"
        }}
        animate={{ width: !isNavbarOpen ? 280 : 58 }}
        transition={{ ease: [0.7, 0.193, 0.25, 0.958], duration: 0.2 }}
        // onAnimationComplete={() => setHidden(!isNavbarOpen)}
      >
        <Flex
          bg="tomato"
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
        {/* Sidebar Mainmenu */}
        {/* <motion.div
          style={{
            display: "flex",
            position: "relative",
            justifyContent: "start",
            width: "100%",
            // height: "100%",
            zIndex: "0",
            borderRadius: "full",
            backgroundColor: "yellow",
            flexDirection: "column",
            // gap: "2px",
          }}
        >
          <Flex
            py="14px"
            pl="19px"
            justifyContent="between"
            alignItems="center"
            bg="red"
            mb="2px"
            borderRadius="10px"
          >
            <Image src={`/images/icon/home.svg`} w="20px" />
            <Box
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              <Text
                lineHeight="1.1"
                fontWeight="medium"
                fontSize="14px"
                ml="18px;"
              >
                Beranda
              </Text>
            </Box>
          </Flex>
          <Flex
            py="14px"
            pl="19px"
            justifyContent="between"
            alignItems="center"
            bg="red"
            mb="2px"
            borderRadius="10px"
          >
            <Image src={`/images/icon/apps.svg`} w="20px" />
            <Box
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              <Text
                lineHeight="1.1"
                fontWeight="medium"
                fontSize="14px"
                ml="18px;"
              >
                Komponen
              </Text>
            </Box>
            <motion.div
              onClick={onToggle}
              style={{
                marginLeft: "auto",
                marginRight: "15px",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              <IoChevronDown />
            </motion.div>
          </Flex>
          <Flex
            py="14px"
            pl="19px"
            justifyContent="between"
            alignItems="center"
            bg="red"
            mb="2px"
            borderRadius="10px"
          >
            <Image src={`/images/icon/paintbrush.svg`} w="20px" />
            <Box
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              <Text
                lineHeight="1.1"
                fontWeight="medium"
                fontSize="14px"
                ml="18px;"
              >
                Style
              </Text>
            </Box>
            <motion.div
              onClick={onToggle}
              style={{
                marginLeft: "auto",
                marginRight: "15px",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              <IoChevronDown />
            </motion.div>
          </Flex>
        </motion.div> */}

        <Box display={{ base: "none", lg: "block" }} w="full" overflow="overlay">
          <MainMenu2 />
        </Box>
        <Button
          as={motion.button}
          display="flex"
          borderRadius="full"
          pos="absolute"
          right="-20px"
          top="11px"
          onClick={toggleNavbar}
          bg="none"
          whileTap={{
            scale: 0.8,
            transition: { duration: 0.3 },
          }}
        >
          {isNavbarOpen ? <IoChevronBack /> : <IoChevronForward />}
          {/* <IoChevronBack /> */}
        </Button>
      </motion.div>
    </>
  );
};

export default Sidebar;
