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
        bg={colorMode == "light" ? "blue.500" : "blue.600"}
        _hover={{
          bg: colorMode == "light" ? "blue.600" : "blue.700",
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

export { PrimaryButton };
