import {
  Box,
  Button,
  Collapse,
  Flex,
  Image,
  Link,
  Text,
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
  const router = useRouter().route;

  useEffect(() => {
    if (menuItem.url == router) {
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
        delay: 0.205,
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
        opacity: { delay: 0.24, duration: 0 },
      },
    },
    outBot: {
      height: "34px",
      opacity: 0,
      top: "0px",
      transition: {
        duration: 0.26,
        ease: [0.755, 0.08, 0.325, 0.96],
        opacity: { delay: 0.24, duration: 0 },
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
          mx="10px"
          cursor="pointer"
          zIndex="20"
          bg="transparent"
          _before={{
            content: `""`,
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
              menuItem.url == useRouter().route
                ? "rgba(17, 12, 46, 0.07) 0px 2px 12px 0px;"
                : "none",
          }}
          _hover={{
            _before: {
              boxShadow: "rgba(17, 12, 46, 0.07) 0px 2px 12px 0px;",
            },
          }}
        >
          <motion.div
            style={{
              opacity: "1",
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
              fontWeight="medium"
              fontSize="14px"
              ml="18px;"
            >
              {menuItem.name}
            </Text>
          </Box>

          {menuItem?.submenu && menuItem?.submenu.length > 0 ? (
            <>
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
                _hover={{ bg: "#ebedf0" }}
              >
                {isOpen ? <IoChevronUp /> : <IoChevronDown />}
              </Button>
            </>
          ) : null}
        </Flex>
      </Link>
      {menuItem?.submenu && menuItem?.submenu.length > 0 ? (
        <>
          <Collapse in={isNavbarOpen}>
            <Collapse dir="up" in={isOpen}>
              <Box pb="5px">
                {menuItem.submenu.map((item, index) => (
                  <Box
                    key={"mobile-menu-item-" + menuIndex + "-submenu-" + index}
                    pos="relative"
                  >
                    {
                      <Flex
                        // as={NextLink}
                        pos="relative"
                        py="0px"
                        pl="19px"
                        justifyContent="between"
                        alignItems="center"
                        mb="3px"
                        borderRadius="10px"
                        minH="48px"
                        mx="10px"
                        cursor="pointer"
                        zIndex="20"
                        _before={{
                          content: `""`,
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          display: "block",
                          top: "0",
                          left: "0",
                          zIndex: "-1",
                          borderRadius: "8px",
                          transition: "all 0.2s ease-in-out",
                        }}
                        _hover={{
                          _before: {
                            boxShadow:
                              "rgba(17, 12, 46, 0.07) 0px 2px 12px 0px;",
                          },
                        }}
                      >
                        <Text
                          as="span"
                          ml="35px"
                          lineHeight="1.1"
                          fontWeight="medium"
                          fontSize="14px"
                        >
                          {item.name}
                        </Text>
                      </Flex>
                    }
                  </Box>
                ))}
              </Box>
            </Collapse>
          </Collapse>
        </>
      ) : null}
    </>
  );
};

export default MainMenuItem;
