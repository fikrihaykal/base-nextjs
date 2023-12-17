import { Button, ButtonProps, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PrimaryButtonInterface extends ButtonProps {
  children: ReactNode;
  btnProps?: ButtonProps;
}

const PrimaryButton = ({ children, ...btnProps }: PrimaryButtonInterface) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button
        className="buttons"
        color="white"
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
        bg={colorMode == "light" ? "blue.500" : "#007FEB"}
        _hover={{
          bg: colorMode == "light" ? "blue.600" : "#0061B7",
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

const PrimarySubtleButton = ({ children, ...btnProps }: PrimaryButtonInterface) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button
        className="buttons"
        color={colorMode == "light" ? "blue.500" : "#007FEB"}
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
        bg={colorMode == "light" ? "blue.100" : "blue.800"}
        _hover={{
          background: colorMode == "light" ? "blue.200" : "blue.900",
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

const PrimaryOutlineButton = ({ children, ...btnProps }: PrimaryButtonInterface) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button
        className="buttons"
        color={colorMode == "light" ? "blue.500" : "#007FEB"}
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
        borderColor={colorMode == "light" ? "blue.500" : "#007FEB"}
        _hover={{
          bg: colorMode == "light" ? "blue.50" : "blue.800",
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

const PrimaryGhostButton = ({ children, ...btnProps }: PrimaryButtonInterface) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button
        className="buttons"
        color={colorMode == "light" ? "blue.500" : "#007FEB"}
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
          bg: colorMode == "light" ? "blue.50" : "blue.800",
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

export { PrimaryButton, PrimarySubtleButton, PrimaryOutlineButton, PrimaryGhostButton };