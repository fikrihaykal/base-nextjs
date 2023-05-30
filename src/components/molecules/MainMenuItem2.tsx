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
import { useContext } from "react";
import { motion } from "framer-motion";

const MainMenuItem = ({
  menuItem,
  menuIndex,
}: {
  menuItem: MenuItem;
  menuIndex: number;
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const { isNavbarOpen } = useContext(AppSettingContext);

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

      <Flex
        py="14px"
        pl="19px"
        justifyContent="between"
        alignItems="center"
        bg="red"
        mb="2px"
        borderRadius="10px"
      >
        <Image src={`/images/icon/${menuItem.icon}`} w="20px" />
        <Box
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          <Text lineHeight="1.1" fontWeight="medium" fontSize="14px" ml="18px;">
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
                      bg="tomato"
                      borderRadius="12px"
                      mb="2px"
                      display="flex"
                      justifyContent="start"
                      alignItems="center"
                      p="12px 18px"
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
              bg="tomato"
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
