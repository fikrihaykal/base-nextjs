import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Box
        className="page__wrapper"
        flexGrow="1"
        pl={{ base: "0px", m: "96px", d: "240px" }}
        transition="all .25s"
        overflow="hidden"
      >
        {children}
      </Box>
    </>
  );
};

export default PageWrapper;
