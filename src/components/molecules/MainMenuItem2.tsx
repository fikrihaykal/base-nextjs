import {
  Box,
  Button,
  Collapse,
  Flex,
  Image,
  Link,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import NextLink from "next/link";
import { MenuItem } from "@/types/menu-item";
import AppSettingContext from "@/providers/AppSettingProvider";
import { useContext, useEffect } from "react";
import { cubicBezier, motion } from "framer-motion";
import { useRouter } from "next/router";

const MainMenuItem = ({
  menuItem,
  menuIndex,
}: {
  menuItem: MenuItem;
  menuIndex: number;
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const {
    isNavbarOpen,
    markerActive,
    markerTemp,
    setMarkerActive,
    setMarkerTemp,
  } = useContext(AppSettingContext);

  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter().route;
  const menuTitles = router.split("/")[1];

  useEffect(() => {
    if (router.startsWith(menuItem.url)) {
      setMarkerTemp(markerActive);
      setMarkerActive(menuIndex);
    }
  }, [router]);

  const markerVariants = {
    in: {
      height: "20px",
      opacity: 1,
      transition: {
        duration: 0.26,
        delay: 0.215,
        ease: "easeOut",
        opacity: { duration: 0 },
        // ease: [1.0, 0.02, 0.15, 0.84],
      },
      top: "14px",
    },
    outTop: {
      height: "34px",
      opacity: 0,
      top: "14px",
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
      <Link as={NextLink} href={menuItem.url}>
        <Flex
          as={motion.div}
          pos="relative"
          py="0px"
          pl="19px"
          justifyContent="between"
          alignItems="center"
          mb="3px"
          borderRadius="10px"
          minH="48px"
          ml="10px"
          mr="4px"
          cursor="pointer"
          bg="transparent"
          _before={{
            content: `""`,
            backgroundColor:
              menuItem.url.replace(/\//g, "") == menuTitles
                ? colorMode == "light"
                  ? "transparent"
                  : "#212121"
                : "transparent",
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "block",
            top: "0",
            left: "0",
            zIndex: "-1",
            borderRadius: "8px",
            transition: "box-shadow 0.1s ease-in-out",
            boxShadow:
              menuItem.url.replace(/\//g, "") == menuTitles
                ?  "rgba(17, 12, 46, 0.06) 0px 0px 18px 0px;"
                : "none",
          }}
          _hover={{
            _before: {
              backgroundColor: colorMode == "light" ? "white" : "#212121",
              boxShadow:  "rgba(17, 12, 46, 0.06) 0px 0px 18px 0px;"
            },
          }}
        >
          <motion.div
            style={{
              opacity: "0",
              position: "absolute",
              left: "0px",
              top: "0px",
              height: "34px",
              width: "4px",
              borderTopRightRadius: "50px",
              borderBottomRightRadius: "50px",
              backgroundColor: "#07c8f9",
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
          <Image src={`/images/icon/${menuItem.icon}`} w="20px" />
          <Box
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            <Text
              lineHeight="1.1"
              fontSize="14px"
              ml="18px"
              variant="sidebar-item"
            >
              {menuItem.name}
            </Text>
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
                  backgroundColor: colorMode == "light" ? "#ebedf0" : "#313131",
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
              paddingRight: "5px",
              marginRight: "-5px",
              marginTop: "-10px",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginBottom: "-10px",
            }}
          >
            <Collapse
              dir="up"
              in={isOpen}
              style={{
                overflowX: "visible",
                background: "transparent",
                position: "relative",
              }}
            >
              {menuItem.submenu.map((item, index) => (
                <Box
                  key={"mobile-menu-item-" + menuIndex + "-submenu-" + index}
                  pos="relative"
                >
                  {
                    <Link as={NextLink} href={item.url}>
                      <Flex
                        as={motion.div}
                        pos="relative"
                        py="0px"
                        pl="19px"
                        justifyContent="between"
                        alignItems="center"
                        mb="3px"
                        borderRadius="10px"
                        minH="48px"
                        ml="10px"
                        mr="4px"
                        cursor="pointer"
                        bg="transparent"
                        _before={{
                          content: `""`,
                          backgroundColor: "transparent",
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          display: "block",
                          top: "0",
                          left: "0",
                          zIndex: "-1",
                          borderRadius: "8px",
                          transition: "all 0.2s ease-in-out",
                          boxShadow:
                            item.url == router
                              ? "rgba(17, 12, 46, 0.06) 0px 0px 18px 0px;"
                              : "none",
                        }}
                        _hover={{
                          _before: {
                            backgroundColor:
                              colorMode == "light" ? "white" : "#212121",
                            boxShadow:
                              "rgba(17, 12, 46, 0.06) 0px 0px 18px 0px;",
                          },
                        }}
                      >
                        <Text
                          as="span"
                          ml="38px"
                          fontSize="14px"
                          lineHeight="1.1"
                          variant="sidebar-item"
                        >
                          {item.name}
                        </Text>
                      </Flex>
                    </Link>
                  }
                </Box>
              ))}
            </Collapse>
          </Collapse>
        </>
      ) : null}
    </>
  );
};

export default MainMenuItem;
