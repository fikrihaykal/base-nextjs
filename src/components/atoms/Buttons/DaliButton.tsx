import AppSettingContext from "@/providers/AppSettingProvider";
import { Button, ButtonProps, useColorMode } from "@chakra-ui/react";
import { ReactNode, useContext } from "react";

interface DaliButtonInterface extends ButtonProps {
  children: ReactNode;
  btnProps?: ButtonProps;
}

const DaliButton = ({ children, ...btnProps }: DaliButtonInterface) => {
  const { colorMode } = useColorMode();
  const { colorPref } = useContext(AppSettingContext);
  return (
    <>
      <Button
        className="buttons"
        color={colorMode == "light" ? "gray.50" : "gray.900"}
        minW="166px"
        width={["100%", "unset"]}
        h="56px"
        p="0 20px"
        ml="12px"
        borderRadius="16px/16px"
        fontSize="14px"
        lineHeight="1.42857"
        fontWeight="700"
        transition="all .25s"
        bg={colorMode == "light" ? "gray.900" : "gray.50"}
        _hover={{
          bg: colorMode == "light" ? `${colorPref}.500` : `${colorPref}Dim.500`,
          color: "white",
        }}
        _first={{
          marginLeft: "0px",
        }}
        {...btnProps}
      >
        {children}
      </Button>
    </>
  );
};

const DaliSubtleButton = ({ children, ...btnProps }: DaliButtonInterface) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button
        className="buttons"
        color={colorMode == "light" ? "gray.900" : "gray.50"}
        minW="166px"
        width={["100%", "unset"]}
        h="56px"
        p="0 20px"
        ml="12px"
        borderRadius="16px/16px"
        fontSize="14px"
        lineHeight="1.42857"
        fontWeight="700"
        transition="all .25s"
        bg={colorMode == "light" ? "gray.50" : "gray.800"}
        _hover={{
          background: colorMode == "light" ? "gray.100" : "gray.900",
        }}
        _first={{
          marginLeft: "0px",
        }}
        {...btnProps}
      >
        {children}
      </Button>
    </>
  );
};

const DaliOutlineButton = ({ children, ...btnProps }: DaliButtonInterface) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button
        className="buttons"
        color={colorMode == "light" ? "gray.900" : "gray.50"}
        minW="166px"
        width={["100%", "unset"]}
        h="56px"
        p="0 20px"
        ml="12px"
        borderRadius="16px/16px"
        fontSize="14px"
        lineHeight="1.42857"
        fontWeight="700"
        transition="all .25s"
        bg="transparent"
        border="2px solid"
        borderColor={colorMode == "light" ? "gray.50" : "gray.800"}
        _hover={{
          bg: colorMode == "light" ? "gray.50" : "gray.800",
        }}
        _first={{
          marginLeft: "0px",
        }}
        {...btnProps}
      >
        {children}
      </Button>
    </>
  );
};

const DaliGhostButton = ({ children, ...btnProps }: DaliButtonInterface) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button
        className="buttons"
        color={colorMode == "light" ? "gray.900" : "gray.50"}
        minW="166px"
        width={["100%", "unset"]}
        h="56px"
        p="0 20px"
        ml="12px"
        borderRadius="16px/16px"
        fontSize="14px"
        lineHeight="1.42857"
        fontWeight="700"
        transition="all .25s"
        bg="transparent"
        _hover={{
          bg: colorMode == "light" ? "gray.50" : "gray.800",
        }}
        _first={{
          marginLeft: "0px",
        }}
        {...btnProps}
      >
        {children}
      </Button>
    </>
  );
};

export { DaliButton, DaliSubtleButton, DaliOutlineButton, DaliGhostButton };
