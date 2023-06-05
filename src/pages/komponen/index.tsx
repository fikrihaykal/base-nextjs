import BaseLayout from "@/components/BaseLayout";
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  hiddenHeading: { opacity: 0, x: 0, y: 0 },
  enterHeading: { opacity: 1, x: 0, y: 0 },
  exitHeading: { opacity: 0, x: 0, y: 0 },
  hiddenBody: { opacity: 0, x: 0, y: 200 },
  enterBody: { opacity: 1, x: 0, y: 0 },
  exitBody: { opacity: 0, x: 0, y: 200 },
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
            <Heading>Komponen</Heading>
          </Stack>
          <motion.main
            key={page.route}
            variants={variants} // Pass the variant object into Framer Motion
            initial="hiddenBody" // Set the initial state to variants.hidden
            animate="enterBody" // Animated state to variants.enter
            exit="exitBody" // Exit state (used later) to variants.exit
            transition={{ type: "linear", duration: 2, delay: 0.6 }} // Set the transition to linear
          >
            <Stack justifyContent="center" h="250px">
              <Heading>Hai,</Heading>
              <Heading>Sulthon Nashir!</Heading>
              <Text>Selamat datang di myITS Design System</Text>
            </Stack>
          </motion.main>
        </Box>
      </BaseLayout>
    </>
  );
};

export default Komponen;
