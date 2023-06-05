import BaseLayout from "@/components/BaseLayout";
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  hiddenHeading: { opacity: 0, x: 0, y: 0 },
  enterHeading: { opacity: 1, x: 0, y: 0 },
  exitHeading: { opacity: 0, x: 0, y: 0 },
  hiddenBody: { opacity: 0, x: 200, y: 0 },
  enterBody: { opacity: 0, x: 0, y: 0 },
  exitBody: { opacity: 0, x: 200, y: 0 },
};

const Komponen = () => {
  const page = useRouter();
  return (
    <>
      <BaseLayout>
        <Box
          as="section"
          id="dashboard-hero-section"
          pb={{ base: "4", md: "8" }}
        >
          <Stack
            direction={{ base: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <motion.main
              key={page.route}
              variants={variants} // Pass the variant object into Framer Motion
              initial="hiddenHeading" // Set the initial state to variants.hidden
              animate="enterHeading" // Animated state to variants.enter
              exit="exitHeading" // Exit state (used later) to variants.exit
              transition={{ type: "linear", duration: 0.01 }} // Set the transition to linear
            >
              <Heading>Style</Heading>
            </motion.main>
            <motion.main
              key={page.route}
              variants={variants} // Pass the variant object into Framer Motion
              initial="hiddenBody" // Set the initial state to variants.hidden
              animate="enterBody" // Animated state to variants.enter
              exit="exitBody" // Exit state (used later) to variants.exit
              transition={{ type: "linear", duration: 0.5, delay: 0.2 }} // Set the transition to linear
            >
              <Heading>Style</Heading>
            </motion.main>
          </Stack>
        </Box>
      </BaseLayout>
    </>
  );
};

export default Komponen;
