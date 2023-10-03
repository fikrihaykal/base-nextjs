import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const PageCenter = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Box
        className="page__center"
        w={{ base: "100%", x: "unset" }}
        maxW={{ base: "930px", x: "1360px" }}
        m="0 auto"
        p={{
          base: "0 16px 32px",
          m: "0 32px 40px",
          t: "0 70px 40px",
          x: "unset",
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default PageCenter;
