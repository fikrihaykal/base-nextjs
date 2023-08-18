import { Flex, Icon, Link, Text, useColorMode, Box } from "@chakra-ui/react";
import { DiscoveryIcon, WalletIcon } from "../atoms/IconParams";
import { MenuItem } from "@/types/menu-item";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import AppSettingContext from "@/providers/AppSettingProvider";

const SidebarItem = ({
  menuItem,
}: {
  menuItem: MenuItem;
  menuIndex: number;
}) => {
  const router = useRouter().route;
  const menuTitles = router.split("/")[1];
  const { colorMode } = useColorMode();
  const { isNavbarOpen, navbarToggler } = useContext(AppSettingContext);
  return (
    <Link
      as={NextLink}
      href={menuItem.url}
      onClick={isNavbarOpen ? navbarToggler : ""}
    >
      <Flex
        className="sidebar__item"
        data-group="sidebar--item"
        _hover={{
          color:
            menuItem.url.replace(/\//g, "") == menuTitles ? "#fff" : "#008fff",
        }}
        alignItems="center"
        h="56px"
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
              menuItem.url.replace(/\//g, "") == menuTitles ? "#fff" : "#808191"
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
          bg={colorMode == "light" ? "#fac43a" : "#db6e2b"}
          textAlign="center"
          fontSize="12px"
          lineHeight="24px"
          fontWeight="500"
          color="white"
        >
          {menuItem.notif}
        </Box>
      </Flex>
    </Link>
  );
};

export default SidebarItem;
