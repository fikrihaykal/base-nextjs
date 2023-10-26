import { Button, ButtonProps, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DangerButtonInterface extends ButtonProps {
  children: ReactNode;
  btnProps?: ButtonProps;
}

const DangerButton = ({ children, ...btnProps }: DangerButtonInterface) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button
        className="buttons"
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
        bg={colorMode == "light" ? "red.50" : "red.800"}
        _hover={{
          background: colorMode == "light" ? "red.100" : "red.900",
        }}
        color={colorMode == "light" ? "red" : "red.200"}
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

export { DangerButton };
