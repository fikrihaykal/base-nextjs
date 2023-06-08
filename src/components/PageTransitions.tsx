import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const titledMenu = {
  initial: { opacity: 0.75, y: 40},
  animate: { opacity: 1, y: 0},
  exit: { opacity: 0.45, y: 40},
};

const untitledMenu = {}

const PageTransition = ({
  pageTitle,
  children,
}: {
  pageTitle?: string;
  children: ReactNode;
}) => {
  const page = useRouter().route;
  const defTitle = page.charAt(1).toUpperCase() + page.slice(2).toLowerCase();
  return (
    <>
      <Heading>{pageTitle ?? defTitle}</Heading>
      <motion.div
        variants={titledMenu}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.18,
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
