import { Button, ButtonProps, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DarkButtonInterface extends ButtonProps {
  children: ReactNode;
  btnProps?: ButtonProps;
}

const SmDarkButton = ({ children, ...btnProps }: DarkButtonInterface) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button
        className="buttons"
        color="#fff"
        minW="80px"
        width={["100%", "unset"]}
        h="36px"
        p="0 20px"
        ml="12px"
        borderRadius="12px"
        fontSize="13px"
        lineHeight="1.42857"
        fontWeight="600"
        transition="all .25s"
        bg="#1b1b1b"
        _hover={{
          background: colorMode == "light" ? "#008fff" : "#0071ca",
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

export { SmDarkButton };
