import { Button, ButtonProps, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DangerButtonInterface extends ButtonProps {
  children: ReactNode;
  cardProps?: ButtonProps;
}

const DangerButton = ({ children, ...btnProps }: DangerButtonInterface) => {
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
        borderRadius="16px/16px"
        fontSize="14px"
        lineHeight="1.42857"
        fontWeight="700"
        transition="all .25s"
        bg={colorMode == "light" ? "#ff4949" : "#ff4949"}
        _hover={{
          background: colorMode == "light" ? "#cb3a3a" : "#cb3a3a",
        }}
       
        {...btnProps}
      >
        {children}
      </Button>
    </>
  );
};

export { DangerButton };
