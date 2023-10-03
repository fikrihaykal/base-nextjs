import { Button, ButtonProps, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface LightButtonInterface extends ButtonProps {
  children: ReactNode;
  cardProps?: ButtonProps;
}

const LightButton = ({ children, ...btnProps }: LightButtonInterface) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button
        className="buttons"
        color="#141414"
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
        bg="#f7f7f7"
        _hover={{
          background: colorMode == "light" ? "#e7e7e7" : "#d7d7d7",
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

export { LightButton };
