import { Button, ButtonProps, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SuccessButtonInterface extends ButtonProps {
  children: ReactNode;
  btnProps?: ButtonProps;
}

const SuccessButton = ({ children, ...btnProps }: SuccessButtonInterface) => {
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
        bg={colorMode == "light" ? "green.500" : "green.600"}
        _hover={{
          background: colorMode == "light" ? "green.600" : "green.700",
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

const SuccessSubtleButton = ({ children, ...btnProps }: SuccessButtonInterface) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button
        className="buttons"
        color={colorMode == "light" ? "green.700" : "green.200"}
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
        bg={colorMode == "light" ? "green.100" : "green.800"}
        _hover={{
          background: colorMode == "light" ? "green.200" : "green.900",
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

const SuccessOutlineButton = ({ children, ...btnProps }: SuccessButtonInterface) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button
        className="buttons"
        color={colorMode == "light" ? "green" : "green.200"}
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
        borderColor={colorMode == "light" ? "green" : "green.200"}
        _hover={{
          bg: colorMode == "light" ? "green.50" : "green.800",
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

const SuccessGhostButton = ({ children, ...btnProps }: SuccessButtonInterface) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button
        className="buttons"
        color={colorMode == "light" ? "green" : "green.200"}
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
          bg: colorMode == "light" ? "green.50" : "green.800",
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

export { SuccessButton, SuccessSubtleButton, SuccessOutlineButton, SuccessGhostButton };
