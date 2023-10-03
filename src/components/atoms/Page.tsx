import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

const Page = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Flex className="page" flexDirection="column" minH="100vh">
        {children}
      </Flex>
    </>
  );
};

export default Page;
