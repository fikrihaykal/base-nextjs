import { Box, Heading, Stack, useColorMode } from "@chakra-ui/react";
import { ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const titledMenu = {
  initial: { opacity: 0.58, y: 0 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: [0.58], y: 0 },
};

const PageTransition = ({
  pageTitle,
  children,
}: {
  pageTitle?: string;
  children: ReactNode;
}) => {
  const page = useRouter().route;
  const n = page.lastIndexOf("/");
  const r = page.substring(n + 1);
  const defTitle = r.charAt(0).toUpperCase() + r.slice(1).toLowerCase();

  const { colorMode } = useColorMode();
  useEffect(() => {
    document.querySelector("body")?.classList.add(colorMode == "light" ? "light" : "dark");
    document.querySelector("body")?.classList.remove(colorMode == "light" ? "dark" : "light");
  });
  return (
    <>
      <Box as="section" id="dashboard-hero-section" pb={{ base: "2", md: "2" }}>
        <Stack
          direction={{ base: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading ml="5px" variant="page-heading">
            {defTitle !== "" ? defTitle : "\u00A0"}
          </Heading>
        </Stack>
      </Box>
      <motion.div
        variants={titledMenu}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.187,
          ease: "easeOut",
          delay: 0,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
