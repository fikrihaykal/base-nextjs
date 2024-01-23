import AppSettingContext from "@/providers/AppSettingProvider";
import { Button, ButtonProps, useColorMode } from "@chakra-ui/react";
import { ReactNode, useContext } from "react";

interface DangerButtonInterface extends ButtonProps {
  children: ReactNode;
  btnProps?: ButtonProps;
}

const DangerButton = ({ children, ...btnProps }: DangerButtonInterface) => {
  const { colorMode } = useColorMode();
  const { colorPref } = useContext(AppSettingContext);
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
        bg={colorMode == "light" ? "red.500" : "redDim.500"}
        _hover={{
          bg: colorMode == "light" ? "red.600" : "redDim.600",
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

const DangerSubtleButton = ({
  children,
  ...btnProps
}: DangerButtonInterface) => {
  const { colorMode } = useColorMode();
  const { colorPref } = useContext(AppSettingContext);
  return (
    <>
      <Button
        className="buttons"
        color={colorMode == "light" ? "red.500" : "redDim.300"}
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
        bg={colorMode == "light" ? "red.50" : "redDim.700"}
        _hover={{
          background: colorMode == "light" ? "red.100" : "redDim.800",
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

const DangerOutlineButton = ({
  children,
  ...btnProps
}: DangerButtonInterface) => {
  const { colorMode } = useColorMode();
  const { colorPref } = useContext(AppSettingContext);
  return (
    <>
      <Button
        className="buttons"
        color={colorMode == "light" ? "red.500" : "redDim.300"}
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
        bg="transparent"
        border="2px solid"
        borderColor={colorMode == "light" ? "red.400" : "redDim.400"}
        _hover={{
          bg: colorMode == "light" ? "red.50" : "redDim.700",
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

const DangerGhostButton = ({
  children,
  ...btnProps
}: DangerButtonInterface) => {
  const { colorMode } = useColorMode();
  const { colorPref } = useContext(AppSettingContext);
  return (
    <>
      <Button
        className="buttons"
        color={colorMode == "light" ? "red.500" : "redDim.300"}
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
        bg="transparent"
        _hover={{
          bg: colorMode == "light" ? "red.50" : "redDim.700",
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

export {
  DangerButton,
  DangerSubtleButton,
  DangerOutlineButton,
  DangerGhostButton,
};
