import AppSettingContext from "@/providers/AppSettingProvider";
import { Input, InputProps, useColorMode } from "@chakra-ui/react";
import React, { FC, useContext } from "react";

const InputText: FC<InputProps> = ({ ...props }) => {
  const { colorMode } = useColorMode();
  const { colorPref } = useContext(AppSettingContext);
  return (
    <Input
      {...props}
      className="sorting__input"
      w="100%"
      h="56px"
      p="0px 20px 0 20px"
      outline="2px solid"
      outlineColor="transparent"
      border="unset"
      borderRadius="16px"
      bg={colorMode == "light" ? "rgba(228,228,228,0.3)" : "#292929"}
      fontSize="14px"
      fontWeight="600"
      color={colorMode == "light" ? "#1b1d21" : "#fff"}
      _placeholder={{
        color: colorMode === "light" ? "gray.500" : "gray.600",
        fontWeight: "500",
      }}
      placeholder={props.placeholder}
      _hover={{
        outlineColor: "transparent",
      }}
      _focusVisible={{
        outlineColor: colorMode === "light" ? `${colorPref}.500` : `${colorPref}Dim.500`,
        background: colorMode == "light" ? "white" : "#222222",
      }}
      transition="all .25s"
    />
  );
};

export default InputText;
