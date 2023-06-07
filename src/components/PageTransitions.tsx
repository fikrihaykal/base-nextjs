import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 15 },
};

const PageTransition = ({ pageTitle, children }: { pageTitle?: string, children: ReactNode }) => {
  const page = useRouter();
  return (
    <>
      <Heading>{pageTitle ?? page.route}</Heading>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.15, ease: "easeInOut", delay: 0.1}}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
