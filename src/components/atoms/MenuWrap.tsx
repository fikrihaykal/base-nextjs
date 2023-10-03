import { Flex } from "@chakra-ui/react";
import {
    ReactNode
} from "react";

const MenuWrap = ({ children }: { children: ReactNode }) => {
  return (
    <>
       <Flex className="page__mainmenu" m="0 -16px" wrap="wrap" pt="24px">
        {children}
      </Flex>
    </>
  );
};

export default MenuWrap;
