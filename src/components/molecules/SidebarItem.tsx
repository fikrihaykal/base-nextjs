import {
  Flex,
  Icon,
  Link,
  Text,
  useColorMode,
  Box,
  Button,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import { DiscoveryIcon, WalletIcon } from "../atoms/IconParams";
import { MenuItem } from "@/types/menu-item";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import AppSettingContext from "@/providers/AppSettingProvider";
import { sub } from "date-fns";
import { motion } from "framer-motion";
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
  const { isOpen, onToggle } = useDisclosure();
  const {
    isNavbarOpen,
    markerActive,
    markerTemp,
    setMarkerActive,
    setMarkerTemp,
    navbarToggler,
  } = useContext(AppSettingContext);

  useEffect(() => {
    if (router.startsWith(menuItem.url)) {
      setMarkerTemp(markerActive);
      setMarkerActive(menuIndex);
      console.log(markerActive, menuIndex, "s");
      // console.log(router)
    }
  }, [
    router,
    markerActive,
    menuIndex,
    menuItem,
    setMarkerActive,
    setMarkerTemp,
  ]);

  const markerVariants = {
    in: {
      height: "20px",
      opacity: 1,
      transition: {
        duration: 0.26,
        delay: 0.215,
        ease: "easeOut",
        opacity: { duration: 0 },
      },
      top: "17px",
    },
    outTop: {
      height: "34px",
      opacity: 0,
      top: "17px",
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
          <motion.div
            style={{
              opacity: "0",
              position: "absolute",
              left: "0px",
              top: "0px",
              height: "36px",
              width: "8px",
              borderTopRightRadius: "4px",
              borderBottomRightRadius: "4px",
              backgroundColor: "#fff",
            }}
            variants={markerVariants}
            animate={
              markerActive == menuIndex
                ? "in"
                : markerTemp == menuIndex
                ? markerActive > menuIndex
                  ? "outTop"
                  : "outBot"
                : markerActive > menuIndex
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
                p="5px !important"
                size="sm"
                overflow="hidden"
                whiteSpace="nowrap"
                marginRight="10px"
                bg="none"
                marginLeft="auto"
                _hover={{
                  backgroundColor:"none"
                }}
              >
                {isOpen ? <IoChevronUp /> : <IoChevronDown />}
              </Button>
            </Flex>
          ) : null}
        </Flex>
      </Link>
      {menuItem?.submenu && menuItem?.submenu.length > 0 ? (
        <>
          <Collapse
            in={!isNavbarOpen}
            style={{
              background: "transparent",
              position: "relative",
            }}
          >
            <Collapse dir="up" in={isOpen}>
              {menuItem.submenu?.map((submenu, index) => (
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
                    <Flex
                      className="sidebar__icon"
                      justifyContent="center"
                      alignItems="center"
                      w="24px"
                      h="24px"
                      mr="16px"
                      data-group="sidebar--item"
                    >
                      {/* <Icon
                viewBox={submenu.icon.viewBox}
                data-group="sidebar--item"
                opacity={
                  submenu.url.replace(/\//g, "") == menuTitles
                    ? "1"
                    : colorMode == "light"
                    ? "0.4"
                    : "1"
                }
                fontSize="21px"
                fill={
                  submenu.url.replace(/\//g, "") == menuTitles
                    ? "#fff"
                    : "#808191"
                }
                _groupHover={{
                  fill:
                    submenu.url.replace(/\//g, "") == menuTitles
                      ? "#fff"
                      : colorMode == "light"
                      ? "#008fff"
                      : "#0071ca",
                  opacity: 1,
                }}
              >
                <path d={submenu.icon.d} />
              </Icon> */}
                    </Flex>

                    <Text
                      display={{ base: "block", m: "none", d: "block" }}
                      mr="auto"
                    >
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
              ))}
            </Collapse>
          </Collapse>
        </>
      ) : null}
    </>
  );
};

export default SidebarItem;
