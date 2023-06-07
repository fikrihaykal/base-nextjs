import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  initial: { opacity: 0.5, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0.5, y: 40 },
};

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
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.2,
          ease: "easeOut",
          delay: 0.06,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
