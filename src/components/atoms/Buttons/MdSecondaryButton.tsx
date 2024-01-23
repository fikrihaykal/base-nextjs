import { Button, ButtonProps, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SecondaryButtonInterface extends ButtonProps {
  children: ReactNode;
  cardProps?: ButtonProps;
}

const MdSecondaryButton = ({
  children,
  ...btnProps
}: SecondaryButtonInterface) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button
        className="buttons"
        minW="80px"
        width={["100%", "unset"]}
        h="46px"
        p="0 20px"
        // ml="12px"
        borderRadius="16px"
        fontSize="13px"
        lineHeight="1.42857"
        fontWeight="600"
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

const MdSecondaryButtonDanger = ({
  children,
  ...btnProps
}: SecondaryButtonInterface) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button
        className="buttons"
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
        bg={colorMode == "light" ? "#e1131320" : "#0071ca70"}
        _hover={{
          background: colorMode == "light" ? "#e1131340" : "#0071ca50",
        }}
        color={colorMode == "light" ? "#e11313" : "#fff"}
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

export { MdSecondaryButton, MdSecondaryButtonDanger };
