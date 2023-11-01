import { Button, ButtonProps, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TextButtonInterface extends ButtonProps {
  children: ReactNode;
  cardProps?: ButtonProps;
}

const TextButton = ({ children, ...btnProps }: TextButtonInterface) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button
        className="buttons"
        color={colorMode == "light" ? "#141414" : "#fff"}
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
        bg="none"
        _hover={{
          background: colorMode == "light" ? "#e7e7e7" : "#373737",
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

export { TextButton };
