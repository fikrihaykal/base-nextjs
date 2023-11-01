import { Button, ButtonProps, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DarkButtonInterface extends ButtonProps {
  children: ReactNode;
  cardProps?: ButtonProps;
}

const SmOutlineButton = ({ children, ...btnProps }: DarkButtonInterface) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button
        className="buttons"
        // color="#141414"
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
        bg="none"
        color={colorMode == "light" ? "#141414" : "#fff"}
        _hover={{
          background: colorMode == "light" ? "#008fff40" : "#0071ca50",
        }}
        boxShadow="0px 0px 0px 1px #808080"
        // bg="#f4f4f4"
        // bg="white"
        // _hover={{
        //   background: colorMode == "light" ? "#008fff" : "#0071ca",
        // }}
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

export { SmOutlineButton };
