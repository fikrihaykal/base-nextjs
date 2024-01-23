import { Button, ButtonProps, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PrimaryButtonInterface extends ButtonProps {
  children: ReactNode;
  cardProps?: ButtonProps;
}

const MdPrimaryButton = ({ children, ...btnProps }: PrimaryButtonInterface) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button
        className="buttons"
        color="#fff"
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
        bg={colorMode == "light" ? "#008fff" : "#0071ca"}
        _hover={{
          background: colorMode == "light" ? "#0072cc" : "#005496",
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

const MdPrimaryButtonDanger = ({
  children,
  ...btnProps
}: PrimaryButtonInterface) => {
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
        bg={colorMode == "light" ? "#e11313" : "#ef4444"}
        _hover={{
          background: colorMode == "light" ? "#a90f0f" : "#f26969",
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

export { MdPrimaryButton, MdPrimaryButtonDanger };
