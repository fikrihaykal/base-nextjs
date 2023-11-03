import { Button, ButtonProps, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SecondaryButtonInterface extends ButtonProps {
  children: ReactNode;
  btnProps?: ButtonProps;
}

const SecondaryButton = ({ children, ...btnProps }: SecondaryButtonInterface) => {
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
        bg={colorMode == "light" ? "blue.100" : "blue.800"}
        _hover={{
          bg: colorMode == "light" ? "blue.200" : "blue.900",
        }}
        color={colorMode == "light" ? "blue.700" : "blue.200"}
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

export { SecondaryButton };
