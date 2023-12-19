import AppSettingContext from "@/providers/AppSettingProvider";
import { MenuItem } from "@/types/menu-item";
import {
  Box,
  Button,
  Collapse,
  Flex,
  Icon,
  Link,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const SidebarItem = ({
  menuItem,
  menuIndex,
}: {
  menuItem: MenuItem;
  menuIndex: number;
}) => {
  const router = useRouter().route;
  const menuTitles = router.split("/")[1];
  const { colorMode } = useColorMode();
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
  const {
    isNavbarOpen,
    markerActive,
    setMarkerActive,
    setMarkerTemp,
    navbarToggler,
    parentActive,
    setParentActive,
    setParentTemp,
  } = useContext(AppSettingContext);

  useEffect(() => {
    if (router == menuItem.url) {
      setParentTemp(parentActive);
      setParentActive(menuIndex);
      if (menuIndex > parentActive) {
        setMarkerTemp(99);
        setMarkerActive(99);
      } else if (menuIndex) {
        setMarkerTemp(-1);
        setMarkerActive(-1);
      }
    }
  }, [router, markerActive]);

  useEffect(() => {
    if ("/" + menuTitles == menuItem.url) {
      onOpen();
    } else {
      onClose();
    }
  }, [router]);

  return (
    <>
      <Link
        as={NextLink}
        href={menuItem.url}
        onClick={isNavbarOpen ? navbarToggler : ""}
      >
        <Flex
          as={motion.div}
          className="sidebar__item"
          data-group="sidebar--item"
          _hover={{
            color:
              menuItem.url.replace(/\//g, "") == menuTitles
                ? "#fff"
                : "#008fff",
          }}
          alignItems="center"
          h="54px"
          my="1px"
          pos="relative"
          p="0 20px"
          borderRadius="12px"
          fontSize="14px"
          fontWeight="600"
          color={
            menuItem.url.replace(/\//g, "") == menuTitles ? "#fff" : "#808191"
          }
          bg={
            menuItem.url.replace(/\//g, "") == menuTitles
              ? colorMode == "light"
                ? "#008fff"
                : "#0071ca"
              : "transparent"
          }
        >
          <Flex
            className="sidebar__icon"
            justifyContent="center"
            alignItems="center"
            w="24px"
            h="24px"
            mr="16px"
            data-group="sidebar--item"
          >
            <Icon
              viewBox={menuItem.icon.viewBox}
              data-group="sidebar--item"
              opacity={
                menuItem.url.replace(/\//g, "") == menuTitles
                  ? "1"
                  : colorMode == "light"
                  ? "0.4"
                  : "1"
              }
              fontSize="21px"
              fill={
                menuItem.url.replace(/\//g, "") == menuTitles
                  ? "#fff"
                  : "#808191"
              }
              _groupHover={{
                fill:
                  menuItem.url.replace(/\//g, "") == menuTitles
                    ? "#fff"
                    : colorMode == "light"
                    ? "#008fff"
                    : "#0071ca",
                opacity: 1,
              }}
            >
              <path d={menuItem.icon.d} />
            </Icon>
          </Flex>

          <Text display={{ base: "block", m: "none", d: "block" }} mr="auto">
            {menuItem.name}
          </Text>
          <Box
            className="sidebar__counter"
            flexShrink="0"
            minW="24px"
            ml="10px"
            p="0 3px"
            borderRadius="12px"
            bg={colorMode == "light" ? "#ffdd00" : "#ffa033"}
            textAlign="center"
            fontSize="12px"
            lineHeight="24px"
            fontWeight="500"
            color="white"
          >
            {menuItem.notif}
          </Box>
          {menuItem?.submenu && menuItem?.submenu.length > 0 ? (
            <Flex overflow="hidden" whiteSpace="nowrap" ml="auto">
              <Button
                onClick={(event) => {
                  event.stopPropagation();
                  event.preventDefault();
                  onToggle();
                }}
                p="2px !important"
                size="sm"
                overflow="hidden"
                whiteSpace="nowrap"
                mr="-8px"
                bg="none"
                marginLeft="auto"
                _hover={{
                  backgroundColor: "none",
                }}
                _active={{
                  backgroundColor: "none",
                }}
              >
                {isOpen ? <IoChevronUp fontWeight="bold" /> : <IoChevronDown />}
              </Button>
            </Flex>
          ) : null}
        </Flex>
      </Link>
      {menuItem?.submenu && menuItem?.submenu.length > 0 ? (
        <>
          <Collapse dir="up" in={isOpen}>
            {menuItem.submenu?.map((submenu, index) => (
              <SubmenuItem
                submenu={submenu}
                submenuIndex={index}
                key={index}
                parentIndex={menuIndex}
              />
            ))}
          </Collapse>
        </>
      ) : null}
    </>
  );
};

export default SidebarItem;

const SubmenuItem = ({
  submenu,
  submenuIndex,
  parentIndex,
}: {
  submenu: MenuItem;
  submenuIndex: number;
  parentIndex: number;
}) => {
  const router = useRouter().route;
  const { colorMode } = useColorMode();
  const {
    isNavbarOpen,
    markerActive,
    markerTemp,
    setMarkerActive,
    setMarkerTemp,
    navbarToggler,
    parentActive,
    setParentActive,
    setParentTemp,
  } = useContext(AppSettingContext);

  useEffect(() => {
    if (router == submenu.url) {
      setMarkerTemp(markerActive);
      setMarkerActive(submenuIndex);
      setParentTemp(parentActive);
      setParentActive(parentIndex);
    } else if (router == "/" + submenu.url.split("/")[1]) {
      setParentTemp(parentActive);
      setParentActive(parentIndex);
      if (parentIndex > parentActive) {
        setMarkerTemp(10);
        setMarkerActive(10);
      } else if (parentIndex) {
        setMarkerTemp(-1);
        setMarkerActive(-1);
      }
    }
  }, [router, markerActive]);

  const markerVariants = {
    in: {
      height: "12px",
      opacity: 1,
      transition: {
        duration: 0.26,
        delay: 0.215,
        ease: "easeOut",
        opacity: { duration: 0 },
      },
      top: "21px",
    },
    out: {
      height: "12px",
      opacity: 0,
      transition: {
        duration: 0,
      },
      top: "21px",
    },
    outTop: {
      height: "34px",
      opacity: 0,
      top: "20px",
      transition: {
        duration: 0.26,
        ease: [0.755, 0.08, 0.325, 0.96],
        opacity: { delay: 0.23, duration: 0 },
      },
    },
    outBot: {
      height: "34px",
      opacity: 0,
      top: "0px",
      transition: {
        duration: 0.26,
        ease: [0.755, 0.08, 0.325, 0.96],
        opacity: { delay: 0.23, duration: 0 },
      },
    },
    offTop: {
      height: "34px",
      opacity: 0,
      transition: { duration: 0.2 },
      top: "34px",
    },

    offBot: {
      height: "34px",
      opacity: 0,
      transition: { duration: 0.2 },
      top: "0px",
    },
  };

  return (
    <Link
      as={NextLink}
      href={submenu.url}
      onClick={isNavbarOpen ? navbarToggler : ""}
    >
      <Flex
        as={motion.div}
        className="sidebar__item"
        data-group="sidebar--item"
        _hover={{
          color: submenu.url == router ? "#fff" : "#008fff",
        }}
        pos="relative"
        alignItems="center"
        h="54px"
        my="4px"
        p="0 20px"
        borderRadius="12px"
        fontSize="14px"
        fontWeight="600"
        color={submenu.url == router ? "#fff" : "#808191"}
        bg={
          submenu.url == router
            ? colorMode == "light"
              ? "#008fff"
              : "#0071ca"
            : "transparent"
        }
      >
        <motion.div
          style={{
            opacity: "0",
            position: "absolute",
            left: "27px",
            top: "0px",
            height: "12px",
            width: "12px",
            borderRadius: "50%",
            backgroundColor: "#008fff40",
            border: "2px solid #fff",
          }}
          variants={markerVariants}
          animate={
            parentActive == parentIndex
              ? markerActive == submenuIndex
                ? "in"
                : markerTemp == submenuIndex
                ? markerActive > submenuIndex
                  ? "outTop"
                  : "outBot"
                : markerActive > submenuIndex
                ? "offTop"
                : "offBot"
              : parentActive > parentIndex
              ? "offTop"
              : "offBot"
          }
        ></motion.div>
        <Flex
          className="sidebar__icon"
          justifyContent="center"
          alignItems="center"
          w="24px"
          h="24px"
          mr="16px"
          data-group="sidebar--item"
        ></Flex>

        <Text display={{ base: "block", m: "none", d: "block" }} mr="auto">
          {submenu.name}
        </Text>
        <Box
          className="sidebar__counter"
          flexShrink="0"
          minW="24px"
          ml="10px"
          p="0 3px"
          borderRadius="12px"
          bg={colorMode == "light" ? "#ffdd00" : "#ffa033"}
          textAlign="center"
          fontSize="12px"
          lineHeight="24px"
          fontWeight="500"
          color="white"
        >
          {submenu.notif}
        </Box>
      </Flex>
    </Link>
  );
};
