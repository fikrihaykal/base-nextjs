import { Flex, Icon, Link, Text } from "@chakra-ui/react";
import { DiscoveryIcon, WalletIcon } from "../atoms/Icons";
import { MenuItem } from "@/types/menu-item";
import NextLink from "next/link";
import { useRouter } from "next/router";

const SidebarItem = ({
  menuItem,
  menuIndex,
}: {
  menuItem: MenuItem;
  menuIndex: number;
}) => {
  const router = useRouter().route;
  const menuTitles = router.split("/")[1];
  return (
    <Link as={NextLink} href={menuItem.url}>
      <Flex
        className="sidebar__item"
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
            ? "#008fff"
            : "transparent"
        }
        transition="all .25s"
      >
        <Flex
          className="sidebar__icon"
          justifyContent="center"
          alignItems="center"
          w="24px"
          h="24px"
          mr="16px"
        >
          <Icon
            viewBox={menuItem.icon.viewBox}
            opacity={
              menuItem.url.replace(/\//g, "") == menuTitles ? "1" : "0.4"
            }
            fontSize="21px"
          >
            <path
              d={menuItem.icon.d}
              fill={
                menuItem.url.replace(/\//g, "") == menuTitles
                  ? "#fff"
                  : "#808191"
              }
            />
          </Icon>
        </Flex>

        <Text mr="auto">{menuItem.name}</Text>
      </Flex>
    </Link>
  );
};

export default SidebarItem;
