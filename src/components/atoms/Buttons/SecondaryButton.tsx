import { Button, ButtonProps, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SecondaryButtonInterface extends ButtonProps {
  children: ReactNode;
  cardProps?: ButtonProps;
}

const SecondaryButton = ({
  children,
  ...btnProps
}: SecondaryButtonInterface) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button
        className="buttons"
        minW="166px"
        // width={["100%", "unset"]}
        h="56px"
        // ml="12px"
        borderRadius="16px/16px"
        fontSize="14px"
        lineHeight="1.42857"
        fontWeight="700"
        transition="all .25s"
        bg={colorMode == "light" ? "#008fff20" : "#0071ca70"}
        _hover={{
          background: colorMode == "light" ? "#008fff40" : "#0071ca50",
        }}
        color={colorMode == "light" ? "#008fff" : "#fff"}
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
