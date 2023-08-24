import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  useColorMode,
  Link,
  Text,
} from "@chakra-ui/react";
import { ReactNode, useState, useEffect, useRef } from "react";
import { SearchIconMade } from "../atoms/IconsMade";
import NextLink from "next/link";
import { DropdownDateItem, DropdownItem } from "@/types/dropdown-items";
import { Column } from "@tanstack/table-core";
import {
  ButtonImageInterface,
  CustomCheckboxInterface,
} from "@/types/component";

const CustomCheckbox = ({
  header,
  ref,
  ...checkboxProps
}: CustomCheckboxInterface) => {
  const { colorMode } = useColorMode();
  const [checked, setChecked] = useState(checkboxProps.isChecked ?? false);

  useEffect(() => {
    setChecked(checkboxProps.isChecked ?? false);
  }, [checkboxProps.isChecked]);

  return (
    <Box
      className="checkbox__custom"
      display="inline-block"
      pos="relative"
      userSelect="none"
      cursor="pointer"
    >
      <Checkbox
        className={"checkbox__input"}
        pos="absolute"
        top="0"
        left="0"
        opacity="0"
        isChecked={checked}
        {...checkboxProps}
      />
      <Flex className="checkbox__in">
        <Flex
          className="checkbox__tick"
          pos="relative"
          flex="0 0 20px"
          w="20px"
          h="20px"
          borderRadius="4px"
          border="2px solid #e4e4e4"
          transition="all .25s"
          onClick={checkboxProps.onClick}
          bg={checked ? "#008fff" : "transparent"}
          borderColor={
            checked ? "#008fff" : colorMode == "light" ? "#e4e4e4" : "#333333"
          }
          //   borderColor="#e4e4e4"
          _before={{
            content: '""',
            pos: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "10px",
            height: "9px",
            backgroundImage: `url(/check.svg)`,
            opacity: checked ? 1 : 0,
            // opacity: 1,
            transition: "all .25s",
          }}
          _hover={{
            borderColor: "#008Fff",
          }}
        />
      </Flex>
    </Box>
  );
};

export default CustomCheckbox;
