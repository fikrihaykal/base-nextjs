import { Button, ButtonProps, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SuccessButtonInterface extends ButtonProps {
  children: ReactNode;
  cardProps?: ButtonProps;
}

const SuccessButton = ({ children, ...btnProps }: SuccessButtonInterface) => {
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
        bg={colorMode == "light" ? "#78cd60" : "#78cd60"}
        _hover={{
          background: colorMode == "light" ? "#5a9a48" : "#5a9a48",
        }}
       
        {...btnProps}
      >
        {children}
      </Button>
    </>
  );
};

export { SuccessButton };
