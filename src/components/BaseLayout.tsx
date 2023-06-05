import { Box, Flex, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";
import Header from "./organisms/Header";
import Footer from "./organisms/Footer";
import Sidebar from "./organisms/Sidebar";
import Sidebar2 from "./organisms/Sidebar2";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  hidden: { opacity: 0, x: 200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -200, y: 0 },
};

const BaseLayout = ({ children }: { children: ReactNode }) => {
  const page = useRouter();
  return (
    <>
      <Flex flexDir="column" minH="100vh">
        {/* Move header to _app */}
        <Header />

        <Box
          h="100vh"
          pos="relative"
          px={{ base: "20px", md: "20px", lg: "25px", xl: "150px" }}
        >
          <Flex flexDir="column" minH="calc(100vh - 80px)">
            <Flex justifyContent="start" minH="100vh" pos="relative">
              <Sidebar2 />

              {/* Only animate this layout then, wrap this with motion.main/motion.div */}

              {/* <motion.main
                variants={variants} // Pass the variant object into Framer Motion
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                exit="exit" // Exit state (used later) to variants.exit
                transition={{ type: "linear" }} // Set the transition to linear
                className=""
              >
                {children}
              </motion.main> */}

              <Stack
                w="full"
                mt={{ base: "80px", xl: "100px" }}
                mr={{ xl: "30px" }}
                ml={{ xl: "5px" }}
              >
             
                  {children}
           
              </Stack>

              {/* till here */}
            </Flex>
          </Flex>

          {/* Move footer to _app */}
          <Footer />
        </Box>
      </Flex>
    </>
  );
};

export default BaseLayout;
