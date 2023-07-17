import PageTransition from "@/components/PageLayout";
import {
  BoxIconMade,
  EditIconMade,
  SearchIconMade,
} from "@/components/atoms/IconsMade";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import NextLink from "next/link";
import { AppSettingProvider } from "@/providers/AppSettingProvider";

interface DropdownItemInterface {
  title: string;
  subtitle?: string;
  link?: Boolean;
}

const DropdownItem = ({ title, subtitle, link }: DropdownItemInterface) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Link
        as={NextLink}
        href="#"
        display="block"
        className="dropdown__link"
        _notLast={{
          marginBottom: "16px",
        }}
      >
        <Box
          data-group="dropdown-item"
          className="dropdown__item"
          display="block"
        >
          <Box
            className="dropdown__title"
            pos="relative"
            mb="3px"
            pr="30px"
            transition="color .25s"
            _hover={{
              _before: {
                transform: "translateX(5px)",
              },
            }}
            _before={{
              content: '""',
              pos: "absolute",
              top: "5px",
              right: "8px",
              width: "6px",
              height: "10px",
              backgroundImage: "url(/chevright.svg)",
              filter: colorMode == "light" ? "none" : "invert(1)",
              // userinput
              visibility: "hidden",
              transition:
                "transform .25s, -webkit-transform .25s, -moz-transform .25s",
            }}
          >
            <Text
              _groupHover={{
                color: "#0071ca",
              }}
              fontSize="14px"
              lineHeight="1.1875"
              fontWeight="600"
            >
              {title}
            </Text>
          </Box>
          <Box
            className="dropdown__subtitle"
            pos="relative"
            mb="3px"
            pr="30px"
            transition="color .25s"
          >
            <Text
              fontSize="13px"
              lineHeight="1.38462"
              fontWeight="600"
              color="#808080"
            >
              {subtitle}
            </Text>
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default DropdownItem;
