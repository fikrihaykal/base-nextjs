import { Button, ButtonProps, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DarkButtonInterface extends ButtonProps {
  children: ReactNode;
  cardProps?: ButtonProps;
}

const DarkButton = ({ children, ...btnProps }: DarkButtonInterface) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button
        className="buttons"
        color="#fff"
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

export { DarkButton };
