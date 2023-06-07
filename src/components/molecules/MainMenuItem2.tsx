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
import { motion } from "framer-motion";
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
      console.log("ACTIVE:", markerActive);
      console.log("TEMP:", markerTemp);
      console.log("INDEX:", menuIndex);
      console.log(menuIndex > markerTemp ? "bot" : "top");
    }
  }, [router]);

  const markerVariants = {
    inBot: {
      height: "20px",
      opacity: 1,
      transition: { duration: 0.32, delay: 0.16 },
      top: "14px",
    },
    inTop: {
      height: "20px",
      opacity: 1,
      transition: { duration: 0.32, delay: 0.16 },
      top: "14px",
    },
    outTop: {
      height: "34px",
      opacity: 0,
      top: "14px",
      transition: { duration: 0.32, opacity: {delay: 0.315, duration: 0.005} },
    },
    outBot: {
      height: "34px",
      opacity: 0,
      top: "0px",
      transition: { duration: 0.32, opacity: {delay: 0.315, duration: 0.005} },
    },
    offTop: {
      height: "34px",
      opacity: 0,
      transition: { duration: 0.32 },
      top: "34px",
    },
    offBot: {
      height: "34px",
      opacity: 0,
      transition: { duration: 0.32 },
      top: "0px",
    },
  };

  return (
    <>
      {/* <Box pos="relative">
                <Box as="li">
                    <Link as={NextLink} href={menuItem.url} display="flex" justifyContent="start" alignItems="center" p="12px 18px">
                        <Image src={`/images/icon/${menuItem.icon}`} w="20px" mr="15px" />
                        <Collapse in={isNavbarOpen}>
                            <Text as="span">{menuItem.name}</Text>
                        </Collapse>
                    </Link>
                </Box>
                {
                    menuItem?.submenu && menuItem?.submenu.length > 0 ?
                        <>
                            <Collapse in={isNavbarOpen}>
                                <Button onClick={onToggle} pos="absolute" top="0px" right="0px">
                                    {
                                        isOpen ? <IoChevronUp /> : <IoChevronDown />
                                    }
                                </Button>
                            </Collapse>
                        </> : null
                }
            </Box>
            {
                menuItem?.submenu && menuItem?.submenu.length > 0 ?
                    <>
                        <Collapse in={isNavbarOpen}>
                            <Collapse dir="up" in={isOpen}>
                                {
                                    menuItem.submenu.map((item, index) =>
                                        <Box as="li" key={"mobile-menu-item-" + menuIndex + "-submenu-" + index} >
                                            <Link as={NextLink} href={item.url} display="flex" justifyContent="start" alignItems="center" p="12px 18px">
                                                <Text as="span" ml="35px">{item.name}</Text>
                                            </Link>
                                        </Box>
                                    )
                                }
                            </Collapse>
                        </Collapse>
                    </> : null
                    
            } */}

      <Link as={NextLink} href={menuItem.url}>
        <Flex
          pos="relative"
          py="14px"
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
            boxShadow:
              menuItem.url == useRouter().route
                ? "rgba(17, 12, 46, 0.07) 0px 0px 12px 0px;"
                : "none",
          }}
          _hover={{
            _before: {
              boxShadow: "rgba(17, 12, 46, 0.07) 0px 0px 12px 0px;",
            },
          }}
          transition="all 120ms ease-out"
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
                ? menuIndex > markerTemp
                  ? "inBot"
                  : "inTop"
                : markerTemp == menuIndex
                ? markerActive > menuIndex
                  ? "outTop"
                  : "outBot"
                : markerActive > menuIndex
                ? "offTop"
                : "offBot"
            }
            // transition={{
            //   duration: 1,
            //   ease: "linear",
            //   opacity: { delay: 0.2 },
            //   top: { delay: 0.4, duration: 0.4 },
            //   height: { duration: 0.8 },
            // }}
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
              <motion.div
                onClick={onToggle}
                style={{
                  marginLeft: "auto",
                  marginRight: "15px",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {isOpen ? <IoChevronUp /> : <IoChevronDown />}
              </motion.div>
            </>
          ) : null}
        </Flex>
      </Link>
      {menuItem?.submenu && menuItem?.submenu.length > 0 ? (
        <>
          <Collapse in={isNavbarOpen}>
            <Collapse dir="up" in={isOpen}>
              {menuItem.submenu.map((item, index) => (
                <Box
                  key={"mobile-menu-item-" + menuIndex + "-submenu-" + index}
                >
                  {/* <Link
                    as={NextLink}
                    href={item.url}
                    display="flex"
                    justifyContent="start"
                    alignItems="center"
                    p="12px 18px"
                  >
                    <Text as="span" ml="35px">
                      {item.name}
                    </Text>
                  </Link> */}
                  {
                    <Link
                      as={NextLink}
                      bg=""
                      href={item.url}
                      borderRadius="12px"
                      mb="2px"
                      display="flex"
                      justifyContent="start"
                      alignItems="center"
                      p="12px 18px"
                      minH="48px"
                    >
                      <Text as="span" ml="35px">
                        {item.name}
                      </Text>
                    </Link>
                  }
                </Box>
              ))}
            </Collapse>
          </Collapse>
        </>
      ) : null}
      {/* <Collapse in={isNavbarOpen}>
        <Collapse dir="up" in={isOpen}>
          {
            <Link
              bg=""
              borderRadius="12px"
              mb="2px"
              display="flex"
              justifyContent="start"
              alignItems="center"
              p="12px 18px"
            >
              <Text as="span" ml="35px">
                Awdwad
              </Text>
            </Link>
          }
        </Collapse>
      </Collapse> */}
    </>
  );
};

export default MainMenuItem;
